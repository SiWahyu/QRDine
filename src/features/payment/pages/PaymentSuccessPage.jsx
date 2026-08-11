import { useNavigate } from "react-router";
import { useEffect } from "react";
import PaymentSuccessDialog from "../components/PaymentSuccessDialog";
import {
  useClearPaymentOrderNumber,
  useClearPaymentSuccess,
  usePaymentOrderNumber,
  usePaymentSuccess,
} from "../hooks/usePayment";
import { useClearCart } from "../../cart/hooks/useCart";
import { useOrderByNumber } from "../../order/hooks/useOrderByNumber";

const PaymentSuccessPage = () => {
  const orderNumber = usePaymentOrderNumber();

  const { data: paymentOrder, isLoading } = useOrderByNumber(orderNumber);

  const navigate = useNavigate();

  const paymentSuccess = usePaymentSuccess();
  const clearPaymentSuccess = useClearPaymentSuccess();
  const clearPaymentOrderNumber = useClearPaymentOrderNumber();

  const clearCart = useClearCart();

  useEffect(() => {
    if (!paymentSuccess && !orderNumber) {
      navigate("/menu", { replace: true });
    }
    clearCart();
  }, [paymentSuccess, navigate, clearCart, orderNumber]);

  const handleDone = () => {
    clearPaymentSuccess();
    clearPaymentOrderNumber();
    navigate("/menu", { replace: true });
  };

  return (
    <PaymentSuccessDialog
      open={paymentSuccess}
      onClose={handleDone}
      paymentOrder={paymentOrder}
      loadingOrder={isLoading}
    />
  );
};

export default PaymentSuccessPage;
