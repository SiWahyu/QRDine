import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import qris from "@/assets/images/payment-method-options/qris.png";
import bcamobile from "@/assets/images/payment-method-options/bca-mobile.png";
import gopay from "@/assets/images/payment-method-options/gopay.png";
import shopeepay from "@/assets/images/payment-method-options/shopeepay.png";

export function PaymentMethodOption() {
  return (
    <RadioGroup>
      <Label>
        <div className="flex items-center justify-between w-full p-4 border rounded-xl ">
          <div className="flex items-center gap-4">
            <img draggable="false" src={qris} alt="qris" className="w-12" />
            <div>
              <p>Qris</p>
            </div>
          </div>

          <RadioGroupItem value="qris" />
        </div>
      </Label>
      <Label>
        <div className="flex items-center justify-between w-full p-4 border rounded-xl ">
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src={gopay}
              alt="bcamobile"
              className="w-12"
            />
            <div>
              <p>Gopay</p>
            </div>
          </div>

          <RadioGroupItem value="gopay" />
        </div>
      </Label>
      <Label>
        <div className="flex items-center justify-between w-full p-4 border rounded-xl ">
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src={shopeepay}
              alt="bcamobile"
              className="w-12"
            />
            <div>
              <p>Shopee Pay</p>
            </div>
          </div>

          <RadioGroupItem value="shopeepay" />
        </div>
      </Label>
      <Label>
        <div className="flex items-center justify-between w-full p-4 border rounded-xl ">
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src={bcamobile}
              alt="bcamobile"
              className="w-10"
            />
            <div>
              <p>BCA Mobile</p>
            </div>
          </div>

          <RadioGroupItem value="bcamobile" />
        </div>
      </Label>
    </RadioGroup>
  );
}
