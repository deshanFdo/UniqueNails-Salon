'use client';

import Link from 'next/link';

export default function Footer() {
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+94 77 123 4567';
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@uniquenails.lk';
    const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE1 || 'My Studio';
    const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE2 || 'Colombo, Sri Lanka';

    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
    const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94771234567';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    const hoursWeekday = process.env.NEXT_PUBLIC_HOURS_WEEKDAY || 'Mon–Fri: 10AM–7PM';
    const hoursSaturday = process.env.NEXT_PUBLIC_HOURS_SATURDAY || 'Sat: 10AM–6PM';
    const hoursSunday = process.env.NEXT_PUBLIC_HOURS_SUNDAY || 'Sun: Closed';

    const phoneClean = phone.replace(/[^+\d]/g, '');

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            UNIQUE<span>NAILS</span>
                        </Link>
                        <p>
                            Just me, my tools, and way too much nail polish.
                            Come hang out and leave with nails you'll want to show off.
                        </p>
                        <div className="social-links">
                            <a href={whatsappUrl} className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                            </a>
                            <a href={instagramUrl} className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href={facebookUrl} className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Pages</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Popular</h4>
                        <ul className="footer-links">
                            <li><Link href="/services">Gel Manicure</Link></li>
                            <li><Link href="/services">Nail Art</Link></li>
                            <li><Link href="/services">Extensions</Link></li>
                            <li><Link href="/services">Pedicure</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li>{addressLine1}</li>
                            <li>{addressLine2}</li>
                            <li style={{ marginTop: '12px' }}>
                                <a href={`tel:${phoneClean}`}>{phone}</a>
                            </li>
                            <li>
                                <a href={`mailto:${email}`}>{email}</a>
                            </li>
                            <li style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                {hoursWeekday}<br />
                                {hoursSaturday}<br />
                                {hoursSunday}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Unique Nails</p>
                    <p>Made with 💅</p>
                </div>
            </div>
        </footer>
    );
}
