"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterSchema, Register } from "@/lib/types/auth";
import { useAuth } from "@/lib/auth/hooks";

// const formSchema = z.object({
//   email: z.string().email({ message: "Email tidak valid" }),
//   username: z.string().min(3, { message: "Username minimal 3 karakter" }),
//   password: z.string().min(6, { message: "Password minimal 6 karakter" }),
// });

export default function RegisterPage() {

  const { register: registerUser, loading, error } = useAuth();

  const form = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: Register) => {
    registerUser(values);
  };


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-black opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 blur-[100px] opacity-50" />
      </div>
      <div className="relative z-10 p-8  backdrop-blur-lg rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="font-semibold mb-4 text-2xl text-white text-center">
          Register
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-6 border rounded-lg w-[350px] shadow-lg 
          bg-white dark:bg-neutral-900 dark:border-neutral-800"
          >
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                      placeholder="Masukkan email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Username</FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                      placeholder="Masukkan username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                      placeholder="Masukkan password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
            {loading ? "Wait..." : "Register"}
            </Button>

            {/* Register Button */}
            <p className="text-sm text-center">
              Already have Account?{" "}
              <Link href="/login" className="hover:underline opacity-65">
                Login
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
