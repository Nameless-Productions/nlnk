FROM node:24-slim AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma contract emit

RUN pnpm build


FROM node:24-slim AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma.config.ts ./
COPY --from=builder /app/src/lib/contract.prisma ./src/lib/contract.prisma
COPY --from=builder /app/src/lib/contract.json ./src/lib/contract.json
COPY --from=builder /app/src/lib/contract.d.ts ./src/lib/contract.d.ts

COPY start.sh ./
RUN chmod +x start.sh

EXPOSE 3000
CMD ["./start.sh"]