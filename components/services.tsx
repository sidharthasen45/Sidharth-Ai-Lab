'use client';

import { motion } from 'motion/react';
import { Target, TrendingUp, Cpu, Users } from 'lucide-react';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Data-driven content strategies that build brand authority and engage your ideal audience.',
    icon: <Users size={24} />,
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Paid Ads (Meta/Google)',
    description: 'Precision targeting and AI-optimized bidding to drive high-intent traffic and conversions.',
    icon: <TrendingUp size={24} />,
    color: 'from-brand-purple/20 to-brand-purple/5',
    iconColor: 'text-brand-purple',
  },
  {
    title: 'AI Automation',
    description: 'Streamline workflows and customer support with intelligent bots and integrated AI agents.',
    icon: <Cpu size={24} />,
    color: 'from-brand-neon/20 to-brand-neon/5',
    iconColor: 'text-brand-neon',
  },
  {
    title: 'Lead Generation',
    description: 'Predictable growth engines designed to capture, nurture, and convert qualified leads.',
    icon: <Target size={24} />,
    color: 'from-orange-500/20 to-orange-500/5',
    iconColor: 'text-orange-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="px-3 py-1 inline-block text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-gradient">
              We engineer growth using <br className="hidden md:block"/>
              intelligent systems.
            </h3>
          </div>
          <p className="text-gray-400 max-w-md md:text-right">
            Instead of guessing, we use data. Our methodology combines creative strategy with rigorous AI-powered execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass p-8 flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)] transition-all duration-500 ${index === 1 ? 'neon-border' : ''}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                <div className={`absolute -inset-10 bg-gradient-to-br ${service.color} opacity-30 blur-2xl rounded-full translate-y-1/2 group-hover:translate-y-0 transition-transform duration-700`} />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-3 text-white group-hover:-translate-y-1 transition-transform duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
