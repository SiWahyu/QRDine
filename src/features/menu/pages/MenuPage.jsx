import HeroInfoSection from "../components/HeroInfoSection";
import HeaderSection from "../components/HeaderSection";
import FloatingCartButton from "../components/FloatingCartButton";
import PageLayout from "../../../layouts/PageLayout";
import BannerSection from "../components/BannerSection";
import MenuSection from "../components/MenuSection";
import { useAddItem, useCartQuantity } from "../../cart/hooks/useCart";
import { useMenus } from "../hooks/useMenus";
import { useCategories } from "../hooks/useCategories";
import MenuSectionSkeleton from "../components/MenuSectionSkeleton";

const MenuPage = () => {
  const addItem = useAddItem();
  const totalItem = useCartQuantity();

  const handleAddToCart = (menu) => {
    addItem(menu);
  };

  const { data: menus, isLoading: loadingMenus } = useMenus();
  const { data: categories, isLoading: loadingCategories } = useCategories();

  return (
    <PageLayout>
      <PageLayout.Header>
        <HeaderSection />
      </PageLayout.Header>
      <BannerSection />
      <PageLayout.Container>
        <HeroInfoSection />
        {loadingCategories || loadingMenus ? (
          <MenuSectionSkeleton />
        ) : (
          <MenuSection
            menus={menus}
            categories={categories}
            onAddToCart={handleAddToCart}
          />
        )}
      </PageLayout.Container>
      <FloatingCartButton totalCartItem={totalItem} />
    </PageLayout>
  );
};

export default MenuPage;
