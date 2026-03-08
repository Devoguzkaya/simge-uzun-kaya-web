'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Oyun terapisi kaç seans sürer?",
        answer: "Oyun terapisi sabit bir seans sayısına bağlı değildir; çocuğun gelişimine göre planlanır. Süreç boyunca aile düzenli olarak bilgilendirilir ve ihtiyaçlar doğrultusunda ilerlenir."
    },
    {
        question: "İlk görüşmeye çocuk gelmeli midir?",
        answer: "İlk görüşmelerimiz doğrudan seans olarak başlar ve çocuğun yaşına, başvuru nedenine göre planlanır. Çoğu zaman ilk değerlendirme seansı ebeveynlerle yapılır ve çocuk için en uygun yol birlikte belirlenir."
    },
    {
        question: "Seansların sıklığı nasıl olmalıdır?",
        answer: "Terapötik sürecin verimliliği için seansların haftada bir, aynı gün ve saatte yapılması önerilir. Süreç sonuna doğru seans aralıkları kademeli olarak açılır."
    },
    {
        question: "Moxo Dikkat Testi kaç yaş için uygulanabilir?",
        answer: "Moxo Dikkat Testi 6-12 yaş arası çocuklar ve 13-65 yaş arası genç ve yetişkinlere uygulanmaktadır. Yaşa özel versiyonlara sahiptir."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-white dark:bg-[#1A1A1A]" id="faq">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Title */}
                    <div className="w-full lg:w-[40%]">
                        <span className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Rehberlik
                        </span>
                        <h2 className="text-5xl lg:text-7xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] leading-tight mb-6">
                            Sıkça <br />
                            <span className="italic font-light">Sorulanlar.</span>
                        </h2>
                        <p className="text-xl text-[#5C5C5C] dark:text-[#B0B0B0] font-light">
                            Sürecimiz hakkında merak ettiğiniz detaylar.
                        </p>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="w-full lg:w-[60%] flex flex-col">
                        <div className="border-t border-[#E8F3E9] dark:border-[#2D3A2E]">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-[#E8F3E9] dark:border-[#2D3A2E]">
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full py-8 text-left flex items-center justify-between group"
                                        aria-expanded={activeIndex === index}
                                    >
                                        <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${activeIndex === index ? 'text-[#4A6741] dark:text-[#E8F3E9]' : 'text-[#2C3E2D] dark:text-[#B0B0B0] group-hover:text-[#4A6741]'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'border-[#4A6741] bg-[#4A6741] text-white' : 'border-[#D9C5A3] text-[#8B7355] group-hover:border-[#4A6741] group-hover:text-[#4A6741]'}`}>
                                            <span className={`material-symbols-outlined text-sm transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                                add
                                            </span>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pr-12 text-[#5C5C5C] dark:text-[#B0B0B0] text-lg font-light leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
