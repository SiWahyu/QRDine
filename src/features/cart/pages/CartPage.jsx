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
import CartFooter from "../components/CartFooter";
import EmptyOrder from "../components/EmptyCart";
import { ClearCart } from "../components/ClearCart";
import { calculateOrderTotal } from "../../../utils/calculateOrderTotal";
import { useRestaurant } from "../../restaurant/hooks/useRestaurant";

const CartPage = () => {
  const quantity = useCartQuantity();
  const items = useCartItems();
  const totalPrice = useCartTotalPrice();

  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();

  const clearCart = useClearCart();

  const saveNote = useSaveNote();

  const { data: restaurant, isLoading: loadingCalculateOrder } =
    useRestaurant();

  const { subtotal, service, tax, total } = calculateOrderTotal(
    totalPrice,
    restaurant?.serviceCharge,
    restaurant?.taxPercentage,
  );

  return (
    <PageLayout>
      <PageLayout.Header title="Cart" />
      <PageLayout.Container>
        {items.length === 0 ? (
          <EmptyOrder />
        ) : (
          <>
            <OrderInfo />
            <TotalOrderItem total={quantity} />
            <OrderList
              onDecrement={decreaseQuantity}
              onIncrement={increaseQuantity}
              items={items}
              onSaveNote={saveNote}
            />
            <PaymentDetail
              quantity={quantity}
              loadingCalculateOrder={loadingCalculateOrder}
              serviceCharge={service}
              taxPercentage={tax}
              subtotal={subtotal}
              total={total}
            />
            <ClearCart onClear={clearCart} />
          </>
        )}
      </PageLayout.Container>
      {items.length > 0 && (
        <CartFooter
          totalPrice={total}
          loadingCalculateOrder={loadingCalculateOrder}
        />
      )}
    </PageLayout>
  );
};

export default CartPage;
