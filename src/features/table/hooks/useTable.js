import { useQuery } from "@tanstack/react-query";
import { getTableByToken } from "../services/table.service";

export const useTable = (token) => {
  return useQuery({
    queryKey: ["table", token],
    queryFn: () => getTableByToken(token),
    enabled: !!token,
  });
};
