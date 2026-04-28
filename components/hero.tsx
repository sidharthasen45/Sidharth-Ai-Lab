'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background patterns and glowing orbs */}
      <div className="absolute inset-0 w-full h-full bg-brand-dark -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-glow-indigo -z-10" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-glow-purple -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-8"
        >
          <span>2024 AI Integration</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.05] text-gradient max-w-5xl"
        >
          AI-Powered Digital Growth for Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
        >
          We build growth machines using artificial intelligence. Multiply your leads, scale your sales, and put your marketing on smart automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <Link href="#contact" className="btn-glow text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden">
            <span>Get Free Growth Plan</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="#work" className="glass text-white px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 w-full sm:w-auto h-[52px] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300">
            See our results
          </Link>
        </motion.div>

        {/* Trust markers / logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10 w-full flex flex-col items-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">Trusted by Forward-Thinking Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-lg font-display font-medium">✨ Brand {i}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
