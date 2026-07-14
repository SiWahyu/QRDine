import OrderItem from "./OrderItem";

const OrderList = ({ items, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {items.map((item) => (
        <OrderItem
          key={item.id}
          item={item}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
};

export default OrderList;
