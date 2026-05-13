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
        <section className="py-12 lg:py-16 bg-transparent border-b border-pine/5 dark:border-ivory/5" id="faq">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left Side: Title */}
                    <div className="w-full lg:w-[40%]">
                        <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                            Rehberlik
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-serif text-pine dark:text-ivory leading-[1.1] mb-6">
                            Sıkça <br />
                            <span className="italic font-light text-accent-terracotta">Sorulanlar.</span>
                        </h2>
                        <p className="text-lg text-pine/70 dark:text-ivory/70 font-light leading-relaxed">
                            Sürecimiz hakkında merak ettiğiniz detaylar ve bilinmesi gerekenler.
                        </p>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="w-full lg:w-[60%] flex flex-col">
                        <div className="border-t border-pine/10 dark:border-ivory/10">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-pine/10 dark:border-ivory/10 group">
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full py-8 text-left flex items-start justify-between outline-none"
                                        aria-expanded={activeIndex === index}
                                    >
                                        <span className={`text-xl md:text-2xl font-serif transition-colors duration-500 leading-snug pr-8 ${activeIndex === index ? 'text-accent-terracotta' : 'text-pine dark:text-ivory group-hover:text-accent-terracotta/80'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'border-accent-terracotta bg-accent-terracotta text-pine' : 'border-pine/20 dark:border-ivory/20 text-pine dark:text-ivory group-hover:border-accent-terracotta group-hover:text-accent-terracotta'}`}>
                                            <span className={`material-symbols-outlined text-sm transition-transform duration-700 ${activeIndex === index ? 'rotate-180' : ''}`}>
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
                                                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pr-12 text-pine/70 dark:text-ivory/70 text-base lg:text-lg font-light leading-relaxed">
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
