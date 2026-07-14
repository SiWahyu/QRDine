import { Frown, MoveRight } from "lucide-react";
import { useNavigate } from "react-router";

const EmptyOrder = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className="flex flex-col mt-[10vh] justify-center items-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <Frown className="size-10 text-neutral-500" />
        <h2 className="text-3xl font-medium text-center text-neutral-500">
          Kamu belum memesan apapun{" "}
        </h2>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-row items-center justify-center gap-2 px-6 py-3 font-medium text-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg active:text-white hover:text-white group hover:bg-blue-600 active:bg-blue-600"
      >
        <span className="text-lg">Pesan Sekarang</span>
        <MoveRight className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default EmptyOrder;
