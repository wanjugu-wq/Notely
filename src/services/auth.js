import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return {
    token: response.data.access_token,
    user: response.data.user,
  };
};

export const register = async (username, email, password) => {
  const response = await api.post("/register", { username, email, password });
  return response.data;
};

export const me = async () => {
  const response = await api.get("/me");
  return response.data;
};