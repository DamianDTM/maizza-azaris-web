import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [activeSection, setActiveSection] = React.useState('');

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // threshold 0.5 means when 50% of the section is visible
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, threshold: 0.5 }
        );

        const sections = ['hero', 'mini-antojos', 'cuchareables', 'kekes', 'galletas', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { name: 'Mini Antojos', id: 'mini-antojos' },
        { name: 'Cuchareables', id: 'cuchareables' },
        { name: 'Kekes', id: 'kekes' },
        { name: 'Galletas', id: 'galletas' },
        { name: 'Contacto', id: 'contact' },
    ];

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
                <div className="hidden md:flex items-center gap-2 font-medium text-sm">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, `#${item.id}`)}
                                className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-secondary/80 hover:text-primary'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-primary/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        );
                    })}
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
