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
}) => {
  return (
    <BottomActionBar>
      <div className="flex px-4 py-5 border-t-4 border-x border-t-neutral-300 border-x-neutral-300 rounded-xl">
        <Accordion defaultValue={"item-1"}>
          <AccordionItem value="item-1">
            <AccordionContent>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between pb-3 border-b border-dashed border-neutral-300">
                  <span className="font-medium text-neutral-800">Subtotal</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(subtotal)}
                    </span>
                  )}
                </div>
                <div className="flex justify-between pb-3 border-b border-dashed border-neutral-300">
                  <span className="font-medium text-neutral-800">Service</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(serviceCharge)}
                    </span>
                  )}
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-medium text-neutral-800">PB1</span>
                  {loadingCalculateOrder ? (
                    <Skeleton className="w-1/5 h-4 bg-neutral-400/60" />
                  ) : (
                    <span className="font-medium text-neutral-800">
                      {formatCurrency(taxPercentage)}
                    </span>
                  )}
                </div>
              </div>
            </AccordionContent>
            <div className="flex items-end justify-between">
              <div className="w-fit">
                <AccordionTrigger className="flex items-center justify-center gap-2 font-medium hover:no-underline">
                  Payment Total
                </AccordionTrigger>
                {loadingCalculateOrder ? (
                  <Skeleton className="w-full h-5 bg-neutral-400/60" />
                ) : (
                  <span className="text-lg font-bold">
                    {formatCurrency(total)}
                  </span>
                )}
              </div>
              <button className="px-6 py-3 font-semibold text-white bg-blue-800 rounded-lg">
                {paymentMethod === "online"
                  ? "Bayar Sekarang"
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
