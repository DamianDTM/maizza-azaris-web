import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import { miniAntojos, cuchareables, kekes, galletas } from './data';

function App() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSections = 6; // Hero, Mini, Cucha, Kekes, Galletas, Contact

  // Update active index on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const handleScroll = () => {
        const index = Math.round(el.scrollLeft / window.innerWidth);
        setActiveIndex(index);
      };
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Horizontal scroll handler for mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        // Allow vertical scrolling inside product grids
        if (e.target.closest('.product-grid-scroll')) return;

        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };

      // Modern browsers require passive: false to preventDefault
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const scrollToIndex = (index) => {
    if (index >= 0 && index < totalSections) {
      scrollRef.current.scrollTo({
        left: window.innerWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Determine button color based on section background
  // Light Sections: 1 (Mini), 3 (Kekes)
  // Dark/Primary Sections: 0 (Hero), 2 (Cucha), 4 (Galletas), 5 (Contact)
  const isLightSection = [1, 3].includes(activeIndex);
  const arrowColor = isLightSection ? "text-primary hover:text-secondary" : "text-white/90 hover:text-white";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans">
      <Navbar />

      {/* Navigation Arrows (Desktop Mouse) */}
      {activeIndex > 0 && (
        <button
          onClick={() => scrollToIndex(activeIndex - 1)}
          className={`hidden md:block fixed top-1/2 left-2 z-50 -translate-y-1/2 p-2 transition-all hover:scale-125 active:scale-95 ${arrowColor} cursor-pointer select-none`}
          aria-label="Anterior"
        >
          <span className="material-icons text-[4rem] font-light drop-shadow-sm">chevron_left</span>
        </button>
      )}

      {activeIndex < totalSections - 1 && (
        <button
          onClick={() => scrollToIndex(activeIndex + 1)}
          className={`hidden md:block fixed top-1/2 right-2 z-50 -translate-y-1/2 p-2 transition-all hover:scale-125 active:scale-95 ${arrowColor} cursor-pointer select-none`}
          aria-label="Siguiente"
        >
          <span className="material-icons text-[4rem] font-light drop-shadow-sm">chevron_right</span>
        </button>
      )}

      <main
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory"
      >
        {/* Cover */}
        <div className="min-w-full h-full snap-start">
          <Hero />
        </div>

        {/* Section: Mini Antojos */}
        <div className="min-w-full h-full snap-start">
          <ProductSection
            id="mini-antojos"
            title="Mini Antojos"
            subtitle="Pequeños placeres"
            products={miniAntojos}
            theme="light"
          />
        </div>

        {/* Section: Cuchareables (Dark Theme for contrast) */}
        <div className="min-w-full h-full snap-start">
          <ProductSection
            id="cuchareables"
            title="Cuchareables"
            subtitle="Vasitos de 11 onzas"
            products={cuchareables}
            theme="dark"
          />
        </div>

        {/* Section: Kekes */}
        <div className="min-w-full h-full snap-start">
          <ProductSection
            id="kekes"
            title="Kekes"
            subtitle="Para compartir"
            products={kekes}
            theme="light"
          />
        </div>

        {/* Section: Galletas */}
        <div className="min-w-full h-full snap-start">
          <ProductSection
            id="galletas"
            title="Galletas"
            subtitle="Crocantes y duces"
            products={galletas}
            theme="dark"
          />
        </div>

        {/* Contact Footer */}
        <div className="min-w-full h-full snap-start">
          <Contact />
        </div>

      </main>
    </div>
  );
}

export default App;
