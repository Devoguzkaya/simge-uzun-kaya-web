import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CredentialsSection from '../components/CredentialsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto bg-white/10 backdrop-blur-[2px] relative md:shadow-[0_0_50px_rgba(0,0,0,0.02)] md:border-x border-pine/5">
        <HeroSection />

        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal>
          <CredentialsSection />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
