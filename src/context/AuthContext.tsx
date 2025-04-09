
"use client";

import { createContext, useContext, useEffect } from "react";
import { useAuth } from "@/lib/auth/hooks";

const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  useEffect(() => {
    auth.fetchUser();
  }, [auth.fetchUser]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};
