'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Minimum loading time for smooth experience
        const minLoadTime = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 600);
        }, 1500);

        return () => clearTimeout(minLoadTime);
    }, []);

    if (!loading) return null;

    return (
        <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <span className="logo-text">UNIQUE</span>
                    <span className="logo-accent">NAILS</span>
                </div>
                <div className="loader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <p className="loader-text">Loading luxury...</p>
            </div>

            <style jsx>{`
        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }

        .page-loader.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loader-content {
          text-align: center;
        }

        .loader-logo {
          margin-bottom: 40px;
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 600;
          color: #f5f5f5;
          letter-spacing: 0.1em;
          display: block;
        }

        .logo-accent {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 400;
          color: #c9a227;
          letter-spacing: 0.3em;
          display: block;
          margin-top: 5px;
        }

        .loader-spinner {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 30px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-top-color: #c9a227;
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .spinner-ring:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 10px;
          left: 10px;
          border-top-color: #d4af37;
          animation-duration: 1.2s;
          animation-direction: reverse;
        }

        .spinner-ring:nth-child(3) {
          width: 40px;
          height: 40px;
          top: 20px;
          left: 20px;
          border-top-color: #e8c547;
          animation-duration: 0.9s;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: #888;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}
