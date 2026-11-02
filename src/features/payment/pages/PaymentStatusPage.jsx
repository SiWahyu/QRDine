import { useNavigate, useSearchParams } from "react-router";
import PaymentSuccessDialog from "../components/PaymentSuccessDialog";
import PaymentStatusState from "../components/PaymentStatusState";
import { useOrderByNumber } from "../../order/hooks/useOrderByNumber";
import { useEffect } from "react";
import { useClearCart } from "../../cart/hooks/useCart";

const PaymentStatusPage = () => {
  const clearCart = useClearCart();
  useEffect(() => {
    clearCart();
  });

  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  const {
    data: paymentOrder,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderByNumber(orderNumber);

  const order = paymentOrder?.data;
  const isCancelled = order?.status?.toLowerCase() === "cancelled";

  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/menu", { replace: true });
  };

  if (isLoading) {
    return <PaymentStatusState variant="loading" />;
  }

  if (!orderNumber || error?.status === 404) {
    return (
      <PaymentStatusState
        variant="not-found"
        orderNumber={orderNumber}
        onBack={handleDone}
      />
    );
  }

  if (isError) {
    return (
      <PaymentStatusState
        variant="error"
        onRetry={() => refetch()}
        onBack={handleDone}
      />
    );
  }

  if (isCancelled) {
    return <PaymentStatusState variant="cancelled" onBack={handleDone} />;
  }

  return (
    <PaymentSuccessDialog
      open={!isLoading && !isError}
      onClose={handleDone}
      paymentOrder={paymentOrder.data}
      loadingOrder={isLoading}
    />
  );
};

export default PaymentStatusPage;
