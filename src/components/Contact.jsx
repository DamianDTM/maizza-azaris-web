import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="w-screen h-screen bg-primary flex items-center justify-center relative relative px-6">

            <div className="bg-background rounded-[3rem] p-10 md:p-20 max-w-4xl w-full shadow-2xl text-center relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-[100%]"></div>

                <h2 className="font-display text-4xl md:text-5xl text-primary mb-2 uppercase tracking-widest">Encuéntranos</h2>
                <h3 className="font-display text-2xl text-secondary mb-12 uppercase tracking-widest">Como:</h3>

                <div className="text-3xl font-bold text-secondary mb-8">
                    @azaris.pasteleria
                </div>

                <div className="flex justify-center gap-6 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm">
                            {/* Placeholder Social Icons */}
                            <span className="material-icons text-3xl">share</span>
                        </div>
                    ))}
                </div>

                <div className="inline-flex items-center gap-3 bg-secondary text-background px-8 py-4 rounded-full text-xl font-bold shadow-lg">
                    <span className="material-icons">whatsapp</span>
                    <span>921 636 936</span>
                </div>

                <p className="mt-12 text-secondary/60 text-xs">
                    *Los pedidos se hacen con al menos 1 día de anticipación*<br />
                    *Consulte stock del día de los Mini Antojos*
                </p>

                <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-4 right-8 text-accent cursor-pointer"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
