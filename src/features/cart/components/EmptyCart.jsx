import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import emptryCart from "@/assets/empty-cart.png";

const EmptyOrder = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-[10svh]">
      <div className="flex flex-col items-center justify-center">
        <img src={emptryCart} alt="empty cart" className="w-2/3" />
        <h2 className="text-lg font-medium text-center">
          Kamu belum memesan apapun{" "}
        </h2>
        <div className="mb-10 text-center">
          Temukan menumu, pantau daftarnya di sini.
        </div>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-row items-center justify-center w-full gap-2 px-6 py-2 font-medium text-white transition-colors duration-300 bg-blue-600 border border-blue-600 rounded-lg hover:text-white group hover:bg-blue-700 active:bg-blue-700"
      >
        <span className="text-lg">Pesan Sekarang</span>
        <MoveRight className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default EmptyOrder;
