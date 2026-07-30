import PageLayout from "@/layouts/PageLayout";
import OrderInfo from "../components/OrderInfo";
import FormCustomerInformation from "../components/FormCustomerInformation";
import PaymentMethod from "../components/PaymentMethod";
import PaymentFooter from "../components/PaymentFooter";
import { useRestaurant } from "../../restaurant/hooks/useRestaurant";
import { calculateOrderTotal } from "../../../utils/calculateOrderTotal";
import { useCartTotalPrice } from "../../cart/hooks/useCart";
import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "../schemas/paymentSchema";

const PaymentPage = () => {
  const { data: restaurant, isLoading: loadingCalculateOrder } =
    useRestaurant();

  const totalPrice = useCartTotalPrice();

  const { subtotal, total, service, tax } = calculateOrderTotal(
    totalPrice,
    restaurant?.service_charge,
    restaurant?.tax_percentage,
  );

  const [paymentMethod, setPaymentMethod] = useState("online");

  const handlePaymentMethod = (value) => {
    setPaymentMethod(value);
  };

  const methods = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
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
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </PageLayout>
    </FormProvider>
  );
};

export default PaymentPage;
