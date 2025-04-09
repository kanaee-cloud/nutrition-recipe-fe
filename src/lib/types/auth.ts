import { date, z } from "zod";

export const UserSchema = z.object({
    username: z.string(),
    user_auth: z.string(),
    role: z.enum(["user", "admin"]),
    product: z.array(z.string()),
})

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    username: z.string().min(3, { message: "Username minimal 3 karakter" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
  });

  export const LoginSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(1, { message: "Password wajib diisi" }),
  });

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
    email: z.string(),
    password: z.string(),
    role: z.enum(["USER", "ADMIN"]),
})

export type User = z.infer<typeof UserSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Auth = z.infer<typeof AuthSchema>;
export type Register = z.infer<typeof RegisterSchema>;
export type Login = z.infer<typeof LoginSchema>;
