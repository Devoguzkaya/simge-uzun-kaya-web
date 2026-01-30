import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ParentalGuidanceSection from '../components/ParentalGuidanceSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CredentialsSection from '../components/CredentialsSection';
import ContactFooterSection from '../components/ContactFooterSection'; // Yeni komponent

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ParentalGuidanceSection />
        <AboutSection />
        <ServicesSection />
        <CredentialsSection />
        <ContactFooterSection /> {/* Yeni komponent */}
      </main>
    </div>
  );
}
