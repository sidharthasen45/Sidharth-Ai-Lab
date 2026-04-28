'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link 
        href="https://wa.me/919937017783" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative"
      >
        <span className="absolute -top-10 right-0 bg-brand-darker text-white text-xs font-medium py-1 px-3 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <MessageCircle size={28} className="fill-white" />
      </Link>
    </motion.div>
  );
}
