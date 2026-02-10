import React from 'react';
import { motion } from 'framer-motion';

// Icons for placeholders if no image provided
const PlaceholderIcon = () => (
    <div className="w-full h-48 bg-secondary/5 flex items-center justify-center text-secondary/20">
        <span className="material-icons text-4xl">cake</span>
    </div>
);

const ProductCard = ({ product }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col h-full border border-secondary/5 relative"
    >
        {/* Image Placeholder - In a real app we'd map real images */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
            {product.img ? (
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            ) : (
                <PlaceholderIcon />
            )}

            {/* Price Tag */}
            <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-md text-sm">
                {product.price}
            </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-display text-xl text-primary mb-2 uppercase tracking-wide">{product.name}</h3>
            <p className="text-secondary/70 text-sm mb-4 flex-grow font-sans leading-relaxed">
                {product.description}
            </p>

            <button className="w-full py-2 rounded-xl bg-background border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-wider">
                Agregar
            </button>
        </div>
    </motion.div>
);

export default function ProductSection({ id, title, subtitle, products, theme = "light" }) {
    const isDark = theme === "dark";
    const bgClass = isDark ? "bg-secondary text-background" : "bg-background text-secondary";
    const titleClass = isDark ? "text-accent" : "text-primary";

    return (
        <section id={id} className={`w-screen h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden ${bgClass}`}>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill={isDark ? "#E6A56C" : "#D65D6A"} d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71,34.5C59.8,46.1,48.7,55.7,36.4,62.8C24.1,69.9,10.7,74.5,-1.9,77.8C-14.5,81.1,-26.3,83.1,-37.1,77.2C-47.9,71.3,-57.7,57.5,-66.3,43.3C-74.9,29.1,-82.3,14.5,-80.7,0.9C-79.1,-12.7,-68.5,-25.4,-57.8,-36.4C-47.1,-47.4,-36.3,-56.7,-24.5,-65.3C-12.7,-73.9,0.1,-81.8,13.9,-83.4C27.7,-85,30.5,-79.3,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="z-10 w-full max-w-[1400px] mx-auto h-[85%] flex flex-col">
                <div className="mb-8">
                    {subtitle && <span className="font-script text-2xl opacity-80 block mb-2">{subtitle}</span>}
                    <h2 className={`font-display text-5xl md:text-7xl ${titleClass} inline-block relative`}>
                        {title}
                        {/* Underline Decor */}
                        <span className="absolute -bottom-2 left-0 w-1/2 h-2 bg-accent/30 rounded-full"></span>
                    </h2>
                </div>

                {/* Horizontal Scroll Area for Cards */}
                <div className="flex-grow overflow-x-auto overflow-y-hidden pb-8 flex gap-8 items-center px-4 snap-x pr-20">
                    {products.map((p, index) => (
                        <div key={index} className="snap-center h-full flex flex-col justify-center">
                            <ProductCard product={p} />
                        </div>
                    ))}

                    {/* View More Card */}
                    <div className="snap-center min-w-[200px] flex items-center justify-center">
                        <a href="#contact" className={`group flex flex-col items-center gap-4 ${isDark ? "text-white" : "text-secondary"}`}>
                            <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                <span className="material-icons text-3xl">arrow_forward</span>
                            </div>
                            <span className="font-bold tracking-widest uppercase text-sm">Ver Todo</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
