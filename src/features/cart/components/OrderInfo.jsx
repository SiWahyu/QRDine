import { CircleCheck } from "lucide-react";

const OrderInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-1.5 mt-2 border rounded-md bg-neutral-200 border-neutral-300">
      <div className="text-sm">Order Type</div>
      <div className="flex items-center justify-center gap-1">
        <div className="text-sm font-semibold">Dine In</div>
        <div>
          <CircleCheck className=" size-4.5" />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
