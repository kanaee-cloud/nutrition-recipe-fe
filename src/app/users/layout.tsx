"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/custom/AppSidebar";
import { AuthProvider, useAuthContext } from "@/context/AuthContext";

function UsersLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, loading, logout } = useAuthContext();
  console.log("User dari context:", user);

  // useEffect(() => {
  //   console.log("User dari context:", user);
  // }, [user]);


  const pathSegments = pathname.split("/").filter(Boolean);

  const renderBreadcrumbs = () => (
    <Breadcrumb className="flex w-full gap-x-2 items-center">
      <SidebarTrigger />
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/users">User Information</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.slice(1).map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${pathSegments.slice(0, index + 2).join("/")}`}
              >
                {segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );

  return (
    <SidebarProvider>
      <AppSidebar user={user} loading={loading} logout={logout} />
      <main className="flex flex-col w-full h-screen overflow-hidden p-4 gap-y-4">
        {renderBreadcrumbs()}
        <section className="h-screen w-full">{children}</section>
      </main>
    </SidebarProvider>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UsersLayoutContent>{children}</UsersLayoutContent>
    </AuthProvider>
  );
}
