import { useTableStore } from "../store/useTableStore";

export const useTableActions = () => {
  const setTable = useTableStore((state) => state.setTable);
  const clearTable = useTableStore((state) => state.clearTable);

  return {
    setTable,
    clearTable,
  };
};
