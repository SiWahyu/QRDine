import { useNavigate } from "react-router";

const TotalOrderItem = ({ total = 2 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="flex items-center justify-between pb-4 mt-6 border-b border-neutral-200">
      <h2 className="font-semibold text-text">Ordered Items ({total})</h2>
      <button
        onClick={handleClick}
        className="px-3 py-1 text-sm font-medium transition-colors duration-200 border rounded-md border-customer-primary text-customer-primary hover:bg-customer-primary hover:text-white active:bg-customer-primary"
      >
        + Add Item
      </button>
    </div>
  );
};

export default TotalOrderItem;
