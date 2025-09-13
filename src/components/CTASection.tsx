import { Button } from "@/components/ui/button";
import { Shield, Download, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            Free Chrome Extension
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Don't Let Scammers Win
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
            Join thousands of seniors who trust SecureGuard AI to protect their digital lives. 
            Start scanning emails and websites today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg group"
            >
              <Download className="w-5 h-5" />
              Install Chrome Extension
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold"
            >
              Try Web Scanner
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-white/80">Protected Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-white/80">Scams Blocked</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-white/80">Detection Rate</div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Free to use • No personal data collected • Works with all major email providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;