import MicrositeHeader from "@/components/MicrositeHeader";
import HeroSection from "@/components/HeroSection";
import CEOVideoSection from "@/components/CEOVideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import SecurityChallengesSection from "@/components/SecurityChallengesSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MicrositeHeader />
      <main className="relative overflow-hidden">
        <HeroSection />
        <CEOVideoSection />
        <FeaturesSection />
        <SecurityChallengesSection />
      </main>
      <FooterCTA />
    </div>
  );
};

export default Index;
