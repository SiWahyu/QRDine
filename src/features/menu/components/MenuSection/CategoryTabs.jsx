import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef } from "react";

const CategoryTabs = ({
  categories,
  sectionRefs,
  categoryActive,
  setCategoryActive,
}) => {
  const tabRefs = useRef({});

  const handleChange = (slug) => {
    setCategoryActive(slug);

    sectionRefs.current[slug]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    tabRefs.current[categoryActive]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [categoryActive]);

  return (
    <div className="sticky top-0 z-50 pt-3 -mx-4 rounded-xl bg-white/70 backdrop-blur-xl ps-3 pe-3">
      <Tabs value={categoryActive} onValueChange={handleChange}>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <TabsList variant="line" className="justify-start mb-4 w-max">
            {categories.map((item) => (
              <TabsTrigger
                className="px-4 py-4 shrink-0 hover:bg-customer-secondary data-active:after:bg-customer-primary data-active:after:h-1 data-active:text-customer-primary data-active:font-semibold data-active:hover:text-customer-primary"
                key={item.id}
                value={item.slug}
                ref={(el) => {
                  tabRefs.current[item.slug] = el;
                }}
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
