const CEOVideoSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4 fade-in-up">
            A Security Message From Our CEO
          </h2>
          <p className="text-xl text-muted-foreground mb-12 fade-in-delay">
            Why RunReveal was built for teams like yours—a personal message from our CEO
          </p>
          
          <div className="video-frame max-w-3xl mx-auto fade-in-delay-2">
            <div className="aspect-video bg-primary/5 rounded-2xl flex items-center justify-center">
              {/* Placeholder for actual video embed */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Video embed will be placed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (YouTube/Vimeo iframe)
                </p>
              </div>
            </div>
          </div>
          
          {/* Future implementation note for actual video */}
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Implementation Note:</strong> Replace the placeholder above with:
            </p>
            <code className="text-xs bg-background p-2 rounded mt-2 block">
              &lt;iframe src="https://youtube.com/embed/VIDEO_ID" className="w-full h-full rounded-2xl"&gt;&lt;/iframe&gt;
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOVideoSection;