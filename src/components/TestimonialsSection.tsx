'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Ayşe T.",
        role: "Anne",
        text: "Simge Hanım sayesinde çocuğumuzun korkularıyla nasıl baş edeceğimizi öğrendik. Odaya her hafta heyecanla gidiyoruz.",
        rating: 5
    },
    {
        name: "Murat B.",
        role: "Baba",
        text: "Moxo testi ve sonrasındaki Attentioner programı sayesinde oğlumuzun okul başarısı ve odaklanması gözle görülür arttı.",
        rating: 5
    },
    {
        name: "Zeynep K.",
        role: "Ebeveyn",
        text: "Deneyimsel oyun terapisi süreci bizim için dönüm noktası oldu. Simge Hanım'ın naif ve uzman yaklaşımı güven verici.",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-stone-900" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">Danışanlarımızın Deneyimleri</h2>
                    <p className="text-lg text-text-muted/80 dark:text-stone-400">Ailelerimizin yolculuklarından küçük kesitler.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-orange-50/50 dark:bg-stone-800 p-8 rounded-3xl border border-orange-100 dark:border-stone-700 relative"
                        >
                            <div className="flex gap-1 mb-4 text-accent-yellow">
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined fill-1">star</span>
                                ))}
                            </div>
                            <p className="text-text-main dark:text-stone-300 italic mb-6 leading-relaxed">
                                &quot;{item.text}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-text-main dark:text-white">{item.name}</p>
                                <p className="text-sm text-text-muted/70">{item.role}</p>
                            </div>
                            <div className="absolute top-8 right-8 opacity-10">
                                <span className="material-symbols-outlined text-6xl">format_quote</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
