import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
