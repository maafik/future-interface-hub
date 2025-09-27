import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      {/* Тестовый контент для проверки */}
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Future Interface Hub</h1>
        <p className="text-lg">Сайт загружается...</p>
      </div>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
