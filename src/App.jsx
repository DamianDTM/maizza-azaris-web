import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import { miniAntojos, cuchareables, kekes, galletas } from './data';

function App() {
  const scrollRef = useRef(null);

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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans">
      <Navbar />

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
