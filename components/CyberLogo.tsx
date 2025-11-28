import React from 'react';

export const CyberLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 L30 10 H90 L90 70 L70 90 H10 V30 Z" stroke="cyan" strokeWidth="4" fill="none" className="drop-shadow-[0_0_10px_cyan]" />
    <path d="M25 40 V75 M50 40 V75 M75 40 V75" stroke="magenta" strokeWidth="2" strokeOpacity="0.5" />
    <text x="50" y="65" fontFamily="Orbitron" fontSize="35" fill="white" textAnchor="middle" className="drop-shadow-[0_0_5px_magenta]">IT</text>
    <circle cx="90" cy="10" r="2" fill="cyan" className="animate-ping" />
  </svg>
);