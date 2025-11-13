import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Architecture from '@/components/Architecture';
import Tokenomics from '@/components/Tokenomics';
import Trust from '@/components/Trust';
import StartHere from '@/components/StartHere';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-120"
          style={{
            backgroundImage: 'url(/background.png)',
          }}
        />
        <div className="absolute inset-0 bg-background/30 z-10" />
        <Hero />
        <Architecture />
        <StartHere />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
}
