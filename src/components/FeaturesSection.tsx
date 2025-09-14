import { MousePointer, BookOpen, Shield, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, popIn, staggerContainer } from "@/lib/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointer,
      title: "One-click scam detection.",
      description:
        "Simply hit the 'scan' button and get instant results. No technical knowledge required.",
    },
    {
      icon: BookOpen,
      title: "Simple explanations.",
      description:
        "Clear explanations help you understand exactly why something is dangerous and what to look out for next time.",
    },
    {
      icon: Shield,
      title: "Learn as you go.",
      description:
        "Each scan teaches you something new about online safety, building your confidence and protecting you long-term.",
    },
    {
      icon: CreditCard,
      title: "Protects your finances.",
      description:
        "Specifically designed to catch financial scams that target seniors, from fake bank emails to investment frauds.",
    },
  ];

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
            Powerful protection made simple.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group h-64 perspective-1000"
                variants={fadeInUp}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/70 rounded-xl p-8 pt-12 shadow-sm border border-border/50 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white/70 rounded-xl p-8 shadow-lg flex flex-col items-center justify-center text-center">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">
              Catches both obvious AND subtle scams
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
