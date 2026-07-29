import { createBrowserRouter } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";
import PaymentPage from "../features/payment/pages/PaymentPage";
import TablePage from "../features/table/pages/TablePage";
import TableGuard from "../features/table/components/TabelGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
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
