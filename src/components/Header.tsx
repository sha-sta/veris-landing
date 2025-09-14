import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-br supports-[backdrop-filter]:from-primary/5 supports-[backdrop-filter]:to-accent/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">v e r i s</h1>
          </div>

          {/* Right side: nav + CTAs grouped together */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#demo"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Demo
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#cta"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Get Started
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="hero"
                size="lg"
                className="hidden sm:inline-flex"
              >
                Install Extension
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
