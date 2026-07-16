import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

const FloatingCartButton = ({ totalCartItem = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className="fixed left-0 right-0 z-50 bottom-10">
      <div className="max-w-lg px-4 mx-auto">
        <div className="flex justify-end">
          <div className="z-40 flex flex-row-reverse flex-wrap ">
            <div className="bg-red-600 font-medium py-1.5 rounded-full text-xs text-white w-1/2 text-center -mb-4.5 z-50">
              {totalCartItem}
            </div>
            <button
              onClick={handleClick}
              className="p-4 bg-blue-500 rounded-full "
              name="cart"
            >
              <ShoppingCart className="text-white size-5.5 font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCartButton;
