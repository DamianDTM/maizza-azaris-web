import React from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

export default function Hero() {
    return (
        <section id="hero" className="w-screen h-screen flex items-center justify-center relative overflow-hidden bg-primary text-background">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-accent/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[40vh] h-[40vh] bg-secondary/10 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3" />

            {/* Content */}
            <div className="text-center z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Sparkles Positioned absolutely relative to text */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-12 -left-12 text-accent"
                    >
                        <Sparkle className="w-12 h-12" />
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 0.8, 1], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                        className="absolute -bottom-8 -right-8 text-background/50"
                    >
                        <Sparkle className="w-8 h-8" />
                    </motion.div>

                    <h2 className="text-xl md:text-2xl font-sans tracking-[0.2em] font-bold mb-4 uppercase">Catálogo</h2>
                    <h2 className="text-xl md:text-2xl font-sans tracking-[0.2em] font-bold mb-2 uppercase">de Postres</h2>

                    <h1 className="font-display text-[5rem] md:text-[8rem] leading-[0.8] tracking-tighter mb-4 text-white">
                        aza<br />
                        <span className="font-script text-[6rem] md:text-[9rem] relative block transform -translate-y-4">
                            RiS
                        </span>
                    </h1>

                    <p className="font-script text-2xl md:text-4xl text-background/90 mt-4">pastelería</p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-background/80"
            >
                <span className="text-xs uppercase tracking-widest">Desliza</span>
                <span className="material-icons">arrow_forward</span>
            </motion.div>
        </section>
    );
}
