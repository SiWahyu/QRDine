import { api } from "@/lib/axios";

export const createPayment = async (orderNumber) => {
  const { data } = await api.post(`/payments/${orderNumber}/payment`);

  return data;
};
