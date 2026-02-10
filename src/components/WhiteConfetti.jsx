import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function WhiteConfetti() {
    // Generate white confetti particles
    const confetti = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 3, // 3-7px
        opacity: Math.random() * 0.4 + 0.1,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
    })), []);

    return (
        <>
            {confetti.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-white rounded-[1px] pointer-events-none"
                    initial={{
                        top: particle.top,
                        left: particle.left,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        rotate: particle.rotation,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [particle.rotation, particle.rotation + 45, particle.rotation],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </>
    );
}
