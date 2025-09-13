import { TrendingUp, Users, DollarSign, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, popIn, staggerContainer } from "@/lib/motion";

const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$3.1B",
      label: "lost to scams in 2022.",
      description: "Total financial losses from email scams, calls, and texts.",
    },
    {
      icon: Users,
      value: "$335M",
      label: "lost by adults 60-69.",
      description: "January-March 2025 losses in this age group alone.",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "increase in phishing.",
      description: "Rise in sophisticated emotion-baiting scams.",
    },
    {
      icon: AlertTriangle,
      value: "1 in 4",
      label: "seniors targeted.",
      description: "Seniors receive 4x more scam attempts than younger adults.",
    },
  ];

  return (
    <section className="pt-36 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The threat of digital scams is growing.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group hover:bg-card hover:shadow-lg rounded-xl p-6 transition-all duration-300"
                variants={fadeInUp}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors"
                  variants={popIn}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground text-lg mb-2">
                  {stat.label}
                </div>
                <p className="text-md text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
