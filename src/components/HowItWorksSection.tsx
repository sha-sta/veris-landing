import { ArrowRight, Upload, Scan, Shield, Lightbulb } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      number: "1",
      title: "Paste email or URL",
      description: "Copy and paste any suspicious email content or website URL into our secure scanner."
    },
    {
      icon: Scan,
      title: "AI + Safe Browsing API check",
      number: "2", 
      description: "Our advanced AI analyzes the content while Google's Safe Browsing API checks for known threats."
    },
    {
      icon: Shield,
      title: "Risk score + explanation",
      number: "3",
      description: "Get an instant color-coded risk level with a clear explanation of any threats found."
    },
    {
      icon: Lightbulb,
      title: "Tips to stay safe",
      number: "4",
      description: "Learn specific steps to protect yourself and recognize similar threats in the future."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How SecureGuard AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to comprehensive protection against digital scams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="relative">
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                        <Icon className="w-10 h-10 text-primary group-hover:text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {!isLast && (
                    <div className="hidden lg:block absolute top-10 -right-4 z-10">
                      <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Protection in Seconds, Peace of Mind Forever
            </h3>
            <p className="text-muted-foreground mb-6">
              Our technology combines the latest AI advances with human-centered design 
              to give you confidence in every digital interaction.
            </p>
            <div className="flex justify-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Instant Results
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                Always Learning
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                100% Private
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;