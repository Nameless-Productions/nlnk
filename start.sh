#!/bin/sh
set -e

echo "Pushing to db"
./node_modules/.bin/prisma db update --db "$DATABASE_URL"

echo "Building"
pnpm build

echo "Starting"
exec node build