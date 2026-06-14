import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ServicesSection from "@/components/ServicesSection";
import BillingSoftwareSection from "@/components/BillingSoftwareSection";
import CTASection from "@/components/CTASection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Preloader />
    <CustomCursor />
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <TechMarquee />
    <ServicesSection />
    <BillingSoftwareSection />
    <CTASection />
    <ResultsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
