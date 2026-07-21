import { CircleCheck } from "lucide-react";

const OrderInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 mt-2 border rounded-md bg-customer-secondary border-blue-200">
      <div className="text-sm text-text-muted">Order Type</div>
      <div className="flex items-center justify-center gap-1">
        <div className="font-semibold text-text">Dine In</div>
        <div>
          <CircleCheck className=" size-4.5 text-customer-primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
