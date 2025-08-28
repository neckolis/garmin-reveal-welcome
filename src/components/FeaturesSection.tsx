import { Target, Sparkles, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Tailored to Garmin's Vision",
      description: "Every feature designed with your brand mission and outdoor excellence in mind",
      color: "text-secondary"
    },
    {
      icon: Sparkles,
      title: "Built with Care & Surprise",
      description: "We've already started thinking like you - this is just the beginning of our partnership",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Innovation Meets Excellence",
      description: "Powered by RunReveal's intelligence combined with Garmin's legendary vision",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 fade-in-up">
            Why This Is Built for You
          </h2>
          <p className="text-xl text-muted-foreground fade-in-delay">
            Three reasons this partnership is going to be extraordinary
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 fade-in-delay-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-card shadow-elegant flex items-center justify-center group-hover:shadow-glow transition-all duration-300 ${feature.color}`}>
                  <feature.icon size={32} strokeWidth={2} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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