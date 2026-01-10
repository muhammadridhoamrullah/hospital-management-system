import axios from "axios";
import { ENV } from "../config/env";

const instance = axios.create({
  baseURL: ENV.URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
