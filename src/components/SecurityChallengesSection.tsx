import { AlertTriangle, TrendingUp, Shield, Activity } from "lucide-react";

const SecurityChallengesSection = () => {
  const challenges = [
    {
      challenge: "Ransomware vulnerability (e.g., WastedLocker)",
      solution: "Detect early. Avoid multi-day outages and million-dollar ransom demands.",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      challenge: "SIEM bloat and cost",
      solution: "Lightweight, cost-efficient—no ingest tax, no storage tax—just smart detection.",
      icon: TrendingUp,
      color: "text-secondary"
    },
    {
      challenge: "Tool fatigue & alert fatigue", 
      solution: "High-fidelity alerts. Unified console. Easy investigation workflows.",
      icon: Activity,
      color: "text-accent"
    },
    {
      challenge: "Complexity of operations",
      solution: "Handles IoT, wearables, aviation systems—just like your products do.",
      icon: Shield,
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 fade-in-up">
            Why Garmin—Why Now
          </h2>
          <p className="text-xl text-muted-foreground fade-in-delay mb-8">
            History doesn't lie. Let's learn from 2020 and build something stronger.
          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 max-w-4xl mx-auto text-left rounded-lg">
            <p className="text-gray-700">
              <strong>July 2020:</strong> Garmin was hit by WastedLocker ransomware—widely believed to have cost roughly 
              <span className="font-bold text-red-600"> $10 million</span> and caused a multi-day outage that shut down 
              Garmin Connect, websites, call centers, and even aviation services. The disruption exposed how even globally 
              trusted brands are deeply vulnerable.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 group fade-in-delay-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-background flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.challenge}
                  </h3>
                  <div className="h-px bg-accent/30 mb-3"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-medium text-secondary">RunReveal + Garmin:</span> {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            <span className="font-medium text-secondary">Run like you secure.</span> Just like Garmin devices endure extreme conditions, 
            RunReveal's platform is designed to thrive in complex environments—scaling effortlessly, performing consistently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityChallengesSection;