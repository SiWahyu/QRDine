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
      <div className="flex items-center justify-between px-4 py-5 border-t-4 border-x border-t-neutral-300 border-x-neutral-300 rounded-xl">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">Total Payment</h2>

          {loadingCalculateOrder ? (
            <Skeleton className="w-full h-4 bg-neutral-400/60" />
          ) : (
            <div className="text-lg font-bold">
              {formatCurrency(totalPrice)}
            </div>
          )}
        </div>
        <button
          onClick={handleClick}
          className="px-4 py-3.5 font-semibold text-white bg-blue-800 rounded-lg h-fit"
        >
          Continue to Payment
        </button>
      </div>
    </BottomActionBar>
  );
};

export default CartFooter;
