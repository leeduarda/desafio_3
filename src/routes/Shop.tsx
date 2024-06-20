import FooterQualityService from "../components/FooterQualityService";
import ShopBannerCaminho from "../pages/Shop/ShopBannerCaminho";
import ShopProducts from "../pages/Shop/ShopProducts";
import ShopFilter from "../pages/Shop/ShopFilter";

const Shop = () => {
  return (
    <>
      <ShopBannerCaminho />
      <ShopFilter />
      <ShopProducts />
      <FooterQualityService />
    </>
  );
};

export default Shop;
