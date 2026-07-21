import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { formatCurrency } from "@/utils/formatCurrency";

const MenuCard = ({ menu, onAddToCart }) => {
  return (
    <Card className="overflow-hidden transition-shadow border shadow-none border-neutral-200 hover:shadow-sm">
      <CardHeader className="px-3">
        <img
          draggable="false"
          className="object-cover w-full rounded-lg h-36"
          src={menu.image}
          alt={menu.name}
        />
      </CardHeader>
      <CardContent>
        <div className="font-semibold line-clamp-2 text-text">{menu.name}</div>
        <div className="mt-2 font-semibold text-customer-accent">
          {formatCurrency(menu.price)}
        </div>
      </CardContent>
      <CardFooter className="-mt-2 bg-white border-t-0">
        <button
          onClick={() => onAddToCart(menu)}
          className="w-full py-2 transition-colors border rounded-lg border-customer-primary text-text hover:bg-customer-primary hover:text-white active:bg-customer-primarya active:text-white active:bg-customer-primary"
        >
          + Tambah
        </button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
