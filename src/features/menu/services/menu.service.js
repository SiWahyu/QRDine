import { api } from "../../../lib/axios";

export const getMenus = async () => {
  const response = await api.get("/menus");

  return response.data.data;
};
