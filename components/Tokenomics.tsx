'use client';

import { TrendingUp, Shield, Clock } from 'lucide-react';
import Button from './ui/Button';

export default function Tokenomics() {
  const features = [
    {
      title: 'Revenue Buyback Program',
      description: 'All revenue generated on the OrionOS platform is automatically used to buyback $ORION tokens from the market, creating constant demand and value for holders.',
      icon: TrendingUp,
      gradient: 'from-green-400 to-emerald-300'
    },
    {
      title: '24/7 Technical Support',
      description: '$ORION holders receive exclusive access to our dedicated technical support team, available around the clock to assist with any development needs.',
      icon: Shield,
      gradient: 'from-blue-400 to-cyan-300'
    },
    {
      title: 'Instant Priority Access',
      description: 'Token holders get priority access to new features, plugins, and updates before they are released to the general public.',
      icon: Clock,
      gradient: 'from-purple-400 to-pink-300'
    }
  ];

  return (
    <section className="pt-18 pb-20 bg-primary" id="tokenomics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-4">
            $ORION driven by utility, <br /> on the platform.
          </h2>
          <p className="text-xl text-light/80 mb-8">
            A sustainable token economy that rewards our community and loyal holders
          </p>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.open('https://pump.fun', '_blank')}
          >
            Buy $ORION on Pump.fun
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                <div className={`absolute inset-0 rounded-md bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                <h3 className="relative text-2xl font-bold text-white mb-4 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-light/70 text-lg leading-relaxed group-hover:text-light/90 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${feature.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
