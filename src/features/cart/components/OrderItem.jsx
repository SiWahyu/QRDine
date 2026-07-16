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
    <div className="flex flex-col gap-2.5 pb-4.5 border-b border-neutral-300">
      <div className="flex justify-between">
        <div className="font-medium">{item.name}</div>
        <button
          onClick={handleEdit}
          className="flex items-center justify-center gap-1 px-3 text-sm border rounded-md border-neutral-500"
        >
          {isEditing ? (
            <Check className="size-3.5" />
          ) : (
            <Pencil className="size-3.5" />
          )}
          <span>{isEditing ? "Save" : "Edit"}</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <ScrollText className="opacity-50 size-4.5 self-start" />
        {isEditing ? (
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="text-sm border-neutral-400"
            placeholder="Tulis catatan disini."
          />
        ) : (
          <span className="text-sm opacity-80">
            {item.note ? item.note : "Tidak ada catatan"}
          </span>
        )}
      </div>
      <div className="flex justify-between">
        <div className="mt-3 text-sm font-semibold text-gray-900 opacity-75">
          {item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </div>
        <div className="flex items-center gap-5">
          <button onClick={() => onDecrement(item.id)}>
            <CircleMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)}>
            <CirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
