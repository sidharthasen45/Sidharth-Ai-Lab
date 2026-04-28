import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-darker pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#1e1b4b"/>
                <path d="M12 28L16.5 12H19.5L24 28H21L20.1 24.8H15.9L15 28H12ZM16.5 22.4H19.5L18 17.1L16.5 22.4ZM24 12H26V28H24V12ZM8 12H10V28H8V12Z" fill="#818cf8"/>
                <circle cx="32" cy="14" r="3" fill="#a855f7"/>
              </svg>
              <span className="font-display font-bold text-xl tracking-tight">
                SIDHARTH <span className="text-indigo-400">AI LAB</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              We engineer growth using intelligent systems. AI-powered digital marketing for ambitious brands looking to scale fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Paid Advertising</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Lead Generation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="#work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why AI</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Get Free Audit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sidharth AI Lab. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
