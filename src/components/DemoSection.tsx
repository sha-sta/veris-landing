import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import emailScamMockup from "@/assets/paypal_scam.png";
import emailGoodMockup from "@/assets/legal_zoom_nonscam.png";

const DemoSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See Veris in action.
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time protection with instant explanations you can understand
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Email Scan Demo */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={emailScamMockup}
                alt="Email scanning interface showing phishing detection"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ⚠️ Phishing Detected
              </div>
            </div>

            <div className="bg-card border-l-4 border-l-destructive p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-2xl text-destructive mb-2">
                    High Risk Email Detected
                  </h3>
                  <p className="text-md text-foreground mb-3">
                    This email uses urgent language like "verify your identity
                    immediately" to create panic. The link
                    "https://paypa1.verify-account.com/login" is a deceptive URL
                    designed to mimic PayPal by replacing the "l" with "1".
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
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
                src={emailGoodMockup}
                alt="Browser extension showing URL safety check"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✅ Safe to Visit
              </div>
            </div>

            <div className="bg-card border-l-4 border-l-success p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-2xl text-success mb-2">
                    Website Verified Safe
                  </h3>
                  <p className="text-md text-foreground mb-3">
                    This website e.legalzoom.com (a LegalZoom marketing
                    subdomain of legalzoom.com) is verified as an official
                    LegalZoom sending domain. No suspicious redirects, typos, or
                    known malware were detected.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
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
      </div>
    </section>
  );
};

export default DemoSection;
