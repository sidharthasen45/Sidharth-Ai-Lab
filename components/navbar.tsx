'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b justify-center py-4 border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#1e1b4b"/>
            <path d="M12 28L16.5 12H19.5L24 28H21L20.1 24.8H15.9L15 28H12ZM16.5 22.4H19.5L18 17.1L16.5 22.4ZM24 12H26V28H24V12ZM8 12H10V28H8V12Z" fill="#818cf8"/>
            <circle cx="32" cy="14" r="3" fill="#a855f7"/>
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">
            SIDHARTH <span className="text-indigo-400">AI LAB</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Case Studies</a>
          <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Why AI</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:bg-white/5 transition-colors">
            Get Free Audit
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-brand-darker border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-lg font-medium text-gray-300">Services</a>
          <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-lg font-medium text-gray-300">Case Studies</a>
          <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="text-lg font-medium text-gray-300">Why AI</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-lg font-medium bg-white text-black px-5 py-3 rounded-xl text-center mt-4">
            Get Free Audit
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
