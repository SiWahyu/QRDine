import PageLayout from "@/layouts/PageLayout";
import OrderInfo from "../components/OrderInfo";
import FormCustomerInformation from "../components/FormCustomerInformation";
import PaymentMethod from "../components/PaymentMethod";
import PaymentFooter from "../components/PaymentFooter";
import { useRestaurant } from "../../restaurant/hooks/useRestaurant";
import { calculateOrderTotal } from "../../../utils/calculateOrderTotal";
import { useCartItems, useCartTotalPrice } from "../../cart/hooks/useCart";

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
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { pusher } from "../../../lib/pusher";
import {
  useSetPaymentSuccess,
  useSetPaymentOrderNumber,
  usePaymentOrderNumber,
} from "../hooks/usePayment";
import { useCreatePayment } from "../hooks/useCreatePayment";
import { loadMidtransSnap } from "@/lib/midtrans";

const PaymentPage = () => {
  const navigate = useNavigate();

  const { data: restaurant, isLoading: loadingCalculateOrder } =
    useRestaurant();

  const totalPrice = useCartTotalPrice();
  const table = useCurrentTable();
  const items = useCartItems();

  const setOrder = useSetOrder();
  const order = useOrder();
  const clearOrder = useClearOrder();

  const { subtotal, total, service, tax } = calculateOrderTotal(
    totalPrice,
    restaurant?.service_charge,
    restaurant?.tax_percentage,
  );

  const setPaymentSuccess = useSetPaymentSuccess();
  const setPaymentOrderNumber = useSetPaymentOrderNumber();
  const paymentOrderNumber = usePaymentOrderNumber();

  const { mutateAsync: createPayment } = useCreatePayment();

  const { mutateAsync: createOrder, isPending: isPendingCreateOrder } =
    useCreateOrder();
  const { mutateAsync: cancelOrder, isPending: isPendingCancelOrder } =
    useCancelOrder();

  useEffect(() => {
    if (!paymentOrderNumber) return;

    const channel = pusher.subscribe(`order.${paymentOrderNumber}`);

    const handleOrderPaid = () => {
      setPaymentSuccess(true);
      setPaymentOrderNumber(paymentOrderNumber);
      clearOrder();
      navigate("/payment-success", { replace: true });
    };

    channel.bind("order-paid", handleOrderPaid);

    return () => {
      channel.unbind("order-paid");
      pusher.unsubscribe(`order.${paymentOrderNumber}`);
    };
  }, [
    paymentOrderNumber,
    clearOrder,
    navigate,
    setPaymentSuccess,
    setPaymentOrderNumber,
  ]);

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

      const response = await createOrder(payload);

      const createdOrder = response.data;

      if (paymentMethod === "online") {
        setPaymentOrderNumber(createdOrder.order_number);

        const paymentResponse = await createPayment(createdOrder.order_number);

        const snapToken = paymentResponse.data.snap_token;

        const snap = await loadMidtransSnap();

        snap.pay(snapToken);
      }

      if (paymentMethod === "cash") {
        setOrder(createdOrder);
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
        {order?.payment_method === "cash" && (
          <PaymentCashierDialog
            order={order}
            onCancel={handleCancelOrder}
            isPendingCancelOrder={isPendingCancelOrder}
          />
        )}
      </PageLayout>
    </FormProvider>
  );
};

export default PaymentPage;
