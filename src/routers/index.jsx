import { createBrowserRouter } from "react-router";
import { MenuPage } from "@/features/menu";
import { CartPage } from "@/features/cart";

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
]);

export default router;
