'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
    setEmail('');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-transparent -z-20" />
      <div className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-glow-indigo" />
      </div>

      <div className="glass max-w-4xl mx-auto px-6 lg:px-8 text-center rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Glow border effect */}
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-gradient mb-6">
            Ready to multiply your <br className="hidden md:block" /> revenue?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Get your Free Marketing Audit today. We&apos;ll analyze your current strategy and show you exactly where AI can increase your ROI.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-gray-500"
            />
            <button type="submit" className="btn-glow text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              Get Audit <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="w-12 h-[1px] bg-white/10"></span>
            <span>OR CONNECT DIRECTLY</span>
            <span className="w-12 h-[1px] bg-white/10"></span>
          </div>

          <div className="mt-8">
            <Link href="https://wa.me/919937017783" target="_blank" className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20 font-medium hover:scale-105 transition-transform duration-300">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
