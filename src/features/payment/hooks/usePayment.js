import { usePaymentStore } from "../store/payment.store";

export const usePaymentSuccess = () =>
  usePaymentStore((state) => state.isPaymentSuccess);

export const useSetPaymentSuccess = () =>
  usePaymentStore((state) => state.setPaymentSuccess);

export const useClearPaymentSuccess = () =>
  usePaymentStore((state) => state.clearPaymentSuccess);

export const usePaymentOrderNumber = () =>
  usePaymentStore((state) => state.orderNumber);

export const useSetPaymentOrderNumber = () =>
  usePaymentStore((state) => state.setOrderNumber);

export const useClearPaymentOrderNumber = () =>
  usePaymentStore((state) => state.clearOrderNumber);
