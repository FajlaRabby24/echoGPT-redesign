import AiModels from "@/components/modules/home/AiModels";
import Feature from "@/components/modules/home/Feature";
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
    </>
  );
};

export default HomePage;

