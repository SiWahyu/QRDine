import { useNavigate } from "react-router";

const TotalOrderItem = ({ total = 2 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="flex items-center justify-between pb-4 mt-6 border-b border-neutral-300/90">
      <h2 className="font-semibold ">Ordered Items ({total})</h2>
      <button
        onClick={handleClick}
        className="px-3 py-0.5 text-sm border-indigo-800 text-indigo-800 border rounded-md font-medium"
      >
        + Add Item
      </button>
    </div>
  );
};

export default TotalOrderItem;
