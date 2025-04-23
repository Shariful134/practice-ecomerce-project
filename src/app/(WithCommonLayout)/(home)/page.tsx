import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import FlashSaleProducts from "@/components/modules/home/FlashSale";
import HeroSection from "@/components/modules/home/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSaleProducts />
    </div>
  );
};

export default HomePage;
