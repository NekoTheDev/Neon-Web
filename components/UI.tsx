import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'pink';
  children: React.ReactNode;
}

export const NeonButton: React.FC<ButtonProps> = ({ variant = 'cyan', className = '', children, ...props }) => {
  const colorClass = variant === 'cyan' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/20 shadow-[0_0_10px_rgba(217,70,239,0.4)]';
  
  return (
    <button 
      className={`relative px-8 py-3 font-cyber font-bold uppercase tracking-wider border-2 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm group overflow-hidden ${colorClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};

export const HoloCard: React.FC<{ children: React.ReactNode; className?: string; color?: 'cyan' | 'pink' | 'purple' }> = ({ children, className = '', color = 'cyan' }) => {
  const borderColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-400',
    pink: 'border-pink-500/30 hover:border-pink-400',
    purple: 'border-purple-500/30 hover:border-purple-400'
  };
  
  const glowColors = {
    cyan: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]',
    pink: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]',
    purple: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
  };

  return (
    <div className={`relative bg-[#12121a]/80 backdrop-blur-md border p-6 transition-all duration-300 group ${borderColors[color]} ${glowColors[color]} ${className}`}>
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'pink' ? 'border-pink-400' : 'border-purple-400'}`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'pink' ? 'border-pink-400' : 'border-purple-400'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'pink' ? 'border-pink-400' : 'border-purple-400'}`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${color === 'cyan' ? 'border-cyan-400' : color === 'pink' ? 'border-pink-400' : 'border-purple-400'}`} />
      
      {children}
    </div>
  );
};

export const GlitchText: React.FC<{ text: string; as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'; className?: string }> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block group hover:text-cyan-400 transition-colors ${className}`} data-text={text}>
      <span className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-[glitch_0.3s_infinite] clip-path-inset-1" aria-hidden="true">{text}</span>
      <span className="absolute top-0 left-0 ml-[2px] text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-[glitch_0.3s_infinite_reverse] clip-path-inset-2" aria-hidden="true">{text}</span>
      <span className="relative z-10">{text}</span>
    </Component>
  );
};

export const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="relative group">
    <input 
      {...props} 
      className="w-full bg-black/50 border border-gray-700 text-cyan-100 px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-600 font-mono"
    />
    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
  </div>
);