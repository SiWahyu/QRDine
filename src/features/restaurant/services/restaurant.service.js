import { api } from "../../../lib/axios";

export const getRestaurant = async () => {
  const response = await api.get("/restaurant");

  return response.data.data;
};
