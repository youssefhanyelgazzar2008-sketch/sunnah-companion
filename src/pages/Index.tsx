import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import SunnahAI from "@/components/landing/SunnahAI";
import Screenshots from "@/components/landing/Screenshots";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <SunnahAI />
        <Screenshots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
