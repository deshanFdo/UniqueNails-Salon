'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            category: 'Manicures',
            items: [
                {
                    name: 'Basic Mani',
                    description: 'Shape, buff, cuticle care, and a polish of your choice. Quick but thorough.',
                    duration: '30 mins',
                    price: '₹350'
                },
                {
                    name: 'Gel Manicure',
                    description: 'Same as basic but with gel polish that lasts 2-3 weeks without chipping. Game changer.',
                    duration: '45 mins',
                    price: '₹550'
                },
                {
                    name: 'Pamper Mani',
                    description: 'The full experience—soak, scrub, massage, mask, and gel polish. You deserve this.',
                    duration: '60 mins',
                    price: '₹800'
                }
            ]
        },
        {
            category: 'Pedicures',
            items: [
                {
                    name: 'Basic Pedi',
                    description: 'Foot soak, nail shaping, cuticle work, and polish. Your feet will thank you.',
                    duration: '40 mins',
                    price: '₹450'
                },
                {
                    name: 'Gel Pedicure',
                    description: 'The works plus gel polish. Sandal season ready.',
                    duration: '50 mins',
                    price: '₹650'
                },
                {
                    name: 'Luxury Foot Spa',
                    description: 'Extended soak, callus removal, sugar scrub, hot towels, leg massage, and gel finish. Bliss.',
                    duration: '75 mins',
                    price: '₹1,000'
                }
            ]
        },
        {
            category: 'Nail Art & Extras',
            items: [
                {
                    name: 'Simple Art',
                    description: 'Accent nails, French tips, minimal designs. Subtle but cute.',
                    duration: '+15 mins',
                    price: 'From ₹100'
                },
                {
                    name: 'Full Custom Art',
                    description: 'Go wild. Bring your Pinterest board, show me that Instagram reel. If I can see it, I can do it.',
                    duration: '+30-45 mins',
                    price: 'From ₹300'
                },
                {
                    name: 'Gel Extensions',
                    description: 'Need length? I use soft gel which is gentler on natural nails. Customizable shape and length.',
                    duration: '90 mins',
                    price: 'From ₹1,200'
                },
                {
                    name: 'Repair / Single Nail',
                    description: 'Broke a nail? I got you. Quick fix so your set looks fresh again.',
                    duration: '15 mins',
                    price: '₹150'
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
                            <span className="section-tag">What I Offer</span>
                            <h1>Services & Pricing</h1>
                            <div className="gold-line"></div>
                            <p>
                                Straight up, no hidden fees. What you see is what you pay.
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
                                        padding: '30px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
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
                                    'Prices are for service only. Add-ons like art, gems, or chrome finishes vary based on complexity.',
                                    'First-time gel extension appointments may take a bit longer—I like to get your shape just right.',
                                    'Running late? Just text me. Life happens, I get it.',
                                    'Cancellations within 24 hours may have a small fee. Please just let me know if plans change!'
                                ].map((note, i) => (
                                    <li key={i} style={{
                                        padding: '12px 0',
                                        borderBottom: '1px solid var(--border-color)',
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{ color: 'var(--accent-gold)' }}>→</span>
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
                        <h2 style={{ marginBottom: '20px' }}>Ready to book?</h2>
                        <p style={{
                            maxWidth: '500px',
                            margin: '0 auto 35px',
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem'
                        }}>
                            Pick a service (or don't—we can figure it out when you're here).
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Book Appointment
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
