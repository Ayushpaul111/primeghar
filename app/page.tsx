import HeroSection from "./components/home/HeroSection";
import PropertiesSection from "./components/home/PropertiesSection";
import ServicesSection from "./components/home/ServicesSection";
import IndustriesSection from "./components/home/IndustriesSection";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertiesSection />
      <IndustriesSection />
      <ServicesSection />
      <FAQSection />
    </main>
  );
}
