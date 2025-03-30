"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/custom/AppSidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React from "react";
import { User } from "@/lib/schema";

const mockUser = {
  username: "johndoe",
  user_auth: "auth_123456",
  role: "user",
  product: ["prod_001", "prod_002"]
};


const getCurrentUser = () => {
  return Promise.resolve(mockUser);
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar user={user} loading={loading}/>
      <main className="flex flex-col w-full h-screen overflow-hidden p-4 gap-y-4">
        <Breadcrumb className="flex w-full gap-x-2 items-center">
        <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/users">User</BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.slice(1).map((segment, index) => (
              <React.Fragment key={`segment-${index}`}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="">
                  <BreadcrumbLink href={`/${pathSegments.slice(0, index + 2).join("/")}`}>{segment}</BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <section className="h-screen w-full ">{children}</section>
      </main>
    </SidebarProvider>
  );
}