import { Loader2 } from "lucide-react";
import imageTableLoading from "../../../assets/images/table/table-loading.svg";
const TableLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <img
        src={imageTableLoading}
        draggable="false"
        alt="table loading"
        className="w-2/3"
      />

      <Loader2 className="size-6 text-customer-primary animate-spin" />

      <div className="text-center">
        <h2 className="text-lg font-semibold text-text">
          Menghubungkan ke meja...
        </h2>

        <p className="text-text-muted text-sm">Mohon tunggu sebentar.</p>
      </div>
    </div>
  );
};

export default TableLoading;
