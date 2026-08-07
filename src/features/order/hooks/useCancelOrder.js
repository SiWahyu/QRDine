import { useMutation } from "@tanstack/react-query";
import { cancelOrder } from "../services/order.service";

export const useCancelOrder = () => {
  return useMutation({
    mutationFn: cancelOrder,
  });
};
