import axios from "axios";
import { ApiError } from "./api-error";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api`,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        error.response?.data?.message ?? "Something went wrong.",
        error.response?.status ?? 500,
      );
    }

    throw error;
  },
);
