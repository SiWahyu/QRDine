import { useMutation } from "@tanstack/react-query";
import { payOrder } from "../services/order.service";

export const usePayOrder = () => {
  return useMutation({
    mutationFn: payOrder,
  });
};
