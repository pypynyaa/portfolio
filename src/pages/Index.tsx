import ParticleNetwork from '@/components/ParticleNetwork';
import FloatingNav from '@/components/FloatingNav';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Точки на фоне */}
      <ParticleNetwork />
      
      {/* Кнопка языка */}
      <div className="fixed top-6 right-6 z-[100]">
        <LanguageSwitcher />
      </div>

      {/* Твое боковое меню */}
      <FloatingNav />

      <main className="relative z-10">
        {/* Оборачиваем в секции с ID, чтобы FloatingNav знал, куда скроллить */}
        <section id="home"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <AboutSection /> 
        <section id="contacts"><Contacts /></section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;