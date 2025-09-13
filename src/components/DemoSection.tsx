import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, popIn, staggerContainer } from "@/lib/motion";
import emailScamMockup from "@/assets/paypal_scam.png";
import emailGoodMockup from "@/assets/legal_zoom_nonscam.png";

const DemoSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See Veris in action.
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Email Scan Demo */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="relative">
              <motion.img
                src={emailScamMockup}
                alt="Email scanning interface showing phishing detection"
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                variants={popIn}
              >
                ⚠️ Phishing Detected
              </motion.div>
            </div>

            <div className="bg-card border-l-4 border-l-destructive p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-2xl text-destructive mb-4">
                    High Risk Email Detected
                  </h3>
                  <p className="text-md text-foreground mb-3">
                    This email uses urgent language like "verify your identity
                    immediately" to create panic.
                  </p>
                  <p className="text-md text-foreground mb-3">
                    The link "https://paypa1.verify-account.com/login" is a
                    deceptive URL designed to mimic PayPal by replacing the
                    letter "l" with the number "1".
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
          </motion.div>

          {/* URL Scan Demo */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="relative">
              <motion.img
                src={emailGoodMockup}
                alt="Browser extension showing URL safety check"
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                variants={popIn}
              >
                ✅ Safe to Visit
              </motion.div>
            </div>

            <div className="bg-card border-l-4 border-l-success p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-2xl text-success mb-4">
                    Email Verified Safe
                  </h3>
                  <p className="text-md text-foreground mb-3">
                    This email from "e.legalzoom.com" (a LegalZoom marketing
                    subdomain of legalzoom.com) is verified as an official
                    LegalZoom sending domain.
                  </p>
                  <p className="text-md text-foreground mb-3">
                    No suspicious page redirects, grammatical errors, or known
                    malware were detected.
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
