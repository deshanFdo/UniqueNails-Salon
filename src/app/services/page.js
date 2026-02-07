'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
    const nailServices = [
        {
            title: 'Classic Manicure',
            description: 'A timeless treatment including nail shaping, cuticle care, hand massage, and polish application.',
            price: '$35',
            features: ['Nail shaping & filing', 'Cuticle treatment', 'Hand massage', 'Polish of choice']
        },
        {
            title: 'Gel Manicure',
            description: 'Long-lasting gel polish that stays flawless for weeks with a high-shine finish.',
            price: '$50',
            features: ['Gel polish application', 'Chip-resistant finish', 'UV curing', 'Up to 3 weeks wear']
        },
        {
            title: 'Luxury Spa Manicure',
            description: 'An indulgent experience featuring premium products, extended massage, and nourishing treatments.',
            price: '$70',
            features: ['Exfoliating scrub', 'Paraffin treatment', 'Extended massage', 'Premium polish']
        }
    ];

    const pedicureServices = [
        {
            title: 'Classic Pedicure',
            description: 'Essential foot care including nail trimming, callus removal, and a relaxing foot massage.',
            price: '$45',
            features: ['Nail shaping', 'Callus treatment', 'Foot massage', 'Polish application']
        },
        {
            title: 'Gel Pedicure',
            description: 'Combine foot pampering with long-lasting gel polish for beautiful, chip-free toes.',
            price: '$65',
            features: ['Full pedicure service', 'Gel polish finish', 'Extended wear', 'High-shine results']
        },
        {
            title: 'Royal Spa Pedicure',
            description: 'The ultimate foot spa experience with hot stone massage, mask, and premium treatments.',
            price: '$95',
            features: ['Hot stone massage', 'Hydrating mask', 'Paraffin treatment', 'Aromatherapy']
        }
    ];

    const nailArtServices = [
        {
            title: 'Signature Nail Art',
            description: 'Custom-designed nail art created by our master artists to reflect your unique style.',
            price: '$65+',
            features: ['Custom designs', 'Hand-painted art', 'Crystals & gems', 'Unlimited creativity']
        },
        {
            title: 'Gel Extensions',
            description: 'Build beautiful nail extensions with a natural look and exceptional durability.',
            price: '$85+',
            features: ['Custom length', 'Natural appearance', 'Strong & durable', 'No nail damage']
        },
        {
            title: 'Bridal Package',
            description: 'Exquisite nail designs for your special day, including a trial session.',
            price: '$150+',
            features: ['Consultation', 'Trial session', 'Wedding day service', 'Touch-up kit']
        }
    ];

    const manicureIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    );

    const pedicureIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );

    const nailArtIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    );

    return (
        <>
            {/* Page Header */}
            <section style={{
                paddingTop: '180px',
                paddingBottom: '80px',
                background: 'linear-gradient(180deg, var(--champagne) 0%, var(--bg-primary) 100%)'
            }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header" style={{ marginBottom: 0 }}>
                            <span className="section-tag">Our Services</span>
                            <h1>Luxurious Nail Care</h1>
                            <div className="gold-line"></div>
                            <p>
                                Discover our curated collection of premium nail treatments,
                                each crafted to deliver an unparalleled experience of luxury and relaxation.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Manicure Services */}
            <section>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Hand Care</span>
                            <h2>Manicure Services</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div className="services-grid">
                        {nailServices.map((service, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <ServiceCard
                                    icon={manicureIcon}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    features={service.features}
                                />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pedicure Services */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Foot Care</span>
                            <h2>Pedicure Services</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div className="services-grid">
                        {pedicureServices.map((service, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <ServiceCard
                                    icon={pedicureIcon}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    features={service.features}
                                />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nail Art Services */}
            <section>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Artistry</span>
                            <h2>Nail Art & Enhancements</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div className="services-grid">
                        {nailArtServices.map((service, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <ServiceCard
                                    icon={nailArtIcon}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    features={service.features}
                                />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimateOnScroll animation="scale">
                        <div className="text-center">
                            <h2 style={{ marginBottom: '20px' }}>Ready to Indulge?</h2>
                            <p style={{
                                maxWidth: '600px',
                                margin: '0 auto 40px',
                                color: 'var(--text-muted)',
                                fontSize: '1.125rem'
                            }}>
                                Book your appointment today and experience the finest nail care at Unique Nails.
                            </p>
                            <a href="/contact" className="btn btn-primary">
                                Book Your Visit
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
