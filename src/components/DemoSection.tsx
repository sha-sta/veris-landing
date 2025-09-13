import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import emailScanMockup from "@/assets/email-scan-mockup.jpg";
import extensionMockup from "@/assets/extension-mockup.jpg";

const DemoSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See SecureGuard AI in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time protection with instant explanations you can understand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Email Scan Demo */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={emailScanMockup} 
                alt="Email scanning interface showing phishing detection"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ⚠️ Phishing Detected
              </div>
            </div>
            
            <div className="bg-card border-l-4 border-l-destructive p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-destructive mb-2">High Risk Email Detected</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This email uses urgent language like "immediate action required" and "verify account now" 
                    to create panic. The sender domain "bank-security@secure-verify.net" is not from your actual bank.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      Suspicious sender domain
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      Creates false urgency
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      Requests personal information
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* URL Scan Demo */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={extensionMockup} 
                alt="Browser extension showing URL safety check"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✅ Safe to Visit
              </div>
            </div>
            
            <div className="bg-card border-l-4 border-l-success p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-success mb-2">Website Verified Safe</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This website "amazon.com" is the official Amazon domain with proper security certificates. 
                    No suspicious redirects or typos detected.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      Official domain verified
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      Valid SSL certificate
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      No malware detected
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-warning mb-2">Example: Subtle Phishing Attempt</h3>
              <p className="text-sm text-foreground mb-3">
                <strong>⚠️ This website is unsafe.</strong> Reason: The domain 'paypa1.com' uses the number '1' instead of the letter 'l' 
                to mimic 'paypal.com'. This is a common trick to steal login credentials.
              </p>
              <Button variant="scan" size="sm">
                Learn More About This Threat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;