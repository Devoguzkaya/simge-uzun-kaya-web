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
        <section className="py-32 bg-[#FDFBF7] dark:bg-[#1A1A1A] overflow-hidden" id="testimonials">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
                        >
                            Yolculuklardan Kesitler
                        </motion.span>
                        <h2 className="text-5xl lg:text-7xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] leading-tight">
                            Ailelerimizin <br /> 
                            <span className="italic font-light">Deneyimleri.</span>
                        </h2>
                    </div>
                    <div className="lg:pb-4">
                        <p className="text-xl text-[#5C5C5C] dark:text-[#B0B0B0] max-w-sm font-light">
                            Güvenle paylaşılan her hikaye, bir başka çocuğun yoluna ışık tutar.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E8F3E9] dark:border-[#2D3A2E]">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-12 lg:p-16 flex flex-col justify-between min-h-[400px] border-r border-b last:border-r-0 border-[#E8F3E9] dark:border-[#2D3A2E] group hover:bg-[#E8F3E9]/20 dark:hover:bg-[#2D3A2E]/20 transition-colors"
                        >
                            <div className="mb-12">
                                <span className="inline-block px-4 py-1.5 rounded-full border border-[#D9C5A3] text-[#8B7355] text-[10px] font-bold uppercase tracking-wider mb-8">
                                    {item.tag}
                                </span>
                                <p className="text-2xl font-light leading-relaxed text-[#2C3E2D] dark:text-[#E8F3E9]">
                                    &ldquo;{item.text}&rdquo;
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-serif text-[#4A6741] dark:text-[#E8F3E9] mb-1">
                                    {item.service}
                                </h3>
                                <p className="text-xs uppercase tracking-widest text-[#8B7355] opacity-60 font-bold">
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
