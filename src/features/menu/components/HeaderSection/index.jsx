import { Menu, Search, LogIn, UserPlus, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <Sheet>
      <header className="sticky z-10 bg-transparent -mb-17">
        <div className="flex items-center justify-end gap-3 px-4 py-3">
          <button
            className="p-3 bg-white/70 backdrop-blur-md rounded-full"
            name="search"
          >
            <Search className="text-neutral-800 size-5" strokeWidth={2.4} />
          </button>

          <SheetTrigger
            render={
              <button
                className="p-3 bg-white/70 backdrop-blur-md rounded-full"
                name="menu"
              >
                <Menu className="text-neutral-800 size-5" strokeWidth={2.4} />
              </button>
            }
          />
        </div>
      </header>

      <SheetContent side="right" showCloseButton={false}>
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-2 px-2 py-2">
          <a
            href="/auth/login"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-100"
          >
            <LogIn className="size-5 text-neutral-500" />
            <span className="flex-1">Login</span>
            <ChevronRight className="size-4 text-neutral-400" />
          </a>

          <a
            href="/auth/register"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-100"
          >
            <UserPlus className="size-5 text-neutral-500" />
            <span className="flex-1">Register</span>
            <ChevronRight className="size-4 text-neutral-400" />
          </a>

        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSection;
