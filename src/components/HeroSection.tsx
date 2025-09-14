import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, popIn, staggerContainer } from "@/lib/motion";
import heroImage from "@/assets/gmail_pic.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="relative container mx-auto px-4 py-40 lg:py-52">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/80 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
              variants={popIn}
            >
              <Chrome className="w-4 h-4" />
              Free Chrome Extension
            </motion.div>

            <motion.div className="space-y-10" variants={fadeInUp}>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your personal digital security advocate.
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Real-time scam detection, cyber protection, and education.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button variant="hero" size="lg" className="group">
                Install Extension
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
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
          </motion.div>

          <motion.div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.img
              src={heroImage}
              alt="Product dashboard preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
