import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'; // HeroSection'ı import ediyoruz

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection /> {/* HeroSection'ı buraya ekledik */}
        {/* Buraya daha sonra diğer section'lar gelecek */}
      </main>
    </div>
  );
}
