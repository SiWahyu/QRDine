import { Menu, Search } from "lucide-react";

const HeaderSection = () => {
  return (
    <header className="sticky z-10 bg-transparent -mb-17">
      <div className="flex items-center justify-end gap-3 px-4 py-3">
        <button className="p-3 bg-white rounded-full" name="search">
          <Search className="text-neutral-700 size-5" />
        </button>
        <button className="p-3 bg-white rounded-full" name="menu">
          <Menu className="text-neutral-700 size-5" />
        </button>
      </div>
    </header>
  );
};
export default HeaderSection;
