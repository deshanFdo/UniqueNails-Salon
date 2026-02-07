'use client';

import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 77 123 4567';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94771234567';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const phoneClean = phone.replace(/[^+\d]/g, '');

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(135deg, var(--champagne) 0%, var(--nude) 30%, var(--accent-gold-light) 70%, var(--bg-primary) 100%)',
          opacity: 0.5
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <AnimateOnScroll animation="fade-up">
              <p className="hero-subtitle">Welcome to Unique Nails</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1>Beautiful Nails, <span>Personal Touch</span></h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p>
                Experience nail care the way it should be—unhurried, personalized, and focused entirely on you.
                Every appointment is a private session where your style takes center stage.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="hero-buttons">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Book on WhatsApp
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
        </div>
        <div className="hero-decoration" aria-hidden="true"></div>
      </section>

      {/* What We Do */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Our Services</span>
              <h2>Crafted with Care</h2>
              <div className="gold-line"></div>
              <p>
                From classic elegance to creative designs, we take pride in delivering beautiful results
                using premium products and techniques you can trust.
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
                <p>Share your inspiration—a Pinterest board, a photo, or just an idea—and we'll bring it to life with precision and creativity.</p>
                <div className="service-price">From LKR 1,500</div>
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
                <p>Looking for length or extra strength? Our professional gel extensions last beautifully for weeks while keeping your natural nails healthy.</p>
                <div className="service-price">From LKR 2,500</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Complete Packages</h3>
                <p>Treat yourself to the full experience—manicure, pedicure, and everything in between. Sometimes you deserve a little pampering.</p>
                <div className="service-price">From LKR 3,500</div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-20" style={{ marginTop: '60px' }}>
              <Link href="/services" className="btn btn-outline">
                View All Services
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
              <span className="section-tag">Our Work</span>
              <h2>Recent Creations</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
            {[1, 2, 3, 4].map((item) => (
              <AnimateOnScroll key={item} animation="zoom-in" delay={item * 100}>
                <div className="gallery-item" style={{
                  aspectRatio: '1',
                  background: `linear-gradient(${45 + item * 30}deg, var(--nude) 0%, var(--champagne) 50%, var(--accent-gold-light) 100%)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--accent-gold)" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="text-center" style={{ marginTop: '50px' }}>
              <Link href="/gallery" className="btn btn-primary">
                See More Work
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Preview */}
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
                    fontFamily: 'var(--font-display)'
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
                <span className="section-tag">Why Choose Us</span>
                <h2>Your Time, Your Space</h2>
                <p>
                  Here at Unique Nails, every appointment is a private, one-on-one experience.
                  No crowded salons, no rushing—just dedicated attention to creating nails you'll love.
                </p>
                <p>
                  We believe great nail care takes time and care. That's why we book one client at a time,
                  so you can relax, enjoy the process, and leave feeling truly pampered.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Private appointments</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Premium products</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Impeccable hygiene</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Personalized care</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Flexible scheduling</span>
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
              <span className="section-tag">Testimonials</span>
              <h2>What Our Clients Say</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div className="testimonials-slider">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Finally found a place where I don't feel rushed! The attention to detail is amazing, and my nails have never looked better.
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Ayesha M.</h4>
                    <span>Regular Client</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  The private setting makes such a difference. It's so relaxing, and the quality of work is consistently excellent.
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Samantha P.</h4>
                    <span>Loyal Client</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Best nail experience in Colombo. Professional, friendly, and the designs are always exactly what I wanted.
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Priya K.</h4>
                    <span>Happy Client</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--champagne) 0%, var(--nude) 100%)' }}>
        <div className="container text-center">
          <AnimateOnScroll animation="scale">
            <h2 style={{ marginBottom: '20px' }}>Ready for Beautiful Nails?</h2>
            <p style={{ maxWidth: '500px', margin: '0 auto 35px', color: 'var(--text-secondary)' }}>
              We'd love to welcome you to our studio. Book your appointment today and experience the difference.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
