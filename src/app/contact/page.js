'use client';

import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CalendarBooking from '@/components/CalendarBooking';
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit } from '@/utils/security';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get all config from env
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98765 43210';
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@uniquenails.com';
    const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || 'My Studio';
    const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || 'Your City';

    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    const hoursWeekday = process.env.NEXT_PUBLIC_HOURS_WEEKDAY || 'Mon – Fri: 10AM – 7PM';
    const hoursSaturday = process.env.NEXT_PUBLIC_HOURS_SATURDAY || 'Sat: 10AM – 6PM';
    const hoursSunday = process.env.NEXT_PUBLIC_HOURS_SUNDAY || 'Sun: Closed';

    const phoneClean = phone.replace(/[^+\d]/g, '');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const maxLengths = { name: 100, email: 100, phone: 20, service: 50, message: 500 };
        const maxLen = maxLengths[name] || 100;
        setFormData({ ...formData, [name]: value.slice(0, maxLen) });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!checkRateLimit('contact-form', 3, 60000)) {
            setError('Whoa, slow down! Try again in a minute.');
            return;
        }

        if (!formData.name.trim() || formData.name.trim().length < 2) {
            setError('What should I call you?');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError('That email doesn\'t look right...');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            setError('Need a valid phone number to confirm your booking!');
            return;
        }

        if (!formData.service) {
            setError('Pick a service! Or just say "not sure" in the message.');
            return;
        }

        if (!formData.date) {
            setError('When works for you?');
            return;
        }

        if (!formData.time) {
            setError('What time?');
            return;
        }

        setIsSubmitting(true);

        const sanitizedData = {
            name: sanitizeInput(formData.name.trim()),
            email: sanitizeInput(formData.email.trim().toLowerCase()),
            phone: sanitizeInput(formData.phone.trim()),
            service: sanitizeInput(formData.service),
            date: formData.date,
            time: formData.time,
            message: sanitizeInput(formData.message.trim())
        };

        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', sanitizedData);
        setSubmitted(true);
        setIsSubmitting(false);

        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    };

    const getMinDate = () => new Date().toISOString().split('T')[0];

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (selectedDate.getDay() === 0) {
            setError('Sorry, I\'m closed on Sundays! Pick another day?');
            return;
        }
        handleChange(e);
    };

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
                            <span className="section-tag">Let's Do This</span>
                            <h1>Book Your Appointment</h1>
                            <div className="gold-line"></div>
                            <p>
                                Got questions? Just wanna chat about nail ideas? I'm all ears.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Contact Section */}
            <section>
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <AnimateOnScroll animation="fade-left">
                            <div className="contact-info">
                                <h3>Get in Touch</h3>

                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div className="contact-item-content">
                                        <h4>Where I'm At</h4>
                                        <p>{addressLine1}<br />{addressLine2}</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <div className="contact-item-content">
                                        <h4>Call or Text</h4>
                                        <p><a href={`tel:${phoneClean}`}>{phone}</a></p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="contact-item-content">
                                        <h4>Hours</h4>
                                        <p>
                                            {hoursWeekday}<br />
                                            {hoursSaturday}<br />
                                            <strong>{hoursSunday}</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Buttons */}
                                <div style={{ marginTop: '30px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                        </svg>
                                        Instagram
                                    </a>
                                </div>

                                <div style={{ marginTop: '30px' }}>
                                    <CalendarBooking />
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Form */}
                        <AnimateOnScroll animation="fade-right">
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>Request a Slot</h3>

                                {submitted && (
                                    <div style={{ background: 'var(--accent-gold)', color: '#0a0a0a', padding: '15px 20px', marginBottom: '25px', textAlign: 'center', fontWeight: '500', borderRadius: '4px' }}>
                                        ✓ Got it! I'll text you to confirm.
                                    </div>
                                )}

                                {error && (
                                    <div style={{ background: '#ff4444', color: '#fff', padding: '15px 20px', marginBottom: '25px', textAlign: 'center', fontWeight: '500', borderRadius: '4px' }}>
                                        {error}
                                    </div>
                                )}

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="What should I call you?" maxLength={100} autoComplete="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone *</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" maxLength={20} autoComplete="tel" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" maxLength={100} autoComplete="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service">What are you after? *</label>
                                        <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                            <option value="">Pick one</option>
                                            <option value="basic-mani">Basic Mani</option>
                                            <option value="gel-mani">Gel Manicure</option>
                                            <option value="pamper-mani">Pamper Mani</option>
                                            <option value="basic-pedi">Basic Pedi</option>
                                            <option value="gel-pedi">Gel Pedicure</option>
                                            <option value="luxury-spa">Luxury Foot Spa</option>
                                            <option value="nail-art">Custom Nail Art</option>
                                            <option value="extensions">Gel Extensions</option>
                                            <option value="not-sure">Not sure yet</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="date">Preferred Date * <small>(Closed Sundays)</small></label>
                                        <input type="date" id="date" name="date" value={formData.date} onChange={handleDateChange} required min={getMinDate()} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">Preferred Time *</label>
                                        <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                                            <option value="">Pick a time</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Anything else?</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Design ideas, questions, or just say hi..." rows="3" maxLength={500}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Request'}
                                </button>

                                <p style={{ marginTop: '20px', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                    I'll get back to you within a few hours to confirm ✨
                                </p>
                            </form>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ background: 'var(--bg-secondary)' }}>
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
                            { q: 'What if I need to cancel?', a: 'Stuff happens! Just let me know 24 hours ahead if you can. Less than that might have a small fee.' },
                            { q: 'Can I bring inspo pics?', a: 'Please do! Screenshot that Pinterest board, save that reel. The more reference, the better.' },
                            { q: 'Walk-ins welcome?', a: 'Sometimes! If I\'m free, I\'ll squeeze you in. But booking ahead is your best bet to guarantee a spot.' }
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
