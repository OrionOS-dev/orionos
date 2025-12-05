'use client';

import Link from 'next/link';
import Button from './ui/Button';

export default function Hero() {
  const useCases = [
    'AI Influencer',
    'Stock Trader',
    'Smart Home',
    'DAO Governance',
    'Personal Assistant',
    'Content Creator',
    'Data Analyst',
    'NFT Curator',
    'Portfolio Manager',
    'Research Agent',
    'Social Media Manager',
    'Task Automator',
    'DeFi Strategist',
    'Community Moderator',
    'Knowledge Synthesizer',
    'Workflow Optimizer'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 items-center">
          <div className="text-left col-span-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              The Operating System<br/> for all AI Agents
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light">
              Build, deploy, and scale autonomous AI agents with a modular, open-source architecture
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://docs.orionos.dev" target="_blank">
                <Button variant="primary" size="lg">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="https://x.com/i/communities/1996978996631032001" target="_blank">
                <Button variant="outline" size="lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden h-[75vh] flex flex-col justify-center">
            <div className="flex flex-col animate-scroll-vertical">
              {[...Array(3)].map((_, setIndex) => (
                useCases.map((useCase, index) => (
                  <div
                    key={`use-case-${setIndex}-${index}`}
                    className="px-6 py-4 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-102"
                  >
                    <span className="text-foreground font-medium text-3xl md:text-4xl whitespace-nowrap">
                      {useCase}
                    </span>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 30s linear infinite;
        }

        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
