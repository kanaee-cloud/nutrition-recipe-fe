import { date, z } from "zod";

export const UserSchema = z.object({
    username: z.string(),
    user_auth: z.string(),
    role: z.enum(["user", "admin"]),
    product: z.array(z.string()),
})

export const ProductSchema = z.object({
    user: z.string(),
    detail: z.string(),
    name: z.string(),
    description: z.string(),
    nutrition: z.string(),
})

export const HistorySchema = z.object({
    product: z.string(),
    date: date(),
})

export const AuthSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum(["user", "admin"]),
})

export type User = z.infer<typeof UserSchema>;
export type Product = z.infer<typeof ProductSchema>;