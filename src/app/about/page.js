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
                            <span className="section-tag">The Story</span>
                            <h1>Hey, I'm the one behind Unique Nails</h1>
                            <div className="gold-line"></div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* My Story */}
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
                                        <p style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Since 2020</p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-right">
                            <div className="about-content">
                                <span className="section-tag">A Little Background</span>
                                <h2>How This All Started</h2>
                                <p>
                                    So here's the thing—I never planned to do this full-time. I started doing
                                    nails for friends because, honestly, I was obsessed with getting my own nails
                                    done and wanted to learn the technique. Classic story, right?
                                </p>
                                <p>
                                    But then friends told friends, and those friends told other friends. My phone
                                    was blowing up, I was doing nails in my living room every weekend, and at some
                                    point I realized: wait, this is actually a thing. This could be MY thing.
                                </p>
                                <p>
                                    Fast forward to today—I've got my own cozy little setup, a solid rotation of
                                    clients who've become actual friends, and a job that doesn't feel like a job.
                                    Not bad for something that started as a hobby, huh?
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* What Makes Me Different */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="section-header">
                            <span className="section-tag">Real Talk</span>
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
                                title: 'I actually listen',
                                description: "You want something specific? Show me. You have no idea what you want? We'll figure it out together. No pressure, no judgment."
                            },
                            {
                                title: 'Spotlessly clean, always',
                                description: "I'm a bit paranoid about hygiene, honestly. Every tool is sterilized, every surface is wiped down. It's not negotiable."
                            },
                            {
                                title: 'Quality products only',
                                description: "I use brands I actually trust. If I wouldn't put it on my own nails, it's not touching yours. Simple as that."
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

            {/* The Honest Truth */}
            <section>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <AnimateOnScroll animation="fade-up">
                            <span className="section-tag">The Honest Truth</span>
                            <h2 style={{ marginBottom: '30px' }}>This isn't just a job for me</h2>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '20px'
                            }}>
                                I genuinely love what I do. There's something really satisfying about
                                watching someone look at their finished nails and go "oh my god, I love them."
                                That reaction? Never gets old.
                            </p>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '40px'
                            }}>
                                So if you're looking for a nail person who treats you like an actual
                                human being and not just appointment #47 of the day—hey, nice to meet you.
                                Let's make your nails look amazing.
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Let's Book Something
                            </Link>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </>
    );
}
