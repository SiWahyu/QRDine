import { useNavigate } from "react-router";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CartFooter = ({ totalCartItem = 0, subtotal = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className="fixed left-0 right-0 z-50 duration-500 bottom-3 animate-in slide-in-from-bottom-5 fade-in">
      <div className="flex flex-row max-w-lg px-4 py-0 mx-auto">
        <button
          onClick={handleClick}
          className="w-full px-4 py-3 bg-customer-primary shadow-lg  rounded-xl text-white hover:brightness-95 active:scale-[0.98] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-1 text-sm">
              <span className="text-sm">Total</span>
              <span className="text-lg font-bold">
                {formatCurrency(subtotal)}
              </span>
            </div>
            <span className="font-bold">Checkout ({totalCartItem})</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
