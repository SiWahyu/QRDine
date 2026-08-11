import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaymentStore = create(
  persist(
    (set) => ({
      isPaymentSuccess: false,
      orderNumber: null,

      setPaymentSuccess: (value) => set({ isPaymentSuccess: value }),

      setOrderNumber: (orderNumber) => set({ orderNumber }),

      clearPaymentSuccess: () => set({ isPaymentSuccess: false }),

      clearOrderNumber: () => set({ orderNumber: null }),
    }),
    {
      name: "payment-storage",
    },
  ),
);
