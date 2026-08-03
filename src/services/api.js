<<<<<<< HEAD
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:5000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export async function registerUser(user) {
  const response = await api.post("/register", user);
  return response.data;
}

export default api;
=======
>>>>>>> 9b58c8b (folder layout)
