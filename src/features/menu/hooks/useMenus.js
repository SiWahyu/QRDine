import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../services/menu.service";

export const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
  });
};
