import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
