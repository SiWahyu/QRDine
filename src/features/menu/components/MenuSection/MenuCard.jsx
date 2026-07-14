const MenuCard = ({ menu, onAddToCart }) => {
  return (
    <div className="p-3 shadow-md rounded-xl">
      <img
        draggable="false"
        className="w-45 h-35 rounded-xl"
        src={menu.image}
      />
      <div className="mt-2 font-medium">{menu.name}</div>
      <div className="mt-4 text-sm font-medium text-red-500">
        {menu.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        })}
      </div>
      <button
        onClick={() => onAddToCart(menu)}
        className="w-full py-1 mt-3 text-sm transition-colors duration-200 border rounded-md border-blue-600/50 text-neutral-900 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
      >
        Tambah
      </button>
    </div>
  );
};

export default MenuCard;
