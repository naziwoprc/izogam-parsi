import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import InstallationProcess from "@/components/InstallationProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <InstallationProcess />
      <WhyChooseUs />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </>
  );
}
