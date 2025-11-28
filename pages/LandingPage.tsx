import React from 'react';
import { PRICING } from '../constants';
import { HoloCard, NeonButton, GlitchText } from '../components/UI';
import { Check, Zap, Server, ShieldCheck, ChevronDown } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Landing Hero */}
      <section className="relative min-h-[85vh] flex items-center px-4 overflow-hidden">
         {/* Background Grid Animation Override for Landing */}
         <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
           <div>
             <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/50 rounded-full bg-cyan-900/20">
               <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase animate-pulse">System Upgrade Available</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
               ELEVATE YOUR <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 filter drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]">
                 DIGITAL REALITY
               </span>
             </h1>
             <p className="text-xl text-gray-400 mb-8 font-mono border-l-4 border-cyan-500 pl-6">
               Access enterprise-grade neural networks and quantum security protocols. Limited slots for the new cycle.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <NeonButton variant="pink" className="w-full sm:w-auto justify-center text-lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}>
                 GET ACCESS NOW
               </NeonButton>
               <NeonButton variant="cyan" className="w-full sm:w-auto justify-center text-lg" onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})}>
                 VIEW SPECS
               </NeonButton>
             </div>
           </div>
           
           <div className="relative hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-20 animate-pulse" />
             <div className="relative border border-gray-700 bg-black/80 backdrop-blur p-2">
               <img src="https://picsum.photos/600/600?grayscale" alt="Dashboard" className="w-full h-auto opacity-80 mix-blend-luminosity" />
               <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="border border-cyan-500/10" />
                 ))}
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-cyber font-bold text-white mb-4">SYSTEM_CAPABILITIES</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 hover:border-cyan-400 transition-colors bg-gradient-to-b from-gray-900 to-black group">
              <Zap className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2 font-cyber">Speed_Demon</h3>
              <p className="text-gray-400 font-mono text-sm">Optimized assets load 400% faster via our edge computing delivery network.</p>
            </div>
            <div className="p-8 border border-gray-800 hover:border-fuchsia-400 transition-colors bg-gradient-to-b from-gray-900 to-black group">
              <ShieldCheck className="w-10 h-10 text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2 font-cyber">Iron_Clad</h3>
              <p className="text-gray-400 font-mono text-sm">AES-256 encryption standard with additional AI-driven anomaly detection.</p>
            </div>
            <div className="p-8 border border-gray-800 hover:border-purple-400 transition-colors bg-gradient-to-b from-gray-900 to-black group">
              <Server className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2 font-cyber">Auto_Scale</h3>
              <p className="text-gray-400 font-mono text-sm">Infrastructure that breathes, expanding automatically during traffic spikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer / What We Offer */}
      <section id="offer" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="relative border-2 border-fuchsia-500/30 p-2">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-fuchsia-500" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-fuchsia-500" />
                <img src="https://picsum.photos/600/400?grayscale&blur=1" alt="Hologram" className="w-full mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                   <div className="font-mono text-cyan-400 text-xs mb-1">STATUS: ONLINE</div>
                   <div className="text-2xl font-cyber font-bold text-white">NETWORK VISUALIZER</div>
                </div>
             </div>
           </div>
           
           <div className="order-1 lg:order-2">
             <h2 className="text-4xl font-cyber font-bold text-white mb-6">
               <GlitchText text="DEPLOYMENT_READY" />
             </h2>
             <ul className="space-y-4">
               {['Zero-Day Exploit Protection', 'Neural Net Load Balancing', 'Holographic User Interface', 'Quantum Key Distribution'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-gray-300 font-mono group">
                   <div className="w-6 h-6 rounded flex items-center justify-center bg-cyan-900/50 border border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                     <Check className="w-4 h-4" />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
             <div className="mt-8 border-t border-gray-800 pt-8">
               <div className="flex gap-8">
                 <div>
                   <div className="text-3xl font-bold text-white font-cyber">24/7</div>
                   <div className="text-xs text-gray-500 font-mono uppercase">Uptime Monitor</div>
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white font-cyber">50ms</div>
                   <div className="text-xs text-gray-500 font-mono uppercase">Global Latency</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-cyber font-bold mb-16 text-white">ACCESS_TIERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, idx) => (
              <HoloCard 
                key={idx} 
                color={plan.color} 
                className={`relative flex flex-col ${plan.isPopular ? 'transform md:-translate-y-4 z-10 bg-[#151520]' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-fuchsia-500 text-black font-bold font-mono px-4 py-1 text-xs tracking-widest uppercase shadow-[0_0_10px_magenta]">
                    Best Value
                  </div>
                )}
                <h3 className="text-2xl font-cyber font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 text-gray-200 font-mono">{plan.price}<span className="text-sm text-gray-500">/mo</span></div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400 font-mono">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full ${plan.color === 'cyan' ? 'bg-cyan-400' : plan.color === 'pink' ? 'bg-pink-400' : 'bg-purple-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <NeonButton variant={plan.color === 'cyan' ? 'cyan' : 'pink'} className="w-full justify-center text-sm">
                  INITIALIZE
                </NeonButton>
              </HoloCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
         <h2 className="text-3xl font-cyber font-bold mb-8 text-white text-center">FAQ_DATABASE</h2>
         <div className="space-y-4">
           {[
             { q: "Is the neural link reversible?", a: "Yes, all our implants are plug-and-play with hot-swap capability." },
             { q: "Do you accept crypto?", a: "We accept Bitcoin, Ethereum, and corporate scrip." },
             { q: "What is your uptime guarantee?", a: "We guarantee 99.999% uptime with redundant quantum nodes." }
           ].map((item, idx) => (
             <details key={idx} className="group bg-black/40 border border-gray-800 open:border-cyan-500/50 transition-colors">
               <summary className="flex items-center justify-between p-4 cursor-pointer font-mono text-gray-200 hover:text-cyan-400">
                 {item.q}
                 <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
               </summary>
               <div className="p-4 pt-0 text-gray-400 font-mono text-sm border-t border-gray-800 group-open:border-cyan-500/20">
                 {item.a}
               </div>
             </details>
           ))}
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto relative p-12 text-center border border-cyan-500/30 overflow-hidden bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-cyber">READY TO JACK IN?</h2>
            <p className="text-xl text-gray-300 mb-8 font-mono">Join the network. The future waits for no one.</p>
            <NeonButton variant="pink" className="text-xl px-12 py-4">START TRIAL</NeonButton>
          </div>
          {/* Ring effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/20 rounded-full animate-ping" />
        </div>
      </section>
    </div>
  );
};