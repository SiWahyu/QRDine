import { formatCurrency } from "@/utils/formatCurrency";
import BottomActionBar from "../../../components/customer/BottomActionBar";
import { useNavigate } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

const CartFooter = ({ totalPrice = 0, loadingCalculateOrder }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <BottomActionBar>
      <div className="flex items-center justify-between px-4 py-6 border-t-4 pt-7 border-x border-t-neutral-200 border-x-neutral-200 rounded-xl">
        <div className="flex flex-col gap-[10.5px]">
          <h2 className="font-medium text-text"> Payment Total</h2>

          {loadingCalculateOrder ? (
            <Skeleton className="w-full h-4 bg-neutral-200" />
          ) : (
            <div className="text-lg font-bold text-customer-primary">
              {formatCurrency(totalPrice)}
            </div>
          )}
        </div>
        <button
          onClick={handleClick}
          className="px-4 py-3.5 self-end font-semibold text-white bg-customer-primary/90 hover:bg-customer-primary active:bg-customer-primary rounded-lg h-fit active:scale-[0.98] transition-all"
        >
          Continue to Payment
        </button>
      </div>
    </BottomActionBar>
  );
};

export default CartFooter;
