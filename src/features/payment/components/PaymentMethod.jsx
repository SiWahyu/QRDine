import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import onlinePayment from "@/assets/images/payment/online-payment.png";
import cashierPayment from "@/assets/images/payment/cashier-payment.png";
import paymentCash from "@/assets/images/payment/payment-cash.svg";
import paymentOnline from "@/assets/images/payment/payment-online.svg";
import { Controller, useFormContext } from "react-hook-form";

export const title = "Tabs with Cards";

const PaymentMethod = () => {
  const { control } = useFormContext();
  return (
    <div className="mt-10 pb-36">
      <Controller
        render={({ field }) => (
          <Tabs
            className="w-full"
            value={field.value}
            onValueChange={field.onChange}
          >
            <div className="w-full">
              <TabsList className="min-w-full space-x-3 bg-transparent w-max">
                <TabsTrigger
                  className="flex flex-row justify-center gap-3 px-4 py-6 font-medium data-active:border-blue-800 border-neutral-300"
                  value="online"
                >
                  <img
                    src={onlinePayment}
                    alt="online payment"
                    className="w-8 bg-green-200 rounded-xl scale-x-[-1]"
                  />
                  Online Payment
                </TabsTrigger>
                <TabsTrigger
                  className="flex flex-row justify-center gap-3 px-3 py-6 font-medium data-active:border-blue-800 border-neutral-300"
                  value="cash"
                >
                  <img
                    src={cashierPayment}
                    alt="online payment"
                    className="w-8 bg-green-200 rounded-xl scale-x-[-1]"
                  />
                  Bayar di Kasir
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="online">
              <div className="mt-3">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={paymentOnline}
                    alt="online payment"
                    className="w-3/4"
                  />
                  <p className="text-neutral-600">
                    Klik{" "}
                    <span className="font-semibold"> 'Online Payment' </span>
                    untuk membayar secara online.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cash">
              <div className="text-center">
                <img
                  src={paymentCash}
                  alt="online payment"
                  className="w-full"
                />
                <p className="text-neutral-600">
                  Klik <span className="font-semibold"> 'Bayar di Kasir' </span>
                  dan tunjukan QR Code ke kasir.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        )}
        name="paymentMethod"
        control={control}
      />
    </div>
  );
};

export default PaymentMethod;
