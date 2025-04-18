import AllProducts from "../components/Home/AllProducts/AllProducts";
import Banner from "../components/Home/Banner/Banner";
import BrandPartners from "../components/Home/BrandPartners/BrandPartners";
import Categories from "../components/Home/Categories/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import SpecialOffers from "../components/Home/SpecialOffers/SpecialOffers";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-6 lg:px-0">
      <Banner />
      <Categories />
      <FeaturedProducts />
      <AllProducts />
      <SpecialOffers />
      <WhyChooseUs />
      <BrandPartners />
    </div>
  );
}
