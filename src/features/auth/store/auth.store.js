import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: {
        name: null,
        email: null,
      },

      setAuth: (token, user) => {
        set({
          token,
          user: {
            name: user.name,
            email: user.email,
          },
        });
      },

      logout: () => {
        set({
          token: null,
          user: {
            name: null,
            email: null,
          },
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
