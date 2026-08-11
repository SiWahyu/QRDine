import { Navigate } from "react-router";
import { usePaymentSuccess } from "../hooks/usePayment";

const PaymentSuccessGuard = ({ children }) => {
  const paymentSuccess = usePaymentSuccess();

  if (!paymentSuccess) {
    return <Navigate to="/menu" replace />;
  }

  return children;
};

export default PaymentSuccessGuard;
