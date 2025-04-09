"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import {
  registerUser,
  loginUser,
  logoutUser,
  getUserDashboard,
  refreshAccessToken,
} from "./api";
import { Register, Login, User } from "../types/auth";
import { TokenStorage } from "../utils/storage";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const register = useCallback(async (data: Register) => {
    setLoading(true);
    setError(null);
    
    try {
      await registerUser(data);
      toast("Register success, please login");
      router.push("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Register failed");
        toast("Register failed.");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  const login = useCallback(async (data: Login) => {
    setLoading(true);
    setError(null);
    
    try {
      TokenStorage.remove();
      const res = await loginUser(data);
      const { token } = res;
      
      TokenStorage.set(token);
      const userData = await getUserDashboard(token);
      setUser({ ...userData, token });

      toast.success("Login success");
      router.push("/users/profile");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed");
        toast.error("Login failed");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  const logout = useCallback(async () => {
    setLoading(true);
    
    try {
      await logoutUser();
      setUser(null);
      
      toast("Logout success");
      window.location.href = "/login";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Logout error response:", error.response?.data);
        toast.error(error.response?.data?.message || "Logout failed");
      } else {
        console.error("Logout failed:", error);
      }
      // Redirect anyway
      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const token = TokenStorage.get();
      if (!token) throw new Error("Token not found");

      const user = await getUserDashboard(token);
      setUser({ ...user, token });
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        try {
          const newToken = await refreshAccessToken();
          TokenStorage.set(newToken);

          const user = await getUserDashboard(newToken);
          setUser({ ...user, token: newToken });
        } catch (refreshError) {
          console.error("Refresh token failed:", refreshError);
          TokenStorage.remove();
          setUser(null);
        }
      } else {
        console.error("Invalid token or other error:", err);
        TokenStorage.remove();
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = TokenStorage.get();
    if (token && !user) {
      fetchUser();
    }
  }, [fetchUser, user]);

  return {
    user,
    loading,
    error,
    logout,
    register,
    login,
    fetchUser,
  };
}