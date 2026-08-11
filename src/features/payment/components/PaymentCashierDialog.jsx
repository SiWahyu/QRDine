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

const PaymentCashierDialog = ({ order, onCancel, isPendingCancelOrder }) => {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Pesanan Berhasil dibuat!</AlertDialogTitle>
          <AlertDialogDescription>
            Order Number: {order.order_number}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-center">
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
