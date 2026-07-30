import { createBrowserRouter, Navigate } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";
import PaymentPage from "../features/payment/pages/PaymentPage";
import TablePage from "../features/table/pages/TablePage";
import TableGuard from "../features/table/components/TabelGuard";
import ScannerPage from "../features/scanner/pages/ScannerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/scanner" replace />,
  },
  {
    path: "/scanner",
    element: <ScannerPage />,
  },
  {
    path: "/menu",
    element: (
      <TableGuard>
        <MenuPage />
      </TableGuard>
    ),
  },
  {
    path: "/cart",
    element: (
      <TableGuard>
        <CartPage />
      </TableGuard>
    ),
  },
  {
    path: "/payment",
    element: (
      <TableGuard>
        <PaymentPage />
      </TableGuard>
    ),
  },
  {
    path: "/table/:token",
    element: <TablePage />,
  },
]);

export default router;
