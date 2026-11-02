import { createBrowserRouter, Navigate } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";
import PaymentPage from "../features/payment/pages/PaymentPage";
import PaymentStatusPage from "../features/payment/pages/PaymentStatusPage";
import TablePage from "../features/table/pages/TablePage";
import TableGuard from "../features/table/components/TabelGuard";
import ScannerPage from "../features/scanner/pages/ScannerPage";
import PaymentGuard from "../features/payment/components/PaymentGuard";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

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
    path: "/payment/status",
    element: (
      <TableGuard>
        <PaymentStatusPage />
      </TableGuard>
    ),
  },
  {
    path: "/table/:token",
    element: <TablePage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
]);

export default router;
