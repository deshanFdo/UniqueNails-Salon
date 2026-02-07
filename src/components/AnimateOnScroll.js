'use client';

import { useEffect, useRef } from 'react';

export default function AnimateOnScroll({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 800,
    threshold = 0.1,
    once = true
}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Use requestAnimationFrame for smoother animations
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('in-view');
                    });
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    requestAnimationFrame(() => {
                        entry.target.classList.remove('in-view');
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, once]);

    const animationClass = {
        'fade-up': 'animate-fade-up',
        'fade-down': 'animate-fade-down',
        'fade-left': 'animate-fade-left',
        'fade-right': 'animate-fade-right',
        'scale': 'animate-scale',
        'blur': 'animate-blur',
    }[animation] || 'animate-fade-up';

    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`${animationClass} ${delayClass}`}
            style={{
                '--animation-duration': `${duration}ms`,
                willChange: 'transform, opacity',
            }}
        >
            {children}
        </div>
    );
}
