'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ServicesPage() {
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 77 123 4567';
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94771234567';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const phoneClean = phone.replace(/[^+\d]/g, '');

    const services = [
        {
            category: 'Manicure Services',
            items: [
                {
                    name: 'Classic Manicure',
                    description: 'A beautifully simple treatment—shaping, cuticle care, and your choice of polish for neat, polished nails.',
                    duration: '30 mins',
                    price: 'LKR 1,000'
                },
                {
                    name: 'Gel Manicure',
                    description: 'Long-lasting gel polish that stays chip-free and glossy for 2-3 weeks. Perfect for busy lifestyles.',
                    duration: '45 mins',
                    price: 'LKR 1,800'
                },
                {
                    name: 'Luxury Manicure',
                    description: 'The full experience—exfoliation, hydrating mask, relaxing massage, and a flawless gel finish. You deserve it.',
                    duration: '60 mins',
                    price: 'LKR 2,500'
                }
            ]
        },
        {
            category: 'Pedicure Services',
            items: [
                {
                    name: 'Classic Pedicure',
                    description: 'Complete foot care including a soothing soak, exfoliation, nail shaping, and polish for happy feet.',
                    duration: '40 mins',
                    price: 'LKR 1,500'
                },
                {
                    name: 'Gel Pedicure',
                    description: 'Everything in our classic pedicure, plus long-lasting gel polish. Walk out with perfectly polished toes.',
                    duration: '50 mins',
                    price: 'LKR 2,200'
                },
                {
                    name: 'Spa Pedicure',
                    description: 'Pure indulgence—extended soak, callus treatment, sugar scrub, hot towels, and a blissful leg massage.',
                    duration: '75 mins',
                    price: 'LKR 3,500'
                }
            ]
        },
        {
            category: 'Nail Art & Enhancements',
            items: [
                {
                    name: 'Accent Art',
                    description: 'Add a touch of artistry—French tips, delicate patterns, or subtle accents on select nails.',
                    duration: '+15 mins',
                    price: 'From LKR 300'
                },
                {
                    name: 'Custom Nail Art',
                    description: "Bring your vision to life! Share a photo or describe your dream design, and we'll create it with care.",
                    duration: '+30-45 mins',
                    price: 'From LKR 800'
                },
                {
                    name: 'Gel Extensions',
                    description: 'Professional soft gel extensions for beautiful length and strength. Gentle on your natural nails.',
                    duration: '90 mins',
                    price: 'From LKR 3,500'
                },
                {
                    name: 'Repair Service',
                    description: 'Broken or lifted nail? No worries—we can fix it and get your set looking perfect again.',
                    duration: '15 mins',
                    price: 'LKR 400'
                }
            ]
        }
    ];

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
                            <span className="section-tag">What We Offer</span>
                            <h1>Services & Pricing</h1>
                            <div className="gold-line"></div>
                            <p>
                                Clear pricing, no surprises. Every service includes our full attention and premium products.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Services */}
            {services.map((category, catIndex) => (
                <section
                    key={category.category}
                    style={{
                        background: catIndex % 2 === 1 ? 'var(--bg-secondary)' : 'var(--bg-primary)'
                    }}
                >
                    <div className="container">
                        <AnimateOnScroll animation="fade-up">
                            <div className="section-header">
                                <h2>{category.category}</h2>
                                <div className="gold-line"></div>
                            </div>
                        </AnimateOnScroll>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '25px',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            {category.items.map((service, index) => (
                                <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                    <div style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '16px',
                                        padding: '30px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(201, 162, 39, 0.12)';
                                            e.currentTarget.style.borderColor = 'var(--accent-gold-light)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '15px'
                                        }}>
                                            <h3 style={{
                                                fontSize: '1.25rem',
                                                color: 'var(--text-primary)',
                                                marginBottom: 0
                                            }}>
                                                {service.name}
                                            </h3>
                                            <span style={{
                                                color: 'var(--accent-gold)',
                                                fontWeight: '600',
                                                fontSize: '1.125rem',
                                                whiteSpace: 'nowrap',
                                                marginLeft: '15px'
                                            }}>
                                                {service.price}
                                            </span>
                                        </div>
                                        <p style={{
                                            color: 'var(--text-muted)',
                                            lineHeight: '1.6',
                                            flex: 1,
                                            marginBottom: '15px'
                                        }}>
                                            {service.description}
                                        </p>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--text-muted)',
                                            opacity: 0.7
                                        }}>
                                            ⏱ {service.duration}
                                        </span>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Notes */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <AnimateOnScroll animation="fade-up">
                            <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>Good to Know</h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                color: 'var(--text-muted)'
                            }}>
                                {[
                                    'These are base prices. Add-ons like nail art, gems, or specialty finishes are priced based on complexity.',
                                    'First-time gel extension appointments may take a bit longer as we customize the perfect fit for you.',
                                    "We appreciate 24 hours' notice if you need to cancel or reschedule—it helps us accommodate everyone.",
                                    "All appointments are private, one-on-one sessions. It's just you and us, no distractions."
                                ].map((note, i) => (
                                    <li key={i} style={{
                                        padding: '12px 0',
                                        borderBottom: '1px solid var(--border-color)',
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{ color: 'var(--accent-gold)' }}>•</span>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="container text-center">
                    <AnimateOnScroll animation="scale">
                        <h2 style={{ marginBottom: '20px' }}>Ready to Book?</h2>
                        <p style={{
                            maxWidth: '500px',
                            margin: '0 auto 35px',
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem'
                        }}>
                            We'd love to see you! Reach out on WhatsApp or give us a call to schedule your appointment.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                                WhatsApp
                            </a>
                            <a href={`tel:${phoneClean}`} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
