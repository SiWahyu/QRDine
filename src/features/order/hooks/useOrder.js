import { useOrderStore } from "../store/orderStore";

export const useOrder = () => useOrderStore((state) => state.order);

export const useSetOrder = () => useOrderStore((state) => state.setOrder);

export const useClearOrder = () => useOrderStore((state) => state.clearOrder);
