#!/bin/sh
set -e

echo "Pushing to db"
./node_modules/.bin/prisma db update --db "$DATABASE_URL"

echo "Starting"
exec node build