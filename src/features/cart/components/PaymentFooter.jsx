import { formatCurrency } from "@/utils/formatCurrency";

const PaymentFooter = ({ totalPrice = 0 }) => {
  return (
    <footer className="fixed left-0 right-0 z-50 bg-white bottom-3">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between px-4 py-5 border-t-4 border-x border-t-neutral-300 border-x-neutral-300 rounded-xl">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Total Payment</h2>
            <div className="text-lg font-bold">
              {formatCurrency(totalPrice)}
            </div>
          </div>
          <button className="px-4 py-3.5 font-semibold text-white bg-blue-800 rounded-lg h-fit">
            Payment Sekarang
          </button>
        </div>
      </div>
    </footer>
  );
};

export default PaymentFooter;
