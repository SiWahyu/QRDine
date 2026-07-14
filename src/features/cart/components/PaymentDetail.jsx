import { PAYMENT } from "@/constants/payment";
import { formatCurrency } from "@/utils/formatCurrency";

const PaymentDetail = ({ subtotal = 0, quantity = 2 }) => {
  return (
    <div className="p-4 mt-4 border shadow border-neutral-300 rounded-xl">
      <h2 className="font-semibold text-center">Payment Details </h2>
      <div className="flex flex-col mt-4 gap-3.5 text-sm">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-neutral-800">
            Subtotal{" "}
            <span className="text-neutral-500"> ( {quantity} menu )</span>
          </span>
          <span className="font-semibold text-neutral-800">
            {formatCurrency(subtotal)}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-neutral-800">Fee</span>
          <span className="font-semibold text-neutral-800">
            {formatCurrency(PAYMENT.SERVICE_FEE)}
          </span>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <span className="font-semibold text-neutral-800">Total</span>
          <span className="font-semibold text-blue-800">
            {formatCurrency(subtotal + PAYMENT.SERVICE_FEE)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
