import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogMedia,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TriangleAlert } from "lucide-react";

export function ClearCart({ onClear }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        render={
          <button className="w-full px-6 py-3 mt-3 mb-40 font-semibold text-white bg-red-500 rounded-lg">
            Hapus Semua Pesanan
          </button>
        }
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlert className="size-7" />
          </AlertDialogMedia>
          <AlertDialogTitle>Hapus semua pesanan?</AlertDialogTitle>
          <AlertDialogDescription>
            Semua menu yang ada di keranjang akan dihapus. Tindakan ini tidak
            dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="py-5 active:bg-neutral-100">
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClear}
            className="py-5 text-white bg-red-500"
          >
            Lanjut
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
