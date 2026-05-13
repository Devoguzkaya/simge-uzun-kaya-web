import { servicesData } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Optional: for static export
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return { title: 'Hizmet Bulunamadı' };
    return {
        title: `${service.title} | Simge Uzun Kaya`,
        description: service.shortDesc,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="bg-ivory dark:bg-background-dark min-h-screen text-pine dark:text-ivory">

                {/* Detail Hero Section */}
                <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
                    {/* Background Decorative Blob */}
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-terracotta/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">

                            {/* Text Side */}
                            <div className="flex flex-col items-start max-w-2xl">
                                <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-8 hover:opacity-70 transition-opacity">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                    Tüm Hizmetlerimize Dön
                                </Link>

                                <h1 className="text-5xl lg:text-6xl font-serif text-pine dark:text-ivory leading-[1.1] mb-6">
                                    {service.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                                    <span className="italic font-light text-accent-terracotta">{service.title.split(' ').slice(-1)}</span>
                                </h1>

                                <p className="text-xl lg:text-2xl text-pine/70 dark:text-ivory/70 font-light leading-relaxed mb-12">
                                    {service.shortDesc}
                                </p>

                                <div className="flex flex-col gap-3 w-full sm:w-max">
                                    <a
                                        href={siteConfig.links.esperaRandevu}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden bg-pine dark:bg-ivory text-ivory dark:text-pine px-10 py-5 rounded-full text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] text-center"
                                    >
                                        <span className="relative z-10">Randevu Oluştur</span>
                                        <div className="absolute inset-0 bg-accent-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </a>
                                    <p className="text-[10px] text-pine/50 dark:text-ivory/50 text-center px-2">
                                        Randevu alarak <Link href="/kvkk" className="underline hover:text-pine dark:hover:text-ivory">KVKK</Link> ve <Link href="/privacy" className="underline hover:text-pine dark:hover:text-ivory">Gizlilik Politikasını</Link> kabul etmiş sayılırsınız.
                                    </p>
                                </div>
                            </div>

                            {/* Visual/Video Side */}
                            <div className="w-full relative aspect-[4/3] rounded-[48px] overflow-hidden bg-pine/5 dark:bg-ivory/5 border border-pine/10 dark:border-ivory/10 shadow-2xl">
                                {/* For this phase, we render the iframe directly if we want the user to play it without a state. Since it's a dedicated page, embedding the video is perfect. */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${service.videoId}`}
                                    title={service.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full object-cover z-20"
                                />
                                {/* Fallback image behind iframe just in case */}
                                <Image src={service.img} alt={service.title} fill className="object-cover z-10" />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Content Details: Long Description & Benefits */}
                <section className="py-24 bg-white dark:bg-pine/10 border-t border-pine/5 dark:border-ivory/5 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

                        <div className="flex flex-col gap-16">

                            {/* Long Description */}
                            <div>
                                <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                                    Yaklaşımımız
                                </span>
                                <p className="text-xl lg:text-2xl text-pine/80 dark:text-ivory/80 font-light leading-relaxed">
                                    <span className="text-6xl font-serif text-accent-terracotta float-left mr-4 mt-2 leading-[0.6]">{service.longDesc[0]}</span>
                                    {service.longDesc.substring(1)}
                                </p>
                            </div>

                            <div className="w-full h-px bg-pine/10 dark:bg-ivory/10" />

                            {/* Benefits */}
                            <div>
                                <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                                    Kazanımlar
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4 p-8 bg-pine/5 dark:bg-ivory/5 rounded-3xl border border-pine/10 dark:border-ivory/10 hover:border-accent-terracotta transition-colors">
                                            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-ivory dark:bg-pine text-accent-terracotta">
                                                <span className="material-symbols-outlined text-[18px]">check</span>
                                            </span>
                                            <p className="text-lg text-pine/80 dark:text-ivory/80 font-light leading-relaxed pt-1">
                                                {benefit}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Bottom CTA & Other Services */}
                <section className="py-24 bg-ivory dark:bg-background-dark relative overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

                        {/* Final CTA Strip */}
                        <div className="bg-pine dark:bg-ivory text-ivory dark:text-pine rounded-[40px] p-12 lg:p-20 text-center flex flex-col items-center mb-24 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-terracotta/20 rounded-full blur-[100px] pointer-events-none" />
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 relative z-10">
                                Birlikte Yeni Bir Başlangıç <span className="italic font-light text-accent-terracotta">Yapalım.</span>
                            </h2>
                            <p className="text-lg opacity-80 mb-10 max-w-2xl relative z-10">
                                {service.title} konusunda profesyonel destek almak ve soru işaretlerinizi gidermek için ilk adımı atın.
                            </p>
                            <a
                                href={siteConfig.links.esperaRandevu}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 px-10 py-4 bg-ivory dark:bg-pine text-pine dark:text-ivory rounded-full text-lg font-bold hover:scale-105 transition-transform mb-4"
                            >
                                Hemen Randevu Alın
                            </a>
                            <p className="relative z-10 text-xs text-ivory/60 dark:text-pine/60 text-center">
                                Randevu alarak <Link href="/kvkk" className="underline hover:text-ivory dark:hover:text-pine">KVKK Aydınlatma Metni</Link> ve <Link href="/privacy" className="underline hover:text-ivory dark:hover:text-pine">Gizlilik Politikasını</Link> kabul etmiş sayılırsınız.
                            </p>
                        </div>

                        {/* Other Services */}
                        <div>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                                <div>
                                    <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                                        Farklı İhtiyaçlar İçin
                                    </span>
                                    <h3 className="text-4xl font-serif text-pine dark:text-ivory">
                                        Diğer Hizmetlerimiz
                                    </h3>
                                </div>
                                <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-pine dark:text-ivory hover:text-accent-terracotta transition-colors pb-2 border-b border-pine/20 dark:border-ivory/20">
                                    Tümünü Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {servicesData
                                    .filter(s => s.id !== service.id)
                                    .slice(0, 3) // Sadece 3 farklı hizmet göster
                                    .map((otherService) => (
                                        <Link
                                            key={otherService.id}
                                            href={`/hizmetlerimiz/${otherService.slug}`}
                                            className="group block bg-white dark:bg-pine/5 rounded-[32px] p-8 border border-pine/5 dark:border-ivory/5 hover:border-accent-terracotta/50 transition-colors"
                                        >
                                            <span className="text-4xl font-serif text-pine/10 dark:text-ivory/10 font-bold mb-4 block">
                                                {otherService.id}
                                            </span>
                                            <h4 className="text-2xl font-serif text-pine dark:text-ivory mb-4 group-hover:text-accent-terracotta transition-colors">
                                                {otherService.title}
                                            </h4>
                                            <p className="text-pine/60 dark:text-ivory/60 text-sm leading-relaxed line-clamp-3">
                                                {otherService.shortDesc}
                                            </p>
                                        </Link>
                                    ))}
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
