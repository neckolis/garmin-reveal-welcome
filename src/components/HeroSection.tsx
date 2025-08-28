const HeroSection = () => {
  return (
    <section className="gradient-hero py-20 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 fade-in-up">
            Welcome, Garmin Team
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8 fade-in-delay">
            Built just for you
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed fade-in-delay-2">
            We're excited to partner with you and create something amazing together. 
            This personalized experience is our way of saying hello and showing 
            you what's possible when innovation meets excellence.
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