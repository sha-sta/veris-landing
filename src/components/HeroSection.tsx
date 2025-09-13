import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/gmail_pic.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="relative container mx-auto px-4 py-40 lg:py-52">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/80 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <Check className="w-4 h-4" />
              Completely Free
            </div>

            <div className="space-y-10">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your personal digital security consultant.
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Real-time scam detection, cyber protection, and education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Install Extension
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {/* 
            <div className="pt-8 border-t border-border/50">
              <div className="flex items-center gap-6 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Chrome Extension
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Real-time Protection
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  Easy to Use
                </div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
            <img
              src={heroImage}
              alt="Product dashboard preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
