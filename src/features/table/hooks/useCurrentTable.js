import { useTableStore } from "../store/tableStore";

export const useCurrentTable = () => {
  return useTableStore((state) => state.table);
};
