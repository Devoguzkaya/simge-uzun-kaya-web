'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Oyun terapisi kaç seans sürer?",
        answer: "Oyun terapisi süreci her çocuğun ihtiyacına ve getirdiği konuya göre değişiklik gösterir. Genellikle 12-20 seans arasında belirgin bir değişim gözlemlenirken, bazen daha kısa veya uzun sürebilir."
    },
    {
        question: "İlk görüşmeye çocuk gelmeli midir?",
        answer: "İlk görüşme genellikle ebeveynlerle (çocuk olmadan) yapılır. Bu görüşmede çocuğun gelişim öyküsü alınır ve ailenin hedefleri belirlenir."
    },
    {
        question: "Seansların sıklığı nasıl olmalıdır?",
        answer: "Terapötik sürecin verimliliği için seansların haftada bir, aynı gün ve saatte yapılması önerilir. Süreç sonuna doğru seans aralıkları kademeli olarak açılır."
    },
    {
        question: "Moxo Dikkat Testi hangi yaşlar içindir?",
        answer: "Moxo testi 6-12 yaş arası çocuklar ve 13-70 yaş arası yetişkinler için iki ayrı formda uygulanabilir."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-orange-50/30 dark:bg-stone-900/30" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">Sıkça Sorulan Sorular</h2>
                    <p className="text-lg text-text-muted/80 dark:text-stone-400">Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-stone-800 rounded-2xl border border-orange-100 dark:border-stone-700 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-bold text-text-main dark:text-white text-lg">{faq.question}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 text-text-muted/90 dark:text-stone-300 leading-relaxed border-t border-orange-50 dark:border-stone-700 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
