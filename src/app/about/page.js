'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';

export default function AboutPage() {
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
                            <span className="section-tag">About Us</span>
                            <h1>The Story Behind Unique Nails</h1>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Story */}
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
                                <span className="section-tag">Our Story</span>
                                <h2>It Started with a Passion</h2>
                                <p>
                                    Unique Nails began with a simple idea: nail care should be a relaxing,
                                    personal experience—not a rushed service in a crowded salon. What started
                                    as a passion for nail art grew into a dedicated studio serving wonderful
                                    clients across Colombo.
                                </p>
                                <p>
                                    Having worked in busy salons, we knew there had to be a better way.
                                    A way where every client gets the time and attention they deserve.
                                    That's why we created this space—a private studio where it's just you
                                    and us, focused entirely on making your nails beautiful.
                                </p>
                                <p>
                                    Today, we're proud to offer a boutique experience where quality,
                                    hygiene, and personalized care come first. Every visit feels special
                                    because to us, you're not just another appointment—you're a valued guest.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Our Promise</span>
                            <h2>What You Can Expect</h2>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {[
                            {
                                title: 'We Listen',
                                description: "Whether you have a clear vision or need some guidance, we take the time to understand exactly what you're looking for. Your ideas and preferences always come first."
                            },
                            {
                                title: 'Spotless & Safe',
                                description: "We take hygiene seriously. All tools are properly sterilized, surfaces are cleaned between clients, and we use only fresh, quality products. Your safety is non-negotiable."
                            },
                            {
                                title: 'Quality That Lasts',
                                description: "We use professional-grade products from trusted brands because we believe in delivering results that look beautiful and last. No shortcuts, ever."
                            }
                        ].map((item, index) => (
                            <AnimateOnScroll key={index} animation="fade-up" delay={(index + 1) * 100}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '16px',
                                    padding: '35px 30px',
                                    height: '100%',
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
                                    <h3 style={{
                                        color: 'var(--accent-gold)',
                                        marginBottom: '15px',
                                        fontSize: '1.25rem'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <AnimateOnScroll animation="fade-up">
                            <span className="section-tag">Our Belief</span>
                            <h2 style={{ marginBottom: '30px' }}>More Than Just Nails</h2>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '20px'
                            }}>
                                We believe nail care is about more than just looking good—it's about
                                taking a moment for yourself. A chance to relax, express your style,
                                and leave feeling confident and cared for.
                            </p>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '40px'
                            }}>
                                Whether you prefer classic elegance or love experimenting with bold designs,
                                we're here to bring your vision to life. We can't wait to meet you!
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Book Your Visit
                            </Link>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </>
    );
}
