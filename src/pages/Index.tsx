import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <StatsSection />
        <section id="demo">
          <DemoSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        {/* <section id="how-it-works">
          <HowItWorksSection />
        </section> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
