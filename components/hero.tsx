'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      await Promise.all([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: 'afe8a8c0-7ca3-4c8f-8912-15cb665dbd15',
            ...data,
          }),
        }),
        fetch('https://api.sheetbest.com/sheets/87460759-ad8b-467d-9a41-a9f526a2d471', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      ]);

      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

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
          className="mt-12 w-full max-w-5xl flex flex-col items-center"
        >
          <form onSubmit={handleSubmit} className="w-full relative z-20 glass p-2 md:p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl md:rounded-full px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#818cf8] focus:border-[#818cf8] focus:shadow-[0_0_15px_rgba(129,140,248,0.3)] focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl md:rounded-full px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#818cf8] focus:border-[#818cf8] focus:shadow-[0_0_15px_rgba(129,140,248,0.3)] focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl md:rounded-full px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#818cf8] focus:border-[#818cf8] focus:shadow-[0_0_15px_rgba(129,140,248,0.3)] focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
            />
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className="btn-glow text-white px-8 py-4 rounded-xl md:rounded-full font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'success' ? (
                'Submitted ✅'
              ) : (
                <>Get Free Audit <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-400">
              Free audit • No spam • Quick response
            </p>
            <Link 
              href="https://wa.me/919937017783" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-white px-5 py-2.5 rounded-full hover:bg-[#25D366] transition-all duration-300 font-medium text-sm group"
            >
              <MessageCircle size={18} className="stroke-[#25D366] group-hover:stroke-white transition-colors" />
              Chat on WhatsApp
            </Link>
          </div>
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
