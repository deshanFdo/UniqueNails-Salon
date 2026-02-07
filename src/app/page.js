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
              <p className="hero-subtitle">Welcome to Unique Nails</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1>Where <span>Elegance</span> Meets Artistry</h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p>
                Indulge in an exquisite nail care experience designed for the modern connoisseur.
                Our artisans craft perfection with every stroke, transforming your nails into
                masterpieces of beauty and sophistication.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true"></div>
      </section>

      {/* Featured Services Preview */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Our Expertise</span>
              <h2>Signature Services</h2>
              <div className="gold-line"></div>
              <p>
                Discover our curated collection of premium nail treatments,
                each crafted to deliver an unparalleled experience of luxury and relaxation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="services-grid">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3>Nail Artistry</h3>
                <p>Exquisite nail designs and custom artwork for those who demand the extraordinary.</p>
                <div className="service-price">From $65</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3>Luxury Manicure</h3>
                <p>A premium hand treatment combining relaxation with meticulous nail care.</p>
                <div className="service-price">From $45</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Spa Pedicure</h3>
                <p>An indulgent foot spa experience featuring premium products and techniques.</p>
                <div className="service-price">From $55</div>
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

      {/* Image Showcase Section */}
      <section>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Our Work</span>
              <h2>Crafted with Precision</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {[
              { gradient: 'linear-gradient(135deg, #faf8f5 0%, #e8d5c4 50%, #c9a227 100%)', label: 'French Tips' },
              { gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #c9a227 100%)', label: 'Noir & Gold' },
              { gradient: 'linear-gradient(135deg, #e8d5c4 0%, #f7e7ce 50%, #fffff0 100%)', label: 'Nude Elegance' }
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
                View Full Gallery
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
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
                    <p style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Luxury Experience</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-right">
              <div className="about-content">
                <span className="section-tag">Why Choose Us</span>
                <h2>A Sanctuary of Beauty & Refinement</h2>
                <p>
                  At Unique Nails, we believe that nail care is an art form. Our salon offers
                  more than just a service—it's an experience designed to rejuvenate your
                  spirit and elevate your style.
                </p>
                <p>
                  Every detail, from our curated product selection to our serene atmosphere,
                  has been thoughtfully crafted to provide you with moments of pure indulgence.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Premium Products</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Expert Artisans</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Hygienic Environment</span>
                  </div>
                  <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Personalized Care</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <div className="section-header">
              <span className="section-tag">Testimonials</span>
              <h2>Words from Our Cherished Guests</h2>
              <div className="gold-line"></div>
            </div>
          </AnimateOnScroll>

          <div className="testimonials-slider">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  An absolutely divine experience. The attention to detail and the luxurious
                  atmosphere made me feel like royalty. My nails have never looked better.
                </p>
                <div className="testimonial-author">Victoria M.</div>
                <div className="testimonial-role">Loyal Guest</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  The nail artists at Unique Nails are true masters of their craft. I've been to
                  salons worldwide, and this stands head and shoulders above the rest.
                </p>
                <div className="testimonial-author">Isabella K.</div>
                <div className="testimonial-role">Fashion Editor</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  From the moment I walked in, I knew this was special. The serene
                  ambiance and impeccable service create a truly unforgettable experience.
                </p>
                <div className="testimonial-author">Charlotte D.</div>
                <div className="testimonial-role">Entrepreneur</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
        padding: '100px 0'
      }}>
        <div className="container text-center">
          <AnimateOnScroll animation="scale">
            <h2 style={{ color: '#0a0a0a', marginBottom: '20px' }}>
              Ready to Experience Luxury?
            </h2>
            <p style={{
              color: '#1a1a1a',
              maxWidth: '600px',
              margin: '0 auto 40px',
              fontSize: '1.125rem'
            }}>
              Book your appointment today and discover why discerning clients
              choose Unique Nails for their nail care needs.
            </p>
            <Link href="/contact" className="btn" style={{
              background: '#0a0a0a',
              color: 'var(--accent-gold)'
            }}>
              Book Your Visit
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
