
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanners from "@/components/PromoBanners";
import Testimonials from "@/components/Testimonials";
import StoreInfo from "@/components/StoreInfo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <PromoBanners />
        <FeaturedProducts />
        <Testimonials />
        <StoreInfo />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
