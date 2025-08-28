const HeroSection = () => {
  return (
    <section className="gradient-hero py-20 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 fade-in-up">
            Hey Brett!
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8 fade-in-delay">
            We built this just for Garmin—because we're runners too
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed fade-in-delay-2 max-w-3xl mx-auto">
            Every one of us carries a Garmin. We get it. You deserve security that runs as long 
            and strong as your devices. This personalized experience shows we understand your world—
            both on the track and in the SOC.
          </p>
        </div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;