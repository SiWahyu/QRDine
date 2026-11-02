import { Ban, Loader2, SearchX, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const variants = {
  loading: {
    icon: Loader2,
    iconClassName: "animate-spin",
    iconWrapperClassName: "bg-customer-secondary text-customer-primary",
    title: "Memuat Data Pesanan",
    description:
      "Mohon tunggu sebentar, kami sedang mengambil detail pesananmu.",
  },
  "not-found": {
    icon: SearchX,
    iconWrapperClassName: "bg-amber-50 text-amber-600",
    title: "Pesanan Tidak Ditemukan",
    description: "Nomor pesanan tidak terdaftar di sistem.",
  },
  error: {
    icon: ServerCrash,
    iconWrapperClassName: "bg-red-50 text-red-600",
    title: "Terjadi Kesalahan pada Server",
    description: "Kami tidak dapat memuat data pesanan. Silakan coba lagi.",
  },
  cancelled: {
    icon: Ban,
    iconWrapperClassName: "bg-red-50 text-red-600",
    title: "Pesanan Dibatalkan",
    description:
      "Pesanan ini sudah dibatalkan. Silakan kembali ke menu jika ingin membuat pesanan baru.",
  },
};

const PaymentStatusState = ({
  variant = "loading",
  orderNumber,
  onRetry,
  onBack,
}) => {
  const {
    icon: Icon,
    iconClassName,
    iconWrapperClassName,
    title,
    description,
  } = variants[variant];

  return (
    <div className="flex min-h-svh items-center justify-center bg-customer-background px-6">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <div
          className={cn(
            "flex size-20 items-center justify-center rounded-full",
            iconWrapperClassName,
          )}
        >
          <Icon className={cn("size-9", iconClassName)} />
        </div>

        <h1 className="mt-6 text-lg font-semibold text-text">{title}</h1>

        <p className="mt-2 text-sm text-text-muted">
          {variant === "not-found" && orderNumber
            ? `Nomor pesanan ${orderNumber} tidak terdaftar di sistem.`
            : description}
        </p>

        {(onRetry || onBack) && (
          <div className="mt-8 flex w-full flex-col gap-2">
            {onRetry && (
              <Button
                type="button"
                onClick={onRetry}
                className="w-full bg-blue-600 py-5 transition-all hover:bg-blue-700 active:scale-[0.98] active:bg-blue-700"
              >
                Coba Lagi
              </Button>
            )}

            {onBack && (
              <Button
                type="button"
                variant={onRetry ? "outline" : "default"}
                onClick={onBack}
                className={cn(
                  "w-full py-5 transition-all active:scale-[0.98]",
                  !onRetry &&
                    "bg-blue-600 hover:bg-blue-700 active:bg-blue-700",
                )}
              >
                Kembali ke Menu
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentStatusState;
