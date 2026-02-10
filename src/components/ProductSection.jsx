import React from 'react';
import { motion } from 'framer-motion';

// Icons for placeholders if no image provided
const PlaceholderIcon = () => (
    <div className="w-full h-full bg-secondary/5 flex items-center justify-center text-secondary/20">
        <span className="material-icons text-6xl">cake</span>
    </div>
);

const ProductCard = ({ product, index }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="w-full max-w-[340px] h-[480px] bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col relative group"
    >
        {/* Top Image Section (60%) */}
        <div className="h-[60%] relative bg-gray-50">
            {product.img ? (
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <PlaceholderIcon />
            )}

            {/* Seasonal Tag */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Seasonal</span>
            </div>

            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -bottom-6 left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/30 z-10"
            >
                <span className="material-icons text-2xl">add</span>
            </motion.button>
        </div>

        {/* Bottom Content Section */}
        <div className="flex-grow p-8 pt-10 flex flex-col relative bg-white">
            {/* Background Number */}
            <div className="absolute bottom-4 right-4 text-[8rem] leading-none font-display font-bold text-secondary/5 pointer-events-none select-none">
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className="flex justify-between items-start mb-2 relative z-10">
                <div>
                    <h3 className="font-display text-2xl text-secondary leading-tight">{product.name}</h3>
                    <span className="font-serif italic text-secondary/60 text-lg">Delicious</span>
                </div>
                <span className="font-display text-2xl text-secondary">{product.price}</span>
            </div>

            <div className="mt-auto relative z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-2">HAND-CRAFTED</span>
                <p className="text-secondary/70 text-sm font-sans line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
            </div>
        </div>
    </motion.div>
);

export default function ProductSection({ id, title, subtitle, products, theme = "light" }) {
    const isDark = theme === "dark";
    const bgClass = isDark ? "bg-secondary text-background" : "bg-background text-secondary";
    const titleClass = isDark ? "text-accent" : "text-primary";

    return (
        <section id={id} className={`w-screen min-h-[100svh] h-screen flex flex-col justify-center px-4 md:px-20 relative overflow-hidden ${bgClass}`}>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill={isDark ? "#E6A56C" : "#D65D6A"} d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71,34.5C59.8,46.1,48.7,55.7,36.4,62.8C24.1,69.9,10.7,74.5,-1.9,77.8C-14.5,81.1,-26.3,83.1,-37.1,77.2C-47.9,71.3,-57.7,57.5,-66.3,43.3C-74.9,29.1,-82.3,14.5,-80.7,0.9C-79.1,-12.7,-68.5,-25.4,-57.8,-36.4C-47.1,-47.4,-36.3,-56.7,-24.5,-65.3C-12.7,-73.9,0.1,-81.8,13.9,-83.4C27.7,-85,30.5,-79.3,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="z-10 w-full max-w-[1400px] mx-auto h-[85%] flex flex-col">
                <div className="mb-4 md:mb-8 pl-2 md:pl-4 flex flex-col md:flex-row md:items-baseline md:gap-6">
                    <h2 className={`font-display text-4xl md:text-7xl ${titleClass} inline-block relative leading-tight`}>
                        {title}
                        {/* Underline Decor */}
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-accent/30 rounded-full"></span>
                    </h2>
                    {subtitle && <span className="font-script text-2xl md:text-3xl opacity-80 mt-1 md:mt-0">{subtitle}</span>}
                </div>

                {/* Vertical Scroll Grid Area for Cards */}
                <div className="product-grid-scroll flex-grow overflow-y-auto overflow-x-hidden pb-12 px-0 md:px-4 no-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pb-20 max-w-[1200px] mx-auto">
                        {products.map((p, index) => (
                            <div key={index} className="flex justify-center">
                                <ProductCard product={p} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* View More Link (Bottom of Grid) */}
                    <div className="w-full flex justify-center mt-8 pb-8">
                        <a href="#contact" className={`group flex flex-col items-center gap-2 ${isDark ? "text-white" : "text-secondary"}`}>
                            <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                <span className="material-icons text-2xl">arrow_downward</span>
                            </div>
                            <span className="font-bold tracking-[0.2em] uppercase text-xs">Ver Más</span>
                        </a>
                    </div>
                </div>
            </div>


            {/* Scroll Indicator (Only shows if content likely overflows) */}
            {
                products.length > 3 && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none opacity-60 animate-bounce">
                        <span className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-accent' : 'text-primary'}`}>Desliza</span>
                        <span className={`material-icons text-sm ${isDark ? 'text-accent' : 'text-primary'}`}>keyboard_arrow_down</span>
                    </div>
                )
            }
        </section >
    );
}
