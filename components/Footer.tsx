import React from 'react';
import { CyberLogo } from './CyberLogo';
import { Twitter, Github, Linkedin, Disc } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <CyberLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-white font-cyber">NEONNEXUS</span>
            </div>
            <p className="text-gray-500 text-sm font-mono max-w-sm">
              Constructing the backbone of the cyberpunk future. We build the systems that run the night city.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-cyber uppercase tracking-wider">Coordinates</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              <li>Sector 7G, Night City</li>
              <li>Neo-Tokyo District</li>
              <li>Sub-Level 04</li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 font-cyber uppercase tracking-wider">Social Link</h4>
             <div className="flex gap-4">
               {[Twitter, Github, Linkedin, Disc].map((Icon, i) => (
                 <a key={i} href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © 2077 NeonNexus Corp. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-gray-600">
             <a href="#" className="hover:text-cyan-400">Privacy Protocol</a>
             <a href="#" className="hover:text-cyan-400">Terms of Engagement</a>
          </div>
        </div>
      </div>
      
      {/* Decorative footer line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-50" />
    </footer>
  );
};