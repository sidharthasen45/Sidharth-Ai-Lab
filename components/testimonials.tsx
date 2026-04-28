'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Sidharth AI Lab completely transformed our lead generation process. The quality of leads went up while our ad spend actually decreased by 30%.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://picsum.photos/seed/sarah/150/150"
  },
  {
    quote: "We were struggling to scale our campaigns. Their AI-driven approach found audiences we didn't even know existed. Pure game-changer.",
    author: "David Chen",
    role: "Founder, GrowthStack",
    image: "https://picsum.photos/seed/david/150/150"
  },
  {
    quote: "The automation systems they built for our sales team saved us over 40 hours a week. It's like having an extra team of SDRs working 24/7.",
    author: "Elena Rodriguez",
    role: "VP Sales, OmniCorp",
    image: "https://picsum.photos/seed/elena/150/150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="px-3 py-1 inline-block text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-gradient">
            Don&apos;t just take our word for it.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass p-8 relative flex flex-col justify-between"
            >
              <Quote size={40} className="text-white/5 absolute top-6 right-6 group-hover:text-brand-purple/20 transition-colors duration-300" />
              
              <div className="mb-8 relative z-10">
                <p className="text-lg text-gray-300 leading-relaxed font-light">&quot;{t.quote}&quot;</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <Image src={t.image} alt={t.author} width={48} height={48} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="font-semibold text-white">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
