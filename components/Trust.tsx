'use client';

import Image from "next/image";

export default function Trust({direction = 1}) {
  const partners = [
    { name: 'ARPro', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FApro.png&w=96&q=75' },
    { name: 'Magic Eden', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FMagic-Eden.png&w=96&q=75' },
    { name: 'vvaifu.fun', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2Fvvaifu-fun.png&w=96&q=75' },
    { name: 'Allora Labs', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FAllora.png&w=96&q=75' },
    { name: 'Chainlink', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FChainlink.png&w=96&q=75' },
    { name: 'Fuel', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FFuel.png&w=96&q=75' },
    { name: 'LayerZero', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FLayerzero.png&w=96&q=75' },
    { name: 'Collab.Land', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2FCollab-Land.png&w=96&q=75' },
    { name: 'io.net', logo: 'https://elizaos.ai/_next/image?url=%2Fpartner-schema%2Fio-net.png&w=96&q=75' },
  ];

  return (
    <section className="overflow-hidden w-full">
      <div className="w-full">
        <div className="relative overflow-hidden w-full">
          <div className={`flex gap-16 ${direction == 1 ? 'animate-scroll-horizontal' : 'animate-scroll-horizontal-right'} py-4`}>
            {[...Array(3)].map((_, setIndex) => (
              partners.map((partner, index) => (
                <div
                  key={`partner-${setIndex}-${index}`}
                  className="relative group flex-shrink-0 flex flex-col items-center justify-center px-8 py-6 l min-w-[120px]"
                >
                  <Image src={partner.logo} alt={partner.name} width={96} height={96} className="rounded-md group-hover:opacity-0 transition-opacity duration-300" />

                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="text-foreground font-semibold px-3 py-1.5 text-lg whitespace-nowrap">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        .animate-scroll-horizontal-right {
          animation: scroll-horizontal reverse 30s linear infinite;
        }

        .animate-scroll-horizontal:hover, .animate-scroll-horizontal-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
