import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "../../mocks/categories";

const CategoryTabs = ({ sectionRefs, categoryActive, setCategoryActive }) => {
  const handleChange = (value) => {
    const selected = categories.find((item) => item.value === value);

    setCategoryActive(selected);

    if (value === "semua") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    sectionRefs[value]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl pt-3 rounded-md -mx-4 rounded-b-sm ps-3 pe-3">
      <Tabs
        value={categoryActive.value}
        className="w-full"
        onValueChange={handleChange}
      >
        <div className="w-full overflow-x-auto scrollbar-hide">
          <TabsList
            variant="line"
            className="w-max min-w-full justify-start mb-4"
          >
            {categories.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.value}
                className="shrink-0 hover:bg-neutral-950/5 py-4 px-4 data-active:after:bg-blue-600 data-active:after:h-1"
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
