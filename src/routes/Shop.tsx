import FooterQualityService from "../components/FooterQualityService";
import ShopBannerCarrinho from "../pages/Shop/ShopBannerCarrinho";
import ShopProducts from "../pages/Shop/ShopProducts";
import ShopFilter from "../pages/Shop/ShopFilter";

const Shop = () => {
  return (
    <>
      <ShopBannerCarrinho />
      <ShopFilter />
      <ShopProducts />
      <FooterQualityService />
    </>
  );
};

export default Shop;
