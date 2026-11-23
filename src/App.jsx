import { useEffect } from "react";
import Lenis from "lenis";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Products from "./components/Products"; 
import WhyUs from "./components/WhyUs";       
import Expansion from "./components/Expansion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden cursor-none md:cursor-auto">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <WhyUs />
        <Expansion />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}