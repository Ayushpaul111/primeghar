import HeroSection from "./components/home/HeroSection";
import PropertiesSection from "./components/home/PropertiesSection";
import ServicesSection from "./components/home/ServicesSection";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertiesSection />
      <ServicesSection />
      <FAQSection />
    </main>
  );
}
