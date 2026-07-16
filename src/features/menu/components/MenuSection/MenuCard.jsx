import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const MenuCard = ({ menu, onAddToCart }) => {
  return (
    <Card className="shadow">
      <CardHeader className="px-3">
        <img
          draggable="false"
          className="w-full h-35 rounded-xl"
          src={menu.image}
          alt={menu.name}
        />
      </CardHeader>
      <CardContent>
        <div className="font-medium">{menu.name}</div>
        <div className="mt-2 text-sm font-medium text-red-500">
          {menu.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </div>
      </CardContent>
      <CardFooter className="pt-2 bg-white border-t-0">
        <button
          onClick={() => onAddToCart(menu)}
          className="w-full py-1 text-sm transition-colors duration-200 border rounded-md border-blue-600/50 text-neutral-900 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
        >
          Tambah
        </button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
