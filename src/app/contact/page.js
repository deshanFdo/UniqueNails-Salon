'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ContactPage() {
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 77 123 4567';
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94771234567';
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@uniquenails.lk';
    const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || '123 Example Road';
    const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || 'Colombo 05, Sri Lanka';
    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/uniquenails';

    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const phoneClean = phone.replace(/[^+\d]/g, '');

    const cardStyle = {
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'block'
    };

    const handleHoverIn = (e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(201, 162, 39, 0.15)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
    };

    const handleHoverOut = (e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
    };

    return (
        <>
            {/* Hero Header */}
            <section style={{
                paddingTop: '160px',
                paddingBottom: '60px',
                background: 'linear-gradient(180deg, var(--champagne) 0%, var(--bg-primary) 100%)'
            }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header" style={{ marginBottom: 0 }}>
                            <span className="section-tag">Get in Touch</span>
                            <h1>We'd Love to Hear from You</h1>
                            <div className="gold-line"></div>
                            <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                                Ready to book your appointment? Have a question? Reach out anytime—we typically respond within an hour!
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Main Contact Cards */}
            <section>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {/* WhatsApp Card */}
                        <AnimateOnScroll animation="fade-up" delay={100}>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...cardStyle, background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', border: 'none' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 211, 102, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 24 24" style={{ marginBottom: '20px' }}>
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                                <h3 style={{ color: 'white', marginBottom: '8px', fontSize: '1.5rem' }}>WhatsApp</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>Quickest way to reach us!</p>
                            </a>
                        </AnimateOnScroll>

                        {/* Call Card */}
                        <AnimateOnScroll animation="fade-up" delay={200}>
                            <a
                                href={`tel:${phoneClean}`}
                                style={cardStyle}
                                onMouseEnter={handleHoverIn}
                                onMouseLeave={handleHoverOut}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.5rem' }}>Call Us</h3>
                                <p style={{ color: 'var(--accent-gold)', fontWeight: '600', marginBottom: 0 }}>{phone}</p>
                            </a>
                        </AnimateOnScroll>

                        {/* Instagram Card */}
                        <AnimateOnScroll animation="fade-up" delay={300}>
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...cardStyle, background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)', border: 'none' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(131, 58, 180, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 24 24" style={{ marginBottom: '20px' }}>
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <h3 style={{ color: 'white', marginBottom: '8px', fontSize: '1.5rem' }}>Instagram</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>See our latest work!</p>
                            </a>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '50px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {/* Location */}
                        <AnimateOnScroll animation="fade-up" delay={100}>
                            <div style={{
                                background: 'var(--bg-card)',
                                borderRadius: '20px',
                                padding: '40px',
                                textAlign: 'center'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h3 style={{ marginBottom: '15px' }}>Find Us</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                    {addressLine1}<br />
                                    {addressLine2}
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '15px', fontStyle: 'italic' }}>
                                    Private home studio • Parking available
                                </p>
                            </div>
                        </AnimateOnScroll>

                        {/* Hours */}
                        <AnimateOnScroll animation="fade-up" delay={200}>
                            <div style={{
                                background: 'var(--bg-card)',
                                borderRadius: '20px',
                                padding: '40px',
                                textAlign: 'center'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 style={{ marginBottom: '15px' }}>Hours</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
                                    <p style={{ marginBottom: '5px' }}><strong>Mon - Fri:</strong> 10am - 7pm</p>
                                    <p style={{ marginBottom: '5px' }}><strong>Saturday:</strong> 9am - 5pm</p>
                                    <p style={{ marginBottom: 0 }}><strong>Sunday:</strong> By appointment</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Questions?</span>
                            <h2>Before You Book</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        {[
                            {
                                q: 'How far ahead should I book?',
                                a: "A few days' notice is usually fine for weekdays. Weekends fill up faster, so try to book a week ahead if you can!"
                            },
                            {
                                q: 'What if I need to cancel?',
                                a: "Life happens! We just ask for 24 hours' notice so we can offer the slot to someone else. No stress."
                            },
                            {
                                q: 'Do you take walk-ins?',
                                a: "We work by appointment only—it's how we keep things relaxed and give you our full attention. Just send us a message and we'll find a time!"
                            }
                        ].map((faq, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '16px',
                                    padding: '30px',
                                    marginBottom: '20px',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '10px', fontSize: '1.1rem' }}>{faq.q}</h4>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.7' }}>{faq.a}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: 'linear-gradient(135deg, var(--champagne) 0%, var(--nude) 100%)' }}>
                <div className="container text-center">
                    <AnimateOnScroll animation="scale">
                        <h2 style={{ marginBottom: '20px' }}>Ready for Beautiful Nails?</h2>
                        <p style={{ maxWidth: '450px', margin: '0 auto 35px', color: 'var(--text-secondary)' }}>
                            We can't wait to meet you! Book your appointment and let's create something beautiful.
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                            </svg>
                            Book on WhatsApp
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
