import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import qris from "@/assets/images/payment-method-options/qris.png";
import bcamobile from "@/assets/images/payment-method-options/bca-mobile.png";
import gopay from "@/assets/images/payment-method-options/gopay.png";
import shopeepay from "@/assets/images/payment-method-options/shopeepay.png";

export function PaymentMethodOption() {
  return (
    <RadioGroup>
      <div className="relative">
        <RadioGroupItem
          id="qris"
          value="qris"
          className="absolute opacity-0 peer"
        />
        <Label
          htmlFor="qris"
          className="flex items-center justify-between w-full p-4 border rounded-xl peer-data-checked:border-customer-primary peer-data-checked:bg-customer-secondary"
        >
          <div className="flex items-center gap-4">
            <img draggable="false" src={qris} alt="qris" className="w-12" />
            <p className="font-medium text-text">Qris</p>
          </div>
        </Label>
      </div>

      <div className="relative">
        <RadioGroupItem
          id="gopay"
          value="gopay"
          className="absolute opacity-0 peer"
        />

        <Label
          htmlFor="gopay"
          className="flex items-center justify-between w-full p-4 py-5 border rounded-xl peer-data-checked:border-customer-primary peer-data-checked:bg-customer-secondary"
        >
          <div className="flex items-center gap-4">
            <img src={gopay} className="w-12" />

            <p className="font-medium text-text">Gopay</p>
          </div>
        </Label>
      </div>
      <div className="relative">
        <RadioGroupItem
          value="shopeepay"
          id="shopeepay"
          className="absolute opacity-0 peer"
        />
        <Label
          htmlFor="shopeepay"
          className="flex items-center justify-between w-full p-4 border rounded-xl peer-data-checked:border-customer-primary peer-data-checked:bg-customer-secondary"
        >
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src={shopeepay}
              alt="bcamobile"
              className="w-12"
            />
            <p className="font-medium text-text">Shopee Pay</p>
          </div>
        </Label>
      </div>
      <div className="relative">
        <RadioGroupItem
          className="absolute opacity-0 peer"
          value="bcamobile"
          id="bcamobile"
        />
        <Label
          htmlFor="bcamobile"
          className="flex items-center justify-between w-full p-4 py-2 border rounded-xl peer-data-checked:border-customer-primary peer-data-checked:bg-customer-secondary"
        >
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src={bcamobile}
              alt="bcamobile"
              className="w-10"
            />
            <p className="font-medium text-text">BCA Mobile</p>
          </div>
        </Label>
      </div>
    </RadioGroup>
  );
}
