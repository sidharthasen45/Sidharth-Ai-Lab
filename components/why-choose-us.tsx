'use client';

import { motion } from 'motion/react';
import { BrainCircuit, Timer, LineChart, Sparkles } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: <BrainCircuit size={32} className="text-brand-purple" />,
    title: "AI First Approach",
    desc: "We don't just use tools; we build proprietary AI workflows to outsmart your competition."
  },
  {
    icon: <Timer size={32} className="text-brand-neon" />,
    title: "Hyper-efficient Execution",
    desc: "What takes traditional agencies weeks, our automated systems execute in days with higher precision."
  },
  {
    icon: <LineChart size={32} className="text-orange-400" />,
    title: "Data Over Intuition",
    desc: "Every creative and bid change is backed by predictive analytics and real-time performance data."
  },
  {
    icon: <Sparkles size={32} className="text-blue-400" />,
    title: "Generative Creative",
    desc: "We produce hundreds of ad creative variations using AI to find the perfect winning combination faster."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-transparent border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="px-3 py-1 inline-block text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-4">The AI Edge</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-gradient mb-6">
              Traditional marketing is too slow.
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We leverage advanced artificial intelligence to automate mundane tasks, analyze massive datasets in seconds, and generate hyper-personalized creatives at scale. The result? Lower costs and exponentially higher returns.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-darker bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${i}/100/100`} width={40} height={40} referrerPolicy="no-referrer" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 font-medium">Join 50+ smart businesses</p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-neon/10 blur-[80px] -z-10 rounded-full" />
            
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`glass p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300 ${idx % 2 === 1 ? 'sm:mt-12' : ''}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
