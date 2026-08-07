import PageLayout from "@/layouts/PageLayout";
import OrderInfo from "../components/OrderInfo";
import FormCustomerInformation from "../components/FormCustomerInformation";
import PaymentMethod from "../components/PaymentMethod";
import PaymentFooter from "../components/PaymentFooter";
import { useRestaurant } from "../../restaurant/hooks/useRestaurant";
import { calculateOrderTotal } from "../../../utils/calculateOrderTotal";
import {
  useCartItems,
  useCartTotalPrice,
  useClearCart,
} from "../../cart/hooks/useCart";

import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "../schemas/paymentSchema";
import { useCurrentTable } from "../../table/hooks/useCurrentTable";
import { useCreateOrder } from "../../order/hooks/useCreateOrder";
import {
  useClearOrder,
  useOrder,
  useSetOrder,
} from "../../order/hooks/useOrder";

import CreateOrderLoading from "../components/CreateOrderLoading";
import PaymentCashierDialog from "../components/PaymentCashierDialog";
import { useCancelOrder } from "../../order/hooks/useCancelOrder";
import { usePayOrder } from "../../order/hooks/usePayOrder";
import { useState } from "react";
import PaymentSuccessDialog from "../components/PaymentSuccessDialog";
import { useNavigate } from "react-router";

const PaymentPage = () => {
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { data: restaurant, isLoading: loadingCalculateOrder } =
    useRestaurant();

  const totalPrice = useCartTotalPrice();
  const table = useCurrentTable();
  const items = useCartItems();
  const clearCart = useClearCart();

  const setOrder = useSetOrder();
  const order = useOrder();
  const clearOrder = useClearOrder();

  const { subtotal, total, service, tax } = calculateOrderTotal(
    totalPrice,
    restaurant?.service_charge,
    restaurant?.tax_percentage,
  );

  const { mutateAsync: createOrder, isPending: isPendingCreateOrder } =
    useCreateOrder();
  const { mutateAsync: cancelOrder, isPending: isPendingCancelOrder } =
    useCancelOrder();
  const { mutateAsync: payOrder, isPending: isPendingPayOrder } = usePayOrder();

  const methods = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      paymentMethod: "online",
    },
  });

  const paymentMethod = useWatch({
    control: methods.control,
    name: "paymentMethod",
    defaultValue: "online",
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        table_id: table.id,
        customer_name: data.fullName,
        customer_email: data.email,
        customer_phone: data.phone,
        payment_method: paymentMethod,
        items: items.map((item) => ({
          menu_id: item.id,
          quantity: item.quantity,
          note: item.note,
        })),
      };

      if (paymentMethod === "cash") {
        const response = await createOrder(payload);
        setOrder(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelOrder = async () => {
    try {
      await cancelOrder(order.id);
      clearOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTestPayment = async () => {
    try {
      await payOrder(order.order_number);

      clearOrder();
      setPaymentSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccessClose = () => {
    setPaymentSuccess(false);
    clearCart();
    navigate("/menu");
  };

  return (
    <FormProvider {...methods}>
      <PageLayout>
        {isPendingCreateOrder && <CreateOrderLoading />}

        <PageLayout.Header title="Payment" />
        <PageLayout.Container>
          <OrderInfo />
          <FormCustomerInformation />
          <PaymentMethod />
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
        {order && (
          <PaymentCashierDialog
            order={order}
            onCancel={handleCancelOrder}
            isPendingCancelOrder={isPendingCancelOrder}
            isPendingPayOrder={isPendingPayOrder}
            onTestPayment={handleTestPayment}
          />
        )}
        {paymentSuccess && (
          <PaymentSuccessDialog
            open={paymentSuccess}
            onOpenChange={setPaymentSuccess}
            onClose={handleSuccessClose}
          />
        )}
      </PageLayout>
    </FormProvider>
  );
};

export default PaymentPage;
