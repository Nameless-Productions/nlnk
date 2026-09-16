import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from './generated/prisma/client';
import { env } from '$env/dynamic/private';

const adapter = new PrismaLibSql({
	url: env.DATABASE_URL
});

export const db = new PrismaClient({ adapter });
