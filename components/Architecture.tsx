'use client';

import { Network, GitBranch, Zap, Blocks } from 'lucide-react';

export default function Architecture() {
  const features = [
    {
      title: 'Neural Event Mesh',
      description: 'High-throughput message bus enabling real-time inter-agent communication through a distributed event-driven architecture with sub-millisecond latency.',
      icon: Network,
      gradient: 'from-blue-400 to-cyan-300'
    },
    {
      title: 'Multi-Agent Orchestration',
      description: 'Deploy coordinated agent swarms with dynamic load balancing, intelligent task distribution, and emergent collective intelligence patterns.',
      icon: GitBranch,
      gradient: 'from-purple-400 to-pink-300'
    },
    {
      title: 'Autonomous Workflow Engine',
      description: 'Chain complex multi-step operations with conditional logic, parallel execution paths, and self-optimizing decision trees for sophisticated automation.',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-300'
    },
    {
      title: 'Extensible Plugin Ecosystem',
      description: 'Hot-swappable microservices architecture with zero-downtime deployment, custom integrations, and community-driven protocol extensions.',
      icon: Blocks,
      gradient: 'from-green-400 to-emerald-300'
    }
  ];

  return (
    <section className="pt-18 pb-20 bg-primary" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light mb-4">
            Enterprise-grade infrastructure,
            <br/>infinitely scalable.
          </h2>
          <p className="text-xl text-light/80">
            Production-ready distributed systems architecture engineered for autonomous intelligence at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 rounded-md bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                <h3 className="relative text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="relative text-light/70 text-lg leading-relaxed group-hover:text-light/90 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${feature.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
