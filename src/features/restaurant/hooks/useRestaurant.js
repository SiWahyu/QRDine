import { useQuery } from "@tanstack/react-query";
import { getRestaurant } from "../services/restaurant.service";

export const useRestaurant = () => {
  return useQuery({
    queryKey: ["restaurant"],
    queryFn: getRestaurant,
  });
};
