import { api } from "@/lib/axios";

export const createOrder = async (payload) => {
  const { data } = await api.post("/orders", payload);

  return data;
};

export const cancelOrder = async (orderId) => {
  const { data } = await api.patch(`/orders/${orderId}/cancel`);

  return data;
};

export const payOrder = async (orderNumber) => {
  const { data } = await api.patch(`/orders/${orderNumber}/pay`);

  return data;
};
