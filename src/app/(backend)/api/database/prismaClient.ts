import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

export { UserSchema, DocumentSchema, TypeDocsSchema,OriginDocsSchema,} from '../../../../../prisma/generated/zod';
