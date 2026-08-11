import { useMutation } from "@tanstack/react-query";
import { createPayment } from "../services/payment.service";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: createPayment,
  });
};
