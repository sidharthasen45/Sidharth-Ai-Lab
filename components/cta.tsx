'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CTA() {
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

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-gray-500"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-gray-500"
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Your Phone" 
              required
              className="w-full md:flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-gray-500"
            />
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className="btn-glow md:mt-0 w-full md:w-auto text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'success' ? (
                'Submitted ✅'
              ) : (
                <>Get Audit <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-400">
              Free audit • No spam • Quick response
            </p>
            <Link 
              href="https://wa.me/919937017783" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20 font-medium hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
