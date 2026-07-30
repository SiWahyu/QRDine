import { Navigate } from "react-router";
import { useTableStore } from "../store/useTableStore";

export default function TableGuard({ children }) {
  const table = useTableStore((state) => state.table);

  if (!table) {
    return <Navigate to="/scanner" replace />;
  }

  return children;
}
