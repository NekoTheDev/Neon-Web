import React, { useState } from 'react';
import { SERVICES, STATS, TEAM, CASES } from '../constants';
import { GlitchText, HoloCard, NeonButton, InputField } from '../components/UI';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export const MainPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setFormStatus('error');
      return;
    }
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent" />
          {/* Animated Particles would go here with Canvas, but using simple divs for react simplicity */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-magenta-500 rounded-full animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            <GlitchText text="FUTURE_READY" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-mono mb-8 max-w-2xl mx-auto border-l-2 border-cyan-500 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            Architecting the digital infrastructure of tomorrow. 
            Secure. Scalable. <span className="text-fuchsia-400">Cybernetic.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <NeonButton onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Explore Systems
            </NeonButton>
            <NeonButton variant="pink" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Initiate Contact
            </NeonButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-cyber font-bold mb-6 text-white border-l-4 border-fuchsia-500 pl-4">
              <span className="text-fuchsia-500">01.</span> MISSION_DATA
            </h2>
            <p className="text-gray-400 mb-6 font-mono leading-relaxed">
              We operate at the bleeding edge of technology. Our mission is to augment enterprise capabilities through neural cloud networks and quantum-resistant security protocols.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="border border-cyan-500/20 p-4 text-center bg-cyan-900/5">
                  <div className="text-2xl font-cyber font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 animate-pulse border border-white/10 backdrop-blur-sm transform rotate-3" />
             <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?grayscale')] bg-cover opacity-30 mix-blend-luminosity" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-32 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin" />
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-cyber font-bold mb-16 text-white">
            <span className="text-cyan-400">02.</span> CORE_MODULES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <HoloCard key={service.id} color={service.color} className="h-full">
                <service.icon className={`w-12 h-12 mb-4 ${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'pink' ? 'text-pink-400' : 'text-purple-400'}`} />
                <h3 className="text-xl font-bold mb-3 font-cyber text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed">{service.description}</p>
              </HoloCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold mb-12 text-white">
            <span className="text-purple-500">03.</span> CASE_LOGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASES.map((study, idx) => (
              <div key={idx} className="group relative h-64 overflow-hidden border border-gray-800 cursor-pointer">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-cyan-400 font-mono text-sm mb-2">{study.client}</span>
                  <h3 className="text-2xl font-cyber font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-2 text-fuchsia-400 font-bold">
                    <ArrowRight className="w-4 h-4" />
                    {study.stats}
                  </div>
                </div>
                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-cyan-400/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-cyber font-bold mb-16 text-white">
             <span className="text-cyan-400">04.</span> OPERATIVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="relative group">
                <div className="relative overflow-hidden border-2 border-gray-800 group-hover:border-cyan-400 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 border-t border-cyan-500/50">
                    <h4 className="text-xl font-cyber font-bold text-white">{member.name}</h4>
                    <p className="text-cyan-400 text-sm font-mono">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <HoloCard color="pink" className="p-8 md:p-12">
            <h2 className="text-3xl font-cyber font-bold mb-2 text-center text-white">ESTABLISH_UPLINK</h2>
            <p className="text-center text-gray-400 mb-8 font-mono">Secure channel ready.</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <InputField type="text" placeholder="IDENTITY_NAME" required />
              <InputField 
                type="email" 
                placeholder="DIGITAL_ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <div className="relative group">
                <textarea 
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 text-cyan-100 px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-600 font-mono resize-none"
                  placeholder="TRANSMISSION_DATA"
                  required
                />
                <div className="absolute bottom-1 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </div>

              <NeonButton variant="pink" type="submit" className="w-full justify-center">
                {formStatus === 'idle' && 'SEND TRANSMISSION'}
                {formStatus === 'success' && <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> SENT</span>}
                {formStatus === 'error' && 'INVALID PROTOCOL'}
              </NeonButton>
            </form>
          </HoloCard>
        </div>
      </section>

    </div>
  );
};