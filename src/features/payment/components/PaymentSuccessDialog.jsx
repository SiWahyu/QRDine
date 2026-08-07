import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import paymentSuccessImage from "@/assets/images/payment/payment-success.svg";

const PaymentSuccessDialog = ({ open, onOpenChange, onClose }) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Pembayaran Berhasil!</AlertDialogTitle>
          <AlertDialogDescription>
            Pembayaran berhasil! Pesananmu sedang disiapkan dan akan segera
            diantar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-center ">
          <img
            src={paymentSuccessImage}
            alt="payment success"
            className="w-1/2"
          />
        </div>
        <AlertDialogFooter>
          <Button
            onClick={onClose}
            type="button"
            className="bg-blue-500 py-5 w-full hover:bg-blue-600 active:bg-blue-600 active:scale-[0.98] transition-all"
          >
            Selesai
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentSuccessDialog;
