#!/bin/sh

echo "Pushing to db"
pnpm prisma db update --db "$DATABASE_URL"

echo "Starting"
exec node build