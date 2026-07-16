import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CategoryTabs = ({
  categories,
  sectionRefs,
  categoryActive,
  setCategoryActive,
}) => {
  const handleChange = (value) => {
    setCategoryActive(value);

    if (value === "semua") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    sectionRefs.current[value]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl pt-3 rounded-md -mx-4 rounded-b-sm ps-3 pe-3">
      <Tabs value={categoryActive} onValueChange={handleChange}>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <TabsList
            variant="line"
            className="w-max min-w-full justify-start mb-4"
          >
            {categories.map((item) => (
              <TabsTrigger
                className="shrink-0 hover:bg-neutral-950/5 py-4 px-4 data-active:after:bg-blue-600 data-active:after:h-1"
                key={item.id}
                value={item.value}
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
