import React from 'react';
import { motion } from 'framer-motion';
import cocineraImg from '../assets/cocinera.webp';

const Sparkle = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

export default function Hero() {
    return (
        <section id="hero" className="w-full min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-primary text-background">
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

                    <h2 className="text-lg md:text-2xl font-sans tracking-[0.2em] font-bold mb-4 uppercase">Catálogo</h2>
                    <h2 className="text-lg md:text-2xl font-sans tracking-[0.2em] font-bold mb-2 uppercase">de Postres</h2>

                    <h1 className="font-display text-[3.5rem] md:text-[8rem] leading-[0.8] tracking-tighter mb-4 text-white">
                        aza<br />
                        <span className="font-script text-[4.5rem] md:text-[9rem] relative block transform -translate-y-4">
                            RiS
                        </span>
                    </h1>

                    <p className="font-script text-lg md:text-4xl text-background/90 mt-4">pastelería</p>
                </motion.div>
            </div>

            {/* Horizontal Scroll Indicator */}
            <motion.div
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-background/80"
            >
                <span className="text-xs uppercase tracking-widest">Desliza</span>
                <span className="material-icons rotate-0">arrow_forward</span>
            </motion.div>

            {/* Catering CTA - Cook Image */}
            <motion.a
                href="https://www.canva.com/design/DAG5b6ITAwA/KUgpmCUEFI3XdIiM_yRQ-Q/view?utlId=h9e0291eaad#1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                className="absolute bottom-0 right-4 md:right-10 z-20 flex flex-col items-end group cursor-pointer"
            >
                {/* Speech Bubble */}
                <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.1 } }}
                    className="mr-20 mb-0 translate-y-4 bg-white/90 backdrop-blur-md text-secondary px-4 py-3 rounded-2xl rounded-tr-sm shadow-xl max-w-[160px] md:max-w-[250px] relative transform origin-bottom-right transition-all duration-100"
                >
                    <p className="font-sans italic text-xs md:text-base leading-snug">
                        ¡También ofrecemos <strong>catering</strong> para tu día especial! ✨
                    </p>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white/90 backdrop-blur-md rotate-45 transform translate-x-1/2"></div>
                </motion.div>

                {/* Cook Image */}
                <img
                    src={cocineraImg}
                    alt="Nuestra Cocinera"
                    className="w-24 md:w-48 lg:w-56 object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                />
            </motion.a>
        </section>
    );
}
