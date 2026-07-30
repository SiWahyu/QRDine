import BottomActionBar from "../../../components/customer/BottomActionBar";
import { formatCurrency } from "@/utils/formatCurrency";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PaymentFooter = ({
  subtotal = 0,
  serviceCharge = 0,
  taxPercentage = 0,
  total = 0,
  loadingCalculateOrder,
  paymentMethod,
  onSubmit,
}) => {
  return (
    <BottomActionBar>
      <div className="flex items-center justify-between px-4 py-6 pt-4 border-t-6 border-x border-t-neutral-200 border-x-neutral-200 rounded-xl">
        <Accordion defaultValue={"item-1"}>
          <AccordionItem value="item-1">
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                  <span className="text-text">Subtotal </span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-200" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(subtotal)}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                  <span className="text-text">Service</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-200" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(serviceCharge)}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-between pb-2.5 border-b-2 border-dashed border-neutral-200">
                  <span className="text-text">PB1</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-200" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(taxPercentage)}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-between pb-2 mt-3 ">
                  <span className="text-text">Total</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-200" />
                  ) : (
                    <span className="font-semibold text-customer-primary">
                      {formatCurrency(total)}
                    </span>
                  )}
                </div>
              </div>
            </AccordionContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center w-fit">
                <AccordionTrigger className="flex items-center justify-center text-base hover:no-underline">
                  <h2 className="font-medium">Payment Total</h2>
                </AccordionTrigger>
                {loadingCalculateOrder ? (
                  <Skeleton className="w-full h-5 bg-neutral-200" />
                ) : (
                  <span className="text-lg font-bold text-customer-primary">
                    {formatCurrency(total)}
                  </span>
                )}
              </div>
              <button
                className="px-4 py-3.5 self-end font-semibold text-white bg-customer-primary hover:bg-blue-700 active:bg-blue-700 rounded-lg h-fit active:scale-[0.98] transition-all"
                onClick={onSubmit}
              >
                {paymentMethod === "online"
                  ? "Online Payment"
                  : "Bayar di Kasir"}
              </button>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </BottomActionBar>
  );
};

export default PaymentFooter;
