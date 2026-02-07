'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Lightbox({
    isOpen,
    onClose,
    onPrev,
    onNext,
    currentImage,
    currentIndex,
    totalImages
}) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onPrev, onNext]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !currentImage) return null;

    return (
        <div className={`lightbox ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <div style={{
                    position: 'relative',
                    width: '80vw',
                    height: '80vh',
                    maxWidth: '1000px'
                }}>
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        marginBottom: '5px'
                    }}>
                        {currentImage.alt}
                    </p>
                    <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                        {currentIndex + 1} / {totalImages}
                    </p>
                </div>
            </div>

            <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <button
                className="lightbox-nav"
                style={{ left: '20px' }}
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="lightbox-nav"
                style={{ right: '20px' }}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
