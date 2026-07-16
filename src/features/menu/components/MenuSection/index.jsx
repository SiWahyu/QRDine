import { useRef, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import MenuList from "./MenuList";

const MenuSection = ({ menus, categories, onAddToCart }) => {
  const [categoryActive, setCategoryActive] = useState("semua");

  const sectionRefs = useRef({});
  return (
    <>
      <CategoryTabs
        categories={categories}
        sectionRefs={sectionRefs}
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <div className="pb-16">
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
