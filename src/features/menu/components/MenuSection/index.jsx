import { useRef, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import MenuList from "./MenuList";

const MenuSection = ({ onAddToCart }) => {
  const [categoryActive, setCategoryActive] = useState({
    id: 0,
    name: "Semua",
    value: "semua",
  });

  const sectionRefs = {
    semua: useRef(null),
    paketmakanandanminuman: useRef(null),
    makanan: useRef(null),
    minuman: useRef(null),
    snack: useRef(null),
    lainnya: useRef(null),
  };

  return (
    <>
      <CategoryTabs
        sectionRefs={sectionRefs}
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <div className="pb-16">
        <MenuList
          sectionRefs={sectionRefs}
          categoryActive={categoryActive}
          onAddToCart={onAddToCart}
        />
      </div>
    </>
  );
};

export default MenuSection;
