import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ROICalculator from "@/components/ROICalculator";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <ROICalculator />
        <ValueProposition />
        <HowItWorks />
        <Features />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
};

export default Index;
