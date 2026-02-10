import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="w-screen h-screen bg-primary flex items-center justify-center relative relative px-6">

            <div className="bg-background rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 max-w-4xl w-full shadow-2xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 mx-4">

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-bl-[100%] pointer-events-none"></div>

                <h2 className="font-display text-3xl md:text-5xl text-primary mb-2 uppercase tracking-widest break-words">Encuéntranos</h2>
                <h3 className="font-display text-lg md:text-2xl text-secondary mb-8 md:mb-12 uppercase tracking-widest">Como:</h3>

                <div className="text-2xl md:text-3xl font-bold text-secondary mb-8 break-all">
                    @azaris.pasteleria
                </div>

                <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm">
                            {/* Placeholder Social Icons */}
                            <span className="material-icons text-xl md:text-3xl">share</span>
                        </div>
                    ))}
                </div>

                <motion.a
                    href="https://wa.me/51921636936"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex md:inline-flex items-center justify-between gap-4 bg-secondary text-background px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-lg max-w-full whitespace-nowrap mx-auto min-w-[280px] md:min-w-[320px]"
                >
                    <span className="material-icons text-xl md:text-2xl">chat</span>
                    <span className="text-center flex-grow">921 636 936</span>
                    <span className="material-icons text-xl md:text-2xl opacity-0">chat</span>
                </motion.a>

                <p className="mt-8 md:mt-12 text-secondary/60 text-[10px] md:text-xs leading-relaxed px-4">
                    *Los pedidos se hacen con al menos 1 día de anticipación*<br />
                    *Consulte stock del día de los Mini Antojos*
                </p>

                <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-2 right-2 md:bottom-4 md:right-8 text-accent cursor-pointer"
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="md:w-10 md:h-10">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
