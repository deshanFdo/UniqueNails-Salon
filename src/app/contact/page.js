'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ContactPage() {
    // Get all config from env
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 77 123 4567';
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@uniquenails.lk';
    const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || 'My Studio';
    const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || 'Colombo, Sri Lanka';

    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94771234567';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    const hoursWeekday = process.env.NEXT_PUBLIC_HOURS_WEEKDAY || 'Mon – Fri: 10AM – 7PM';
    const hoursSaturday = process.env.NEXT_PUBLIC_HOURS_SATURDAY || 'Sat: 10AM – 6PM';
    const hoursSunday = process.env.NEXT_PUBLIC_HOURS_SUNDAY || 'Sun: Closed';

    const phoneClean = phone.replace(/[^+\d]/g, '');

    return (
        <>
            {/* Header */}
            <section style={{
                paddingTop: '180px',
                paddingBottom: '80px',
                background: 'linear-gradient(180deg, var(--champagne) 0%, var(--bg-primary) 100%)'
            }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header" style={{ marginBottom: 0 }}>
                            <span className="section-tag">Let's Connect</span>
                            <h1>Book Your Appointment</h1>
                            <div className="gold-line"></div>
                            <p>
                                Ready for gorgeous nails? Just give me a call or drop me a WhatsApp message!
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Main Booking Section */}
            <section>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <AnimateOnScroll animation="fade-up">
                            <h2 style={{ marginBottom: '20px' }}>How to Book</h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
                                I keep things simple—no complicated online booking systems. Just message me on WhatsApp
                                or give me a call and we'll find a time that works for you!
                            </p>

                            {/* Big Action Buttons */}
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '40px 50px',
                                        background: 'var(--bg-card)',
                                        border: '2px solid var(--accent-gold)',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        minWidth: '200px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--accent-gold)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--bg-card)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="var(--accent-gold)" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                    </svg>
                                    <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>WhatsApp</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Fastest response!</span>
                                </a>

                                <a
                                    href={`tel:${phoneClean}`}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '40px 50px',
                                        background: 'var(--bg-card)',
                                        border: '2px solid var(--border-color)',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        minWidth: '200px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-gold)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--accent-gold)">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Call Me</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{phone}</span>
                                </a>

                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '40px 50px',
                                        background: 'var(--bg-card)',
                                        border: '2px solid var(--border-color)',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        minWidth: '200px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-gold)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="var(--accent-gold)" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Instagram</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>DM me there too!</span>
                                </a>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <AnimateOnScroll animation="fade-up" delay={100}>
                            <div style={{ textAlign: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h3 style={{ marginBottom: '10px' }}>Location</h3>
                                <p style={{ color: 'var(--text-muted)' }}>
                                    {addressLine1}<br />
                                    {addressLine2}
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={200}>
                            <div style={{ textAlign: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 style={{ marginBottom: '10px' }}>Hours</h3>
                                <p style={{ color: 'var(--text-muted)' }}>
                                    {hoursWeekday}<br />
                                    {hoursSaturday}<br />
                                    <strong>{hoursSunday}</strong>
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={300}>
                            <div style={{ textAlign: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--accent-gold)" style={{ marginBottom: '20px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <h3 style={{ marginBottom: '10px' }}>Email</h3>
                                <p style={{ color: 'var(--text-muted)' }}>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Quick Answers</span>
                            <h2>Stuff People Ask</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { q: 'How far ahead should I book?', a: 'A few days is ideal, especially for weekends. But I sometimes have last-minute openings—just ask!' },
                            { q: 'What if I need to cancel?', a: 'Stuff happens! Just let me know a day before if you can so I can offer the slot to someone else.' },
                            { q: 'Can I bring inspo pics?', a: 'Please do! Screenshot that Pinterest board, save that reel. The more reference, the better.' },
                            { q: 'Cash or card?', a: 'Both work! Cash is preferred but I can also accept bank transfers.' }
                        ].map((faq, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '25px' }}>
                                    <h4 style={{ marginBottom: '12px', color: 'var(--accent-gold)', fontSize: '1.1rem' }}>{faq.q}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{faq.a}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
