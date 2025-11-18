import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ComingSoon from '@/components/ComingSoon';
import ContactPage from '@/components/Contantus';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ComingSoon />
      <ContactPage />
    </main>
  );
}