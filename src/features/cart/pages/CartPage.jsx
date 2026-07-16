import PageLayout from "@/layouts/PageLayout";
import OrderList from "../components/OrderList";
import TotalOrderItem from "../components/TotalOrderItem";
import OrderInfo from "../components/OrderInfo";
import PaymentDetail from "../components/PaymentDetail";
import {
  useCartItems,
  useCartQuantity,
  useCartTotalPrice,
  useClearCart,
  useDecreaseQuantity,
  useIncreaseQuantity,
  useSaveNote,
} from "../hooks/useCart";
import PaymentFooter from "../components/PaymentFooter";
import { PAYMENT } from "../../../constants/payment";
import EmptyOrder from "../components/EmptyCart";
import { ClearCart } from "../components/ClearCart";

const CartPage = () => {
  const quantity = useCartQuantity();
  const items = useCartItems();
  const totalPrice = useCartTotalPrice();

  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();

  const clearCart = useClearCart();

  const saveNote = useSaveNote();

  return (
    <PageLayout>
      <PageLayout.Header title="Cart" />
      <PageLayout.Container>
        {items.length === 0 ? (
          <EmptyOrder />
        ) : (
          <>
            {" "}
            <OrderInfo />
            <TotalOrderItem total={quantity} />
            <OrderList
              onDecrement={decreaseQuantity}
              onIncrement={increaseQuantity}
              items={items}
              onSaveNote={saveNote}
            />
            <PaymentDetail quantity={quantity} subtotal={totalPrice} />
            <ClearCart onClear={clearCart} />
          </>
        )}
      </PageLayout.Container>
      {items.length > 0 && (
        <PaymentFooter totalPrice={totalPrice + PAYMENT.SERVICE_FEE} />
      )}
    </PageLayout>
  );
};

export default CartPage;
