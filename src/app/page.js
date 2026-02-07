'use client';

import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <AnimateOnScroll animation="fade-up">
              <p className="hero-subtitle">Hey there, gorgeous</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1>Your nails deserve <span>better</span></h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p>
                Tired of rushed appointments and cookie-cutter designs?
                I get it. That's why I created a space where it's just you, me,
                and the time to get your nails exactly the way you want them.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Let's Do This
                </Link>
                <Link href="/gallery" className="btn btn-outline">
                  See My Work
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true"></div>
      </section>

      {/* What I Do */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">What I Do</span>
              <h2>More Than Just Pretty Nails</h2>
              <div className="gold-line"></div>
              <p>
                I don't just paint nails—I create mini works of art you can actually wear.
                Whether you want something subtle for the office or bold enough to stop traffic,
                I've got you covered.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="services-grid">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <h3>Custom Nail Art</h3>
                <p>Got an idea in your head? Show me a Pinterest board, describe it, or just let me surprise you. I love a creative challenge.</p>
                <div className="service-price">From ₹500</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3>Gel & Extensions</h3>
                <p>Want length? Strength? Both? My gel extensions last 3-4 weeks and won't wreck your natural nails. Promise.</p>
                <div className="service-price">From ₹800</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>The Full Treatment</h3>
                <p>Mani, pedi, the works. Sometimes you just need an hour to yourself. I'll handle the nails, you handle the relaxing.</p>
                <div className="service-price">From ₹1,200</div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-20" style={{ marginTop: '60px' }}>
              <Link href="/services" className="btn btn-outline">
                See All Services + Prices
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Preview */}
      <section>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Recent Work</span>
              <h2>Some Nails I'm Proud Of</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {[
              { gradient: 'linear-gradient(135deg, #faf8f5 0%, #e8d5c4 50%, #c9a227 100%)', label: 'Minimal French' },
              { gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #c9a227 100%)', label: 'Dark & Moody' },
              { gradient: 'linear-gradient(135deg, #e8d5c4 0%, #f7e7ce 50%, #fffff0 100%)', label: 'Soft Neutrals' }
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="scale" delay={(index + 1) * 100}>
                <div style={{
                  aspectRatio: '4/3',
                  background: item.gradient,
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    color: index === 1 ? '#f5f5f5' : '#1a1a1a',
                    textShadow: index === 1 ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
                  }}>
                    {item.label}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link href="/gallery" className="btn btn-outline">
                Browse Full Gallery
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Me */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <AnimateOnScroll animation="fade-left">
              <div className="about-image">
                <div style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  background: 'linear-gradient(135deg, var(--champagne) 0%, var(--nude) 50%, var(--accent-gold-light) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    textAlign: 'center',
                    color: 'var(--accent-gold-dark)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5} style={{ marginBottom: '20px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <p style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>One Client at a Time</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-right">
              <div className="about-content">
                <span className="section-tag">Why Book With Me</span>
                <h2>No Rush. No Crowds. Just Us.</h2>
                <p>
                  Look, I used to work at busy salons where you were just another appointment.
                  10 minutes here, 15 there—barely enough time to dry. That's not how I work.
                </p>
                <p>
                  When you book with me, you get my full attention. No one's waiting behind you,
                  no one's rushing you out. We can chat, we can sit in comfortable silence,
                  or you can scroll through your phone while I work my magic. Your call.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>One-on-one sessions</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quality products only</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Spotlessly clean</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Actually listens to you</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Real Talk</span>
              <h2>What My Clients Say</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div className="testimonials-slider">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Finally found someone who actually takes their time! My nails have never lasted this long.
                  Plus we always end up having the best conversations.
                </p>
                <div className="testimonial-author">Priya M.</div>
                <div className="testimonial-role">Regular since 2023</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  I showed her a super complicated design from Pinterest and she nailed it (pun intended).
                  Other places said it couldn't be done. She made it look easy.
                </p>
                <div className="testimonial-author">Sneha K.</div>
                <div className="testimonial-role">Nail Art Lover</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  The vibe is so chill and the space is super clean. I always leave feeling relaxed.
                  It's like therapy but you get pretty nails at the end.
                </p>
                <div className="testimonial-author">Ananya R.</div>
                <div className="testimonial-role">Monthly Mani Club</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
        padding: '100px 0'
      }}>
        <div className="container text-center">
          <AnimateOnScroll animation="scale">
            <h2 style={{ color: '#0a0a0a', marginBottom: '20px' }}>
              Ready to treat yourself?
            </h2>
            <p style={{
              color: '#1a1a1a',
              maxWidth: '600px',
              margin: '0 auto 40px',
              fontSize: '1.125rem'
            }}>
              Your next favorite nail look is just a booking away.
              DM me, WhatsApp me, or book right here. Whatever's easiest for you.
            </p>
            <Link href="/contact" className="btn" style={{
              background: '#0a0a0a',
              color: 'var(--accent-gold)'
            }}>
              Book Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
