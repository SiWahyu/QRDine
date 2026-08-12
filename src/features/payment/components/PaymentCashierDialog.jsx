import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ReactQRCode } from "@lglab/react-qr-code";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const PaymentCashierDialog = ({ order, onCancel, isPendingCancelOrder }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(
    function remainingTimeOrder() {
      if (!order?.payment_expired_at) return;

      const expiredAt = new Date(order.payment_expired_at).getTime();

      const updateRemainingTime = () => {
        const remaining = Math.max(0, expiredAt - Date.now());

        setRemainingTime(remaining);
      };

      updateRemainingTime();

      const interval = setInterval(updateRemainingTime, 1000);

      return () => clearInterval(interval);
    },
    [order?.payment_expired_at],
  );

  const totalSeconds = Math.ceil(remainingTime / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Pesanan Berhasil dibuat!</AlertDialogTitle>
          <AlertDialogDescription>
            Order Number: {order.order_number}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-center flex-col gap-3">
          <ReactQRCode
            imageSettings={{
              src: "https://reactqrcode.com/images/logo-60.png",
              width: 60,
              height: 60,
              excavate: true,
              opacity: 1,
            }}
            value={order.order_number}
            size={240}
            marginSize={1}
          />
          <p className="flex flex-col justify-center items-center">
            Selesaikan pembayaran dalam
            <span className="font-semibold tracking-wider">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </p>
        </div>
        <AlertDialogFooter>
          <Button
            onClick={onCancel}
            type="button"
            disabled={isPendingCancelOrder}
            className="bg-red-500 py-5 w-full hover:bg-red-600 active:bg-red-600 active:scale-[0.98] transition-all"
          >
            {isPendingCancelOrder ? "Loading..." : "Batalkan Pesanan"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentCashierDialog;
