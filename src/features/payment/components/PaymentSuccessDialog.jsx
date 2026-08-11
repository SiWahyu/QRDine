import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

import { Skeleton } from "@/components/ui/skeleton";

import { Button } from "@/components/ui/button";

import paymentSuccessImage from "@/assets/images/payment/payment-success.svg";
import { formatDate } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/formatCurrency";
import { useEffect, useRef, useState } from "react";

const PaymentSuccessDialog = ({
  open,
  onOpenChange,
  onClose,
  paymentOrder,
  loadingOrder,
}) => {
  const detailsRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const element = detailsRef.current;

    if (!element) return;

    const distanceFromBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight;

    setShowScrollButton(distanceFromBottom > 20);
  };

  const scrollToBottom = () => {
    const element = detailsRef.current;

    if (!element) return;

    setShowScrollButton(false);

    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const element = detailsRef.current;

    if (!element || loadingOrder) return;

    const checkOverflow = () => {
      const isScrollable = element.scrollHeight > element.clientHeight;

      setShowScrollButton(isScrollable);
    };

    checkOverflow();
  }, [paymentOrder, loadingOrder]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <div className="text-center flex flex-col items-center">
          <img
            src={paymentSuccessImage}
            alt="payment success"
            className="w-1/3"
          />
          <h3 className="font-medium text-text">Pembayaran Berhasil!</h3>
          <p className="text-sm text-text-muted">
            Pembayaran berhasil! Pesananmu sedang disiapkan dan akan segera
            diantar.
          </p>
        </div>
        <div className="relative">
          <div
            ref={detailsRef}
            onScroll={handleScroll}
            className="flex flex-col no-scrollbar max-h-[40vh] overflow-y-auto rounded gap-3"
          >
            <h3 className="font-medium text-text mt-4 text-sm">Details</h3>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                <span className="text-text">Order Number</span>

                {loadingOrder ? (
                  <Skeleton className="w-1/2 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {paymentOrder?.order_number}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                <span className="text-text ">Payment Method</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted uppercase">
                    {paymentOrder?.payment_method}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                <span className="text-text">Time</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatDate(paymentOrder?.updated_at, "time")}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                <span className="text-text">Date</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatDate(paymentOrder?.updated_at, "date")}
                  </span>
                )}
              </div>
              {paymentOrder?.items.map((order, index) => (
                <div
                  className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200"
                  key={index}
                >
                  {loadingOrder ? (
                    <>
                      <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                      <Skeleton className="w-1/3 h-4 bg-neutral-200" />
                    </>
                  ) : (
                    <>
                      <span className="text-text">{order.name}</span>
                      <span className="font-medium text-text-muted">
                        {order.quantity}
                      </span>
                    </>
                  )}
                </div>
              ))}
              <div className="flex flex-row justify-between pb-2.5 ">
                <span className="text-text">Service</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatCurrency(paymentOrder.service)}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 ">
                <span className="text-text">Tax</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatCurrency(paymentOrder.tax)}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 border-b-2 border-neutral-300">
                <span className="text-text">Subtotal</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatCurrency(paymentOrder.subtotal)}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between pb-2.5 ">
                <span className="text-text">Total</span>
                {loadingOrder ? (
                  <Skeleton className="w-1/4 h-4 bg-neutral-200" />
                ) : (
                  <span className="font-medium text-text-muted">
                    {formatCurrency(paymentOrder.total)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollToBottom}
            className={`
    absolute bottom-3 left-1/2 -translate-x-1/2
    flex h-9 w-9 items-center justify-center
    rounded-full bg-transparent shadow-md
    border border-neutral-200
    transition-all duration-300 ease-out
    hover:scale-105 active:scale-95
    ${
      showScrollButton
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }
  `}
            aria-label="Scroll ke bawah"
          >
            ↓
          </button>
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
