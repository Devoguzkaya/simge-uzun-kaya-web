'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "100%" }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a more "premium" feel
            }}
            style={{ width, willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
