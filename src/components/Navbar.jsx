import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            // Smooth scroll for horizontal layout
            element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="flex items-center justify-between w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-primary/5 rounded-full px-6 md:px-8 py-3 transition-all hover:bg-white/80">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="flex items-center gap-1 group"
                >
                    <h1 className="font-display text-2xl text-primary tracking-tight group-hover:scale-105 transition-transform">
                        aza<span className="font-script text-3xl ml-1">RiS</span>
                    </h1>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-secondary/80 text-sm">
                    {['Mini Antojos', 'Cuchareables', 'Kekes'].map((item, i) => {
                        const targetId = `#${item.toLowerCase().replace(' ', '-')}`;
                        return (
                            <a
                                key={i}
                                href={targetId}
                                onClick={(e) => handleNavClick(e, targetId)}
                                className="relative group hover:text-primary transition-colors py-1 cursor-pointer"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent/80 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        );
                    })}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="hover:text-primary transition-colors cursor-pointer"
                    >
                        Contacto
                    </a>
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-5 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all tracking-wide uppercase flex items-center gap-2"
                >
                    <span className="material-icons text-sm">shopping_bag</span>
                    <span className="hidden sm:inline">Pedir Ahora</span>
                </motion.button>
            </div>
        </motion.nav>
    );
}
