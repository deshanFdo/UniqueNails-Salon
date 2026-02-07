'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

export default function AboutPage() {
    const values = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            ),
            title: 'Excellence',
            description: 'I pursue perfection in every detail, from the precision of my techniques to the quality of products I use.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            ),
            title: 'Personal Care',
            description: 'Your comfort and satisfaction are at the heart of everything I do. Every guest receives my undivided attention.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
            ),
            title: 'Creativity',
            description: 'I continuously evolve, embracing the latest techniques and trends while honoring timeless elegance.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            title: 'Hygiene',
            description: 'I maintain the highest standards of cleanliness, ensuring a safe and serene environment for every client.'
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
                            <span className="section-tag">My Story</span>
                            <h1>About Unique Nails</h1>
                            <div className="gold-line"></div>
                            <p>
                                Where passion for beauty meets dedication to excellence.
                                Welcome to my little sanctuary of nail artistry.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Story Section */}
            <section>
                <div className="container">
                    <div className="about-grid">
                        <AnimateOnScroll animation="fade-left">
                            <div className="about-image">
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '4/5',
                                    background: 'linear-gradient(135deg, var(--nude) 0%, var(--champagne) 50%, var(--accent-gold-light) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        textAlign: 'center',
                                        color: 'var(--accent-gold-dark)',
                                        fontFamily: 'var(--font-display)'
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5} style={{ marginBottom: '20px' }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <p style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Est. 2020</p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-right">
                            <div className="about-content">
                                <span className="section-tag">Hello, I'm the Artist Behind Unique Nails</span>
                                <h2>My Journey</h2>
                                <p>
                                    What started as a passion project has blossomed into my dream business.
                                    I'm a solo nail artist who believes that every pair of hands tells a story,
                                    and I'm here to make that story beautiful.
                                </p>
                                <p>
                                    After years of perfecting my craft and working in various salons, I decided
                                    to create a space where I could give each client my complete, undivided attention.
                                    At Unique Nails, you're not just another appointment—you're my guest, and I take
                                    pride in making every visit feel special.
                                </p>
                                <p>
                                    I personally select every product, design every nail, and ensure that every
                                    detail meets my high standards. This is my passion, my art, and my way of
                                    helping you feel confident and beautiful.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">What I Stand For</span>
                            <h2>My Promise to You</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <div className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section>
                <div className="container text-center">
                    <AnimateOnScroll animation="scale">
                        <h2 style={{ marginBottom: '20px' }}>Let's Create Something Beautiful</h2>
                        <p style={{
                            maxWidth: '600px',
                            margin: '0 auto 40px',
                            color: 'var(--text-muted)',
                            fontSize: '1.125rem'
                        }}>
                            I'd love to meet you and help you express your unique style through beautiful nail art.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Book Your Appointment
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
