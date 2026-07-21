import {
  Check,
  CircleMinus,
  CirclePlus,
  Pencil,
  ScrollText,
} from "lucide-react";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";

const OrderItem = ({
  item = {
    id: 1,
    name: "Nasi Goreng",
    price: 10000,
    note: "",
    quantity: 1,
  },
  onIncrement,
  onDecrement,
  onSaveNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState(item.note);

  const handleEdit = () => {
    if (isEditing) {
      onSaveNote(item.id, note);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col gap-2.5 pb-4.5 border-b border-neutral-200">
      <div className="flex justify-between">
        <div className="font-medium text-text">{item.name}</div>
        <button
          onClick={handleEdit}
          className="flex items-center justify-center gap-1 px-3 text-sm border rounded-md border-neutral-400 text-text-muted hover:bg-neutral-200 active:bg-neutral-200 active:scale-[0.98] transition-all"
        >
          {isEditing ? (
            <Check className="size-3.5 " />
          ) : (
            <Pencil className="size-3.5 " />
          )}
          <span>{isEditing ? "Save" : "Edit"}</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <ScrollText className=" size-4.5 self-start" />
        {isEditing ? (
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="text-sm border-neutral-200 focus:border-customer-primary focus:ring-customer-primary/20"
            placeholder="Tulis catatan disini."
          />
        ) : (
          <p className={`text-sm text-text-muted ${!item.note && "italic"}`}>
            {item.note ? item.note : "Tidak ada catatan"}
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <div className="mt-3 text-sm font-semibold text-text">
          {item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </div>
        <div className="flex items-center gap-5">
          <button onClick={() => onDecrement(item.id)}>
            <CircleMinus
              strokeWidth={1.4}
              className="transition-colors duration-200 text-text-muted hover:text-red-500 active:text-red-500 size-5.5 hover:scale-95 active:scale-95"
            />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)}>
            <CirclePlus
              strokeWidth={1.4}
              className="text-text-muted hover:text-customer-primary active:text-customer-primary size-5.5 hover:scale-95 active:scale-95"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
