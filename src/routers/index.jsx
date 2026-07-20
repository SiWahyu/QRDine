import { createBrowserRouter } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";
import PaymentPage from "../features/payment/pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
]);

export default router;
