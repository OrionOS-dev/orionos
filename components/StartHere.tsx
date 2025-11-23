'use client';

import Trust from './Trust';
import Button from './ui/Button';

export default function StartHere() {

  return (
    <section id="partners" className="relative overflow-hidden py-20 min-h-[100vh] flex flex-col justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110"
        style={{
          backgroundImage: 'url(/growing.png)',
        }}
      />

      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              OrionOS is ready, are you?
            </p>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light">
              Join countless other developers building the future of autonomous AI on OrionOS
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Get Started Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
      </div>
      <div className="absolute top-0">
        <Trust />
      </div>
      <div className="absolute bottom-0">
        <Trust direction={0} />
      </div>
    </section>
  );
}
