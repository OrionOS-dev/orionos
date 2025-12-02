'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" id="contact">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110"
        style={{
          backgroundImage: 'url(/footer.png)',
        }}
      />

      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-20 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <Image src="/logo.png" width={100} height={100} alt="Logo" className='mb-4' />
            <h2 className="text-6xl md:text-7xl lg:text-6xl text-foreground leading-none mb-8 tracking-tight">
              CREATE YOUR 
              <br/>
              AI AGENT
            </h2>
          </div>

          <div className="lg:col-span-1">
            <nav className="space-y-6">
              <Link
                href="/#partners"
                className="block text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors uppercase tracking-wide"
              >
                PARTNERS
              </Link>
              <Link
                target="_blank"
                href="https://docs.orionos.dev"
                className="block text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors uppercase tracking-wide"
              >
                DOCUMENTATIOn
              </Link>
              <Link
                href="/#tokenomics"
                className="block text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors uppercase tracking-wide"
              >
                $ORION
              </Link>
              <Link
                href="mailto:contact@orionos.dev"
                className="block text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors uppercase tracking-wide"
              >
                CONTACT US
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <a
                href="https://github.com/OrionOS-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors group"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="uppercase tracking-wide">Github</span>
              </a>
              <a
                href="https://x.com/orionosdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground hover:text-foreground/80 transition-colors group"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="uppercase tracking-wide">@OrionOSdev</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
