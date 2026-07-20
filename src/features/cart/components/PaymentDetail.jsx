import { formatCurrency } from "@/utils/formatCurrency";
import { Skeleton } from "@/components/ui/skeleton";

const PaymentDetail = ({
  subtotal = 0,
  quantity = 0,
  serviceCharge,
  taxPercentage,
  total,
  loadingCalculateOrder,
}) => {
  return (
    <div className="p-4 mt-4 border shadow border-neutral-300 rounded-xl">
      <h2 className="font-semibold text-center">Payment Details </h2>
      <div className="flex flex-col mt-4 gap-3.5 text-sm">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-neutral-800">
            Subtotal{" "}
            <span className="text-neutral-500"> ( {quantity} menu )</span>
          </span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
          ) : (
            <span className="font-semibold text-neutral-800">
              {formatCurrency(subtotal)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-neutral-800">Service</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
          ) : (
            <span className="font-semibold text-neutral-800">
              {formatCurrency(serviceCharge)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-neutral-800">PB1</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
          ) : (
            <span className="font-semibold text-neutral-800">
              {formatCurrency(taxPercentage)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between mt-3">
          <span className="font-semibold text-neutral-800">Total</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
          ) : (
            <span className="font-semibold text-blue-800">
              {formatCurrency(total)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
