import HeroInfoSection from "../components/HeroInfoSection";
import HeaderSection from "../components/HeaderSection";
import PageLayout from "../../../layouts/PageLayout";
import BannerSection from "../components/BannerSection";
import MenuSection from "../components/MenuSection";
import {
  useAddItem,
  useCartQuantity,
  useCartTotalPrice,
} from "../../cart/hooks/useCart";
import { useMenus } from "../hooks/useMenus";
import { useCategories } from "../hooks/useCategories";
import MenuSectionSkeleton from "../components/MenuSectionSkeleton";
import CartFooter from "../components/CartFooter";

const MenuPage = () => {
  const addItem = useAddItem();
  const totalCartItem = useCartQuantity();
  const totalCartPrice = useCartTotalPrice();

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
      {totalCartItem > 0 && (
        <CartFooter totalCartItem={totalCartItem} subtotal={totalCartPrice} />
      )}
    </PageLayout>
  );
};

export default MenuPage;
