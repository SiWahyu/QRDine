import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create(
  persist(
    (set) => ({
      order: null,

      setOrder: (order) =>
        set({
          order: order,
        }),

      clearOrder: () =>
        set({
          order: null,
        }),
    }),
    {
      name: "order-storage",
    },
  ),
);
