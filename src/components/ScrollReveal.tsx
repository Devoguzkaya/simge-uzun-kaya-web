'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "100%" }: ScrollRevealProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ width, willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
