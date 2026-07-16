import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`,
});
