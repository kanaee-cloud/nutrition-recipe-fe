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
import { LoginSchema, Login } from "@/lib/types/auth";
import { useAuth } from "@/lib/auth/hooks";
import Link from "next/link";

// const formSchema = z.object({
//   email: z.string().email({ message: "Email tidak valid" }),
//   password: z.string().min(6, { message: "Password minimal 6 karakter" }),
// });
export default function LoginPage() {

  const { login: loginUser, loading, error } = useAuth();

  
     const form = useForm<Login>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          email: "",
        
          password: "",
        },
      });

    const onSubmit = (values: Login) => {
        loginUser(values);
      };

    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-black opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[120px] opacity-50" />
        </div>
        <div className="relative z-10 p-8 backdrop-blur-lg rounded-xl shadow-lg max-w-sm w-full">
          <h1 className="font-semibold mb-4 text-2xl text-white text-center">
            Login
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
              {loading ? "Wait..." : "Login"}
              </Button>

              {/* Register Button */}
              <p className="text-sm text-center">
                Doesn&apos;t have Account?{" "}
                <Link href="/register" className="hover:underline opacity-65">
                  Register
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    );
  }

