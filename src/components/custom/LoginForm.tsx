"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Schema Validasi
const formSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
  }

  return (
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
                <Input className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Masukkan email" {...field} />
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
                <Input type="password" className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-white" placeholder="Masukkan password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Login
        </Button>

        {/* Register Button */}
        <p className="text-sm text-center">Doesn&apos;t have Account? <Link href="/register" className="hover:underline opacity-65">Register</Link></p>
        
      </form>
    </Form>
  );
}
