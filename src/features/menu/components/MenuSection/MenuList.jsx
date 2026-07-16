import MenuCard from "./MenuCard";

const MenuList = ({ menus, categories, sectionRefs, onAddToCart }) => {
  console.log(menus[0], categories[0]);
  return (
    <>
      {categories
        .filter((category) => category.value !== "semua")
        .map((category) => {
          const menuByCategory = menus.filter(
            (menu) => menu.categoryId === category.id,
          );

          console.log(category.id, menuByCategory);

          return (
            <section
              key={category.id}
              id={category.id}
              className="mb-10 scroll-mt-16"
              ref={(el) => {
                sectionRefs.current[category.value] = el;
              }}
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

      {menus.map((menu) => (
        <p key={menu.id}>{menu.name}</p>
      ))}
    </>
  );
};

export default MenuList;
