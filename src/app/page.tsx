import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ParentalGuidanceSection from '../components/ParentalGuidanceSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CredentialsSection from '../components/CredentialsSection';
import ContactFooterSection from '../components/ContactFooterSection';
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
          <CredentialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactFooterSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
