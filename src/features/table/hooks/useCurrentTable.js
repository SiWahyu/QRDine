import { useTableStore } from "../store/useTableStore";

export const useCurrentTable = () => {
  return useTableStore((state) => state.table);
};
