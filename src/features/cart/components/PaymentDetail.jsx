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
    <div className="p-4 mt-4 bg-white border shadow-sm rounded-xl border-neutral-200">
      <h2 className="font-semibold text-center text-text">Payment Details </h2>
      <div className="flex flex-col gap-3 mt-4 text-sm">
        <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
          <span className="text-text">
            Subtotal{" "}
            <span className="text-neutral-500"> ( {quantity} menu )</span>
          </span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-200" />
          ) : (
            <span className="font-medium text-neutral-800">
              {formatCurrency(subtotal)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
          <span className="text-text">Service</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-200" />
          ) : (
            <span className="font-medium text-neutral-800">
              {formatCurrency(serviceCharge)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
          <span className="text-text">PB1</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-200" />
          ) : (
            <span className="font-medium text-neutral-800">
              {formatCurrency(taxPercentage)}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between pb-2 mt-3 ">
          <span className="text-text">Total</span>
          {loadingCalculateOrder ? (
            <Skeleton className="w-1/5 h-4 bg-neutral-200" />
          ) : (
            <span className="font-semibold text-customer-primary">
              {formatCurrency(total)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
