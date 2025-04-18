import AllProducts from "../components/Home/AllProducts/AllProducts";
import Banner from "../components/Home/Banner/Banner";
import BrandPartners from "../components/Home/BrandPartners/BrandPartners";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import Categories from "../components/Home/PopularBrands/PopularBrands";
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
      <CallToAction />
    </div>
  );
}
