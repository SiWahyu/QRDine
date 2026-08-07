import { Navigate } from "react-router";
import { useCartItems } from "../../cart/hooks/useCart";

const PaymentGuard = ({ children }) => {
  const items = useCartItems();

  if (items.length === 0) {
    return <Navigate to={"/menu"} replace />;
  }

  return children;
};

export default PaymentGuard;
