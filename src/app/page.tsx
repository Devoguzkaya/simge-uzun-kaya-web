import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ParentalGuidanceSection from '../components/ParentalGuidanceSection';
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
      <main>
        <HeroSection />
        <ScrollReveal>
          <ParentalGuidanceSection />
        </ScrollReveal>
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
