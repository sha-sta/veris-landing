import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">v e r i s</h1>
          </div>

          {/* Right side: nav + CTAs grouped together */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#demo"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Demo
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                About
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
