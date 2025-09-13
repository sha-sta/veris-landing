import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Shield } from "lucide-react";

const SocialImpactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Protecting Our Community Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by a team that understands the unique challenges seniors face online
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seniors-First Design</h3>
                  <p className="text-muted-foreground">
                    Every feature is designed with seniors in mind - larger text, clear explanations, 
                    and no confusing technical jargon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Centers & Nonprofits</h3>
                  <p className="text-muted-foreground">
                    We partner with local organizations to provide free digital safety workshops 
                    and training sessions for seniors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teens Teach Tech Partnership</h3>
                  <p className="text-muted-foreground">
                    Our founder's experience working with seniors through Teens Teach Tech 
                    directly influenced every aspect of SecureGuard AI's design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Having worked directly with seniors teaching technology skills, I've seen firsthand 
                  how targeted and sophisticated scams have become. SecureGuard AI exists to level 
                  the playing field and give everyone the tools they need to stay safe online."
                </p>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">- SecureGuard AI Team</p>
                <p>Teens Teach Tech Alumni</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Mission to Protect Seniors Online
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a senior looking for protection, a family member wanting to help, 
            or an organization serving the senior community, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Protected Today
            </Button>
            <Button variant="outline" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpactSection;