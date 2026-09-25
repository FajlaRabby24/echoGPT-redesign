import AiModels from "@/components/modules/home/AiModels";
import Faq from "@/components/modules/home/Faq";
import Feature from "@/components/modules/home/Feature";
import Footer from "@/components/modules/home/Footer";
import Hero from "@/components/modules/home/Hero";
import ProductPreview from "@/components/modules/home/ProductPreview";
import WhyChoose from "@/components/modules/home/WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <AiModels />
      <ProductPreview />
      <WhyChoose />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
