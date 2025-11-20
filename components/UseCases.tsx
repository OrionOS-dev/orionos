'use client';

export default function UseCases() {
  const useCases = [
    'AI Influencer',
    'Stock Trader',
    'Smart Home',
    'DAO Governance Delegate',
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
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Endless Possibilities
        </h2>
        <p className="text-center text-text-muted mb-12 text-lg">
          Build any type of autonomous agent you can imagine
        </p>

        {/* Scrolling carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {/* First set */}
            {useCases.map((useCase, index) => (
              <div
                key={`use-case-1-${index}`}
                className="flex-shrink-0 px-6 py-4 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-102"
              >
                <span className="text-foreground font-medium text-4xl whitespace-nowrap">
                  {useCase}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {useCases.map((useCase, index) => (
              <div
                key={`use-case-2-${index}`}
                className="flex-shrink-0 px-6 py-4 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-102"
              >
                <span className="text-foreground font-medium text-4xl whitespace-nowrap">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
