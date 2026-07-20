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
          className="w-full px-4 py-2.5 bg-blue-700 shadow-xl  rounded-xl text-white"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-1 text-sm">
              <span>Total</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <span className="font-semibold">Checkout ({totalCartItem})</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
