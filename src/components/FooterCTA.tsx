const FooterCTA = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-4 fade-in-up">
            Let's go the distance together
          </h3>
          <p className="text-xl text-muted-foreground mb-8 fade-in-delay">
            On and off the server. Built for Garmin, powered by RunReveal.
          </p>
          
          <button className="btn-hero mb-8 fade-in-delay-2">
            Let's Chat
          </button>
          
          <div className="border-t pt-8 mt-8">
            <p className="text-muted-foreground">
              We built this just for you, Brett. Every mile, every threat, every solution—we're in this together. 🏃‍♂️
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 RunReveal × Garmin Security Partnership
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;