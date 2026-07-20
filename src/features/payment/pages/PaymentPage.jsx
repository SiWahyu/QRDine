import PageLayout from "@/layouts/PageLayout";
import OrderInfo from "../components/OrderInfo";
import FormCustomerInformation from "../components/FormCustomerInformation";
import PaymentMethod from "../components/PaymentMethod";
import PaymentFooter from "../components/PaymentFooter";
import { useRestaurant } from "../../restaurant/hooks/useRestaurant";
import { calculateOrderTotal } from "../../../utils/calculateOrderTotal";
import { useCartTotalPrice } from "../../cart/hooks/useCart";
import { useState } from "react";

const PaymentPage = () => {
  const { data: restaurant, isLoading: loadingCalculateOrder } =
    useRestaurant();

  const totalPrice = useCartTotalPrice();

  const { subtotal, total, service, tax } = calculateOrderTotal(
    totalPrice,
    restaurant?.serviceCharge,
    restaurant?.taxPercentage,
  );

  const [paymentMethod, setPaymentMethod] = useState("online");

  const handlePaymentMethod = (value) => {
    setPaymentMethod(value);
  };

  return (
    <PageLayout>
      <PageLayout.Header title="Payment" />
      <PageLayout.Container>
        <OrderInfo />
        <FormCustomerInformation />
        <PaymentMethod onValueChange={handlePaymentMethod} />
      </PageLayout.Container>
      <PaymentFooter
        subtotal={subtotal}
        serviceCharge={service}
        taxPercentage={tax}
        total={total}
        paymentMethod={paymentMethod}
        loadingCalculateOrder={loadingCalculateOrder}
      />
    </PageLayout>
  );
};

export default PaymentPage;
