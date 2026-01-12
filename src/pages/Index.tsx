import ParticleNetwork from '@/components/ParticleNetwork';
import FloatingNav from '@/components/FloatingNav';
import LanguageSwitcher from '@/components/LanguageSwitcher'; // Вернул твой компонент
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    /* Провайдер НЕ нужен — он уже в App.tsx */
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Точки на фоне */}
      <ParticleNetwork />
      
      {/* Обертка для кнопок, чтобы они были кликабельны поверх частиц */}
      <div className="fixed top-6 right-6 z-[100]">
        <LanguageSwitcher />
      </div>

      <FloatingNav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;