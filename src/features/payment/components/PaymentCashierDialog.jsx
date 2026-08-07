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

const PaymentCashierDialog = ({
  order,
  onCancel,
  onTestPayment,
  isPendingCancelOrder,
  isPendingPayOrder,
}) => {
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
          <div className="flex flex-col w-full gap-4">
            <Button
              onClick={onCancel}
              type="button"
              disabled={isPendingCancelOrder}
              className="bg-red-500 py-5 w-full hover:bg-red-600 active:bg-red-600 active:scale-[0.98] transition-all"
            >
              {isPendingCancelOrder ? "Loading..." : "Batalkan Pesanan"}
            </Button>
            <Button
              onClick={onTestPayment}
              type="button"
              disabled={isPendingPayOrder}
              className="bg-blue-500 py-5 w-full hover:bg-blue-600 active:bg-blue-600 active:scale-[0.98] transition-all"
            >
              {isPendingPayOrder ? "Memproses..." : "Test Bayar Kasir"}
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentCashierDialog;
