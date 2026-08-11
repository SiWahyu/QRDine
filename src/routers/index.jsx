import { createBrowserRouter, Navigate } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";
import PaymentPage from "../features/payment/pages/PaymentPage";
import PaymentSuccessPage from "../features/payment/pages/PaymentSuccessPage";
import TablePage from "../features/table/pages/TablePage";
import TableGuard from "../features/table/components/TabelGuard";
import ScannerPage from "../features/scanner/pages/ScannerPage";
import PaymentGuard from "../features/payment/components/PaymentGuard";
import PaymentSuccessGuard from "../features/payment/components/PaymentSuccessGuard";

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
        <PaymentGuard>
          <PaymentPage />
        </PaymentGuard>
      </TableGuard>
    ),
  },
  {
    path: "/payment-success",
    element: (
      <TableGuard>
        <PaymentSuccessGuard>
          <PaymentSuccessPage />
        </PaymentSuccessGuard>
      </TableGuard>
    ),
  },
  {
    path: "/table/:token",
    element: <TablePage />,
  },
]);

export default router;
