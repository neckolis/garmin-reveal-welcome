import { Shield, DollarSign, Zap, Eye } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "We're Runners Who Get Security",
      description: "We use Garmins. We understand your world. We speak your language—both on the track and in the SOC.",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      title: "Bye-bye SIEM Tax",
      description: "Traditional SIEM solutions slow down detection and cost more. RunReveal delivers instantaneous visibility without the hidden tax.",
      color: "text-accent"
    },
    {
      icon: Eye,
      title: "AI-Powered Detection You Can Trust",
      description: "Our platform ingests endpoint, cloud, and network telemetry, then applies intelligent analytics so you catch threats before they escalate.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Zero-Config Magic",
      description: "RunReveal installs fast, adapts auto-magically, surfaces high-fidelity alerts, and has your team focused on investigation, not tuning.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 fade-in-up">
            Why RunReveal?
          </h2>
          <p className="text-xl text-muted-foreground fade-in-delay">
            Security that runs as strong as your devices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 fade-in-delay-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-card shadow-elegant flex items-center justify-center group-hover:shadow-glow transition-all duration-300 ${feature.color}`}>
                  <feature.icon size={28} strokeWidth={2} />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;