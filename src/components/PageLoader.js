'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const minLoadTime = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 600);
        }, 1500);

        return () => clearTimeout(minLoadTime);
    }, []);

    if (!loading) return null;

    const loaderStyle = {
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible'
    };

    const logoTextStyle = {
        fontFamily: "'Playfair Display', serif",
        fontSize: '3rem',
        fontWeight: 600,
        color: '#f5f5f5',
        letterSpacing: '0.1em',
        display: 'block'
    };

    const logoAccentStyle = {
        fontFamily: "'Playfair Display', serif",
        fontSize: '2rem',
        fontWeight: 400,
        color: '#c9a227',
        letterSpacing: '0.3em',
        display: 'block',
        marginTop: '5px'
    };

    const spinnerStyle = {
        position: 'relative',
        width: '80px',
        height: '80px',
        margin: '40px auto 30px'
    };

    const ringBaseStyle = {
        position: 'absolute',
        borderRadius: '50%',
        border: '2px solid transparent',
        animation: 'spin 1.5s linear infinite'
    };

    const loaderTextStyle = {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1rem',
        color: '#888',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        animation: 'pulse 2s ease-in-out infinite'
    };

    return (
        <>
            <div style={loaderStyle}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <span style={logoTextStyle}>UNIQUE</span>
                        <span style={logoAccentStyle}>NAILS</span>
                    </div>
                    <div style={spinnerStyle}>
                        <div style={{
                            ...ringBaseStyle,
                            width: '100%',
                            height: '100%',
                            borderTopColor: '#c9a227'
                        }}></div>
                        <div style={{
                            ...ringBaseStyle,
                            width: '60px',
                            height: '60px',
                            top: '10px',
                            left: '10px',
                            borderTopColor: '#d4af37',
                            animationDuration: '1.2s',
                            animationDirection: 'reverse'
                        }}></div>
                        <div style={{
                            ...ringBaseStyle,
                            width: '40px',
                            height: '40px',
                            top: '20px',
                            left: '20px',
                            borderTopColor: '#e8c547',
                            animationDuration: '0.9s'
                        }}></div>
                    </div>
                    <p style={loaderTextStyle}>Loading luxury...</p>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}} />
        </>
    );
}
