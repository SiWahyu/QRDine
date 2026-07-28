import { useEffect, useRef, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import MenuList from "./MenuList";

const MenuSection = ({ menus, categories, onAddToCart }) => {
  const [categoryActive, setCategoryActive] = useState(categories[0]?.slug);

  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setCategoryActive(visibleSection.target.dataset.category);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CategoryTabs
        categories={categories}
        sectionRefs={sectionRefs}
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <div className="pb-[25vh]">
        <MenuList
          menus={menus}
          categories={categories}
          sectionRefs={sectionRefs}
          categoryActive={categoryActive}
          onAddToCart={onAddToCart}
        />
      </div>
    </>
  );
};

export default MenuSection;
