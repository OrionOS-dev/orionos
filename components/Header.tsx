'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
            <span className="text-2xl text-primary hover:text-secondary transition-colors">
              OrionOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden text-xl md:flex items-center space-x-8">
            <Link
              href="/#partners"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Partners
            </Link>
            <Link
              target="_blank"
              href="https://docs.orionos.dev"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              Docs
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              GitHub
            </Link>
            <Link
              href="/#tokenomics"
              className="text-foreground hover:text-secondary transition-colors font-medium"
            >
              $ORION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="#partners"
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="#docs"
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
