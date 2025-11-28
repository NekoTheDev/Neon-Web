import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CyberLogo } from './CyberLogo';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === '/landing';

  const links = isLanding ? [
    { name: 'Features', href: '#features' },
    { name: 'Offer', href: '#offer' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Main Site', href: '/' }
  ] : [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Offer', href: '/#/landing' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <CyberLogo className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-cyber font-bold text-xl tracking-widest text-white group-hover:text-cyan-400 transition-colors">
              NEON<span className="text-cyan-400">NEXUS</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:shadow-[0_0_15px_cyan] transition-all duration-300 px-3 py-2 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-900/50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-cyan-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium font-mono border-l-2 border-transparent hover:border-cyan-400 bg-gradient-to-r hover:from-cyan-900/20 to-transparent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};