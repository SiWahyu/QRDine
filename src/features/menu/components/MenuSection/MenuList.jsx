import MenuCard from "./MenuCard";

const MenuList = ({ menus, categories, sectionRefs, onAddToCart }) => {
  return (
    <>
      {categories.map((category) => {
        const menuByCategory = menus.filter(
          (menu) => menu.category_id === category.id,
        );

        return (
          <section
            key={category.id}
            id={category.id}
            className="mt-4 mb-6 scroll-mt-16"
            ref={(el) => {
              sectionRefs.current[category.slug] = el;
            }}
            data-category={category.slug}
          >
            <h2 className="mb-4 text-lg font-semibold text-text">
              {category.name}
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {menuByCategory.map((menu) => (
                <MenuCard key={menu.id} menu={menu} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default MenuList;
