import { Shield, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-6">
        {/* <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Veris</span>
            </div>
            <p className="text-muted-foreground">
              Protecting seniors from digital scams with AI-powered detection
              and simple explanations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Chrome Extension
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Web Scanner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Common Scams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground text-sm">
            <span className="mr-2">© 2025 Veris. All rights reserved.</span>
            <br />
            <br />
            <span className="inline-flex items-center">
              <Heart className="w-4 h-4 text-destructive" />
              &nbsp;Made for seniors
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
