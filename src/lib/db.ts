import { PrismaClient } from '../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import env from "dotenv";

env.config();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaNeon({connectionString: process.env.DATABASE_URL});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ['query', 'info']
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
