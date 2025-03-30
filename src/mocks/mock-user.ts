import { User } from "../lib/schema";


export const currentUser: User = {
  username: "johndoe",
  user_auth: "auth_123456",
  role: "user",
  product: ["prod_001", "prod_002"]
};


export const getCurrentUser = () => {
  return Promise.resolve(currentUser);
};