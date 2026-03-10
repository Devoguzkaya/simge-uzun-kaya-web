'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        service: "Çocuk & Ergen Terapisi",
        text: "Simge Hanım sayesinde çocuğumuzun korkularıyla nasıl baş edeceğimizi öğrendik. Odaya her hafta heyecanla gidiyoruz.",
        tag: "Oyun Terapisi"
    },
    {
        service: "Dikkat Geliştirme (Moxo)",
        text: "Moxo testi ve sonrasındaki Attentioner programı sayesinde oğlumuzun okul başarısı ve odaklanması gözle görülür arttı.",
        tag: "Attentioner"
    },
    {
        service: "Ebeveyn Danışmanlığı",
        text: "Deneyimsel oyun terapisi süreci bizim için dönüm noktası oldu. Simge Hanım'ın naif ve uzman yaklaşımı güven verici.",
        tag: "Deneyimsel Oyun Terapisi"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-ivory dark:bg-background-dark overflow-hidden" id="testimonials">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 border-b border-pine/10 dark:border-ivory/10 pb-16">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block"
                        >
                            Yolculuklardan Kesitler
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-pine dark:text-ivory leading-[1.1]">
                            Ailelerimizin <br />
                            <span className="italic font-light text-accent-terracotta">Deneyimleri.</span>
                        </h2>
                    </div>
                    <div className="lg:pb-4 max-w-sm">
                        <p className="text-xl text-pine/70 dark:text-ivory/70 font-light leading-relaxed">
                            Güvenle paylaşılan her hikaye, bir başka çocuğun yoluna ışık tutar.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 lg:p-14 flex flex-col justify-between min-h-[450px] bg-white dark:bg-pine/20 rounded-[40px] border border-pine/5 dark:border-ivory/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative"
                        >
                            <span className="absolute -top-6 -left-2 text-[150px] font-serif text-accent-terracotta/10 opacity-50 select-none leading-none">"</span>
                            <div className="mb-12 relative z-10">
                                <span className="inline-block px-5 py-2 rounded-full border border-accent-terracotta/30 text-accent-terracotta text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                                    {item.tag}
                                </span>
                                <p className="text-2xl font-serif font-light leading-relaxed text-pine dark:text-ivory">
                                    {item.text}
                                </p>
                            </div>
                            <div className="border-t border-pine/10 dark:border-ivory/10 pt-8 mt-auto relative z-10">
                                <h3 className="text-xl font-serif text-accent-terracotta mb-2">
                                    {item.service}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-pine/50 dark:text-ivory/50 font-bold">
                                    Danışan Geri Bildirimi
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
