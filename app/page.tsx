import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import CaseStudies from '@/components/case-studies';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-brand-purple/30 text-white bg-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
