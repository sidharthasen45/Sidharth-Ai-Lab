'use client';

import { motion, useInView } from 'motion/react';
import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const cases = [
  {
    client: "E-Commerce Brand",
    subtitle: "Organic Social Growth",
    resultNum: 1000,
    resultSuffix: "+",
    resultLabel: "Followers in 30 days",
    description: "Went from 0 to 1K hyper-engaged followers organically using AI-driven content pillars and trend analysis.",
    color: "from-brand-purple to-pink-500"
  },
  {
    client: "B2B SaaS",
    subtitle: "Lead Gen Automation",
    resultNum: 85,
    resultSuffix: "%",
    resultLabel: "Decrease in CAC",
    description: "Replaced manual prospecting with an AI automation sequence, booking 40+ sales calls in the first month.",
    color: "from-brand-neon to-blue-500"
  },
  {
    client: "Local Service Tech",
    subtitle: "Paid Ads Scaling",
    resultNum: 420,
    resultSuffix: "%",
    resultLabel: "ROAS over 3 months",
    description: "Overhauled Google Ads strategy using advanced AI bidding models, driving massive revenue growth efficiently.",
    color: "from-orange-400 to-red-500"
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-transparent relative z-10">
      <div className="absolute inset-0 bg-transparent w-full h-[30%]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="px-3 py-1 inline-block text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-4">Proven Results</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-gradient">
            Impact in numbers.
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass flex flex-col md:flex-row rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)] transition-all duration-500 ${idx === 1 ? 'neon-border' : ''}`}
            >
              {/* Left Details */}
              <div className="p-8 md:p-12 md:w-5/12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${cs.color} opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-700`} />
                <div>
                  <h4 className="text-2xl font-display font-semibold mb-1">{cs.client}</h4>
                  <p className="text-sm text-brand-neon">{cs.subtitle}</p>
                </div>
                <div className="mt-8">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {cs.description}
                  </p>
                </div>
              </div>

              {/* Right Big Number */}
              <div className="p-8 md:p-12 md:w-7/12 flex flex-col items-start justify-center relative bg-gradient-to-br from-transparent to-white/[0.02]">
                <div className="text-[10px] text-indigo-400 font-bold uppercase mb-2">
                  Result <ArrowUpRight size={16} className="inline ml-1 mb-0.5" />
                </div>
                <div className="text-5xl md:text-6xl stat-number">
                  <Counter from={0} to={cs.resultNum} suffix={cs.resultSuffix} />
                </div>
                <div className="text-lg md:text-xl text-gray-400 mt-2 font-medium">
                  {cs.resultLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
