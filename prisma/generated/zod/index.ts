import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const UserScalarFieldEnumSchema = z.enum(['id','username','email','password']);

export const DocumentScalarFieldEnumSchema = z.enum(['id','codigo','valTributs','liquidVals','file','createdAt','userId']);

export const OriginDocsScalarFieldEnumSchema = z.enum(['id','origin','documentId']);

export const TypeDocsScalarFieldEnumSchema = z.enum(['id','type','documentId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
  id: z.string(),
  codigo: z.string(),
  valTributs: z.number(),
  liquidVals: z.number(),
  file: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string(),
})

export type Document = z.infer<typeof DocumentSchema>

/////////////////////////////////////////
// ORIGIN DOCS SCHEMA
/////////////////////////////////////////

export const OriginDocsSchema = z.object({
  id: z.string(),
  origin: z.string(),
  documentId: z.string(),
})

export type OriginDocs = z.infer<typeof OriginDocsSchema>

/////////////////////////////////////////
// TYPE DOCS SCHEMA
/////////////////////////////////////////

export const TypeDocsSchema = z.object({
  id: z.string(),
  type: z.string(),
  documentId: z.string(),
})

export type TypeDocs = z.infer<typeof TypeDocsSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////
