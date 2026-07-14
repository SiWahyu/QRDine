import { categories } from "../../mocks/categories";
import { menus } from "../../mocks/menus";
import MenuCard from "./MenuCard";

const MenuList = ({ sectionRefs, onAddToCart }) => {
  return (
    <>
      {categories
        .filter((category) => category.value !== "semua")
        .map((category) => {
          const menuByCategory = menus.filter(
            (menu) => menu.category === category.value,
          );

          return (
            <section
              key={category.id}
              id={category.value}
              className="mb-10 scroll-mt-16"
              ref={sectionRefs[category.value]}
            >
              <h2 className="mb-4 text-xl font-semibold">{category.name}</h2>

              <div className="grid grid-cols-2 gap-3">
                {menuByCategory.map((menu) => (
                  <MenuCard
                    key={menu.id}
                    menu={menu}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </section>
          );
        })}
    </>
  );
};

export default MenuList;
