import imageTableNotFound from "../../../assets/images/table/table-not-found.svg";
const TableNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
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
    </div>
  );
};

export default TableNotFound;
