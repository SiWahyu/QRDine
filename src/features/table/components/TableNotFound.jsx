import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import imageTableNotFound from "../../../assets/images/table/table-not-found.svg";

const TableNotFound = ({ onRetry }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6">
      <img
        src={imageTableNotFound}
        draggable="false"
        alt="table not found"
        className="w-2/3"
      />

      <div className="text-center">
        <h2 className="text-lg font-semibold text-text">QR Code tidak valid</h2>

        <p className="text-text-muted text-sm">
          Silakan scan ulang QR Code meja.
        </p>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-2">
        <Button
          type="button"
          onClick={onRetry}
          className="w-full bg-blue-600 py-5 transition-all hover:bg-blue-700 active:scale-[0.98] active:bg-blue-700"
        >
          Coba Lagi
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/scanner")}
          className="w-full py-5 transition-all active:scale-[0.98]"
        >
          Scan Ulang
        </Button>
      </div>
    </div>
  );
};

export default TableNotFound;
