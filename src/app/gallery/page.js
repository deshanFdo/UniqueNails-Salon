'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Lightbox from '@/components/Lightbox';

export default function GalleryPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';
    const instagramHandle = instagramUrl.split('/').pop() || 'uniquenails';

    const galleryImages = [
        { src: '/images/gallery/nail-1.jpg', alt: 'Minimal French tips', category: 'Classic' },
        { src: '/images/gallery/nail-2.jpg', alt: 'Soft nude set', category: 'Classic' },
        { src: '/images/gallery/nail-3.jpg', alt: 'Rose gold chrome', category: 'Art' },
        { src: '/images/gallery/nail-4.jpg', alt: 'Clean girl aesthetic', category: 'Classic' },
        { src: '/images/gallery/nail-5.jpg', alt: 'Crystal gems', category: 'Glam' },
        { src: '/images/gallery/nail-6.jpg', alt: 'Black & gold', category: 'Glam' },
        { src: '/images/gallery/nail-7.jpg', alt: 'Ombré blush', category: 'Art' },
        { src: '/images/gallery/nail-8.jpg', alt: 'Champagne shimmer', category: 'Glam' },
        { src: '/images/gallery/nail-9.jpg', alt: 'Floral details', category: 'Art' },
        { src: '/images/gallery/nail-10.jpg', alt: 'Geometric lines', category: 'Art' },
        { src: '/images/gallery/nail-11.jpg', alt: 'Pearl accent', category: 'Classic' },
        { src: '/images/gallery/nail-12.jpg', alt: 'Glitter gradient', category: 'Glam' }
    ];

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);
    const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    const goToNext = () => setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

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
                            <span className="section-tag">Recent Work</span>
                            <h1>Nails I've Done</h1>
                            <div className="gold-line"></div>
                            <p>
                                A mix of everything—simple, fancy, colorful, minimal.
                                Something here might inspire your next set!
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Gallery Grid */}
            <section>
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <AnimateOnScroll key={index} animation="scale" delay={(index % 4) * 100}>
                                <div
                                    className="gallery-item"
                                    onClick={() => openLightbox(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                                    aria-label={`View ${image.alt}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={400}
                                        height={400}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <span>{image.alt}</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram CTA */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container text-center">
                    <AnimateOnScroll animation="fade-up">
                        <p className="section-tag">Want More?</p>
                        <h2 style={{ marginBottom: '20px' }}>Follow @{instagramHandle}</h2>
                        <p style={{
                            maxWidth: '550px',
                            margin: '0 auto 35px',
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem'
                        }}>
                            I post all my latest work there first. Plus some behind-the-scenes
                            and the occasional nail meme.
                        </p>
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Check it Out
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>

            <Lightbox
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onPrev={goToPrev}
                onNext={goToNext}
                currentImage={galleryImages[currentIndex]}
                currentIndex={currentIndex}
                totalImages={galleryImages.length}
            />
        </>
    );
}
