import API from "../api/base";
import { Register, Login } from "../types/auth";
import { TokenStorage } from "../utils/storage";

export const registerUser = async (data: Register) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: Login) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const logoutUser = async () => {
  try {
    const token = TokenStorage.get();
    console.log("Logout token:", token);
    
    if (token) {
      await API.delete("/auth/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
    }
    
    TokenStorage.remove();
    return { success: true };
  } catch (error) {
    TokenStorage.remove();
    console.error("Logout error:", error);
    throw error;
  }
};

export const getUserDashboard = async (token: string) => {
  const res = await API.get("/user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    ...res.data.details.user,
    token,
  };
};

export const refreshAccessToken = async () => {
  const res = await API.get("/auth/refresh-token");
  return res.data.accessToken;
};