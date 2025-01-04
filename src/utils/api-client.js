import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Or wherever the token is stored
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default apiClient;
