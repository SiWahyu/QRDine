import { useQuery } from "@tanstack/react-query";
import { getOrderByNumber } from "../services/order.service";

export const useOrderByNumber = (orderNumber) => {
  return useQuery({
    queryKey: ["order", orderNumber],
    queryFn: () => getOrderByNumber(orderNumber),
    enabled: !!orderNumber,
  });
};
