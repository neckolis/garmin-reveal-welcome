import runrevealLogo from "@/assets/runreveal-logo.png";
import garminLogo from "@/assets/garmin-logo.png";

const MicrositeHeader = () => {
  return (
    <header className="gradient-hero border-b-4 border-secondary py-6 fade-in-up">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={runrevealLogo} 
              alt="RunReveal" 
              className="h-12 w-auto glow-purple"
            />
          </div>
          <div className="flex items-center">
            <img 
              src={garminLogo} 
              alt="Garmin" 
              className="h-12 w-auto glow-cyan"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MicrositeHeader;