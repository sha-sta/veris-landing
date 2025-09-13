import { Button } from "@/components/ui/button";
import { Shield, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, popIn, staggerContainer } from "@/lib/motion";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="py-16 lg:py-24 bg-gradient-to-b from-primary to-accent"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8"
            variants={popIn}
          >
            <Shield className="w-4 h-4" />
            Free Chrome Extension
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Don't let scammers win.
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
            variants={fadeInUp}
          >
            Join our community at Veris to protect your digital life. Start
            scanning emails, websites, and files today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg group"
            >
              <Download className="w-5 h-5" />
              Install Extension
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* <div className="grid md:grid-cols-3 gap-8 text-center">
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
          </div> */}

          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            variants={fadeInUp}
          >
            <p className="text-white/80 text-sm">
              Free to use • No personal data collected • Works with Gmail on
              Chrome.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
