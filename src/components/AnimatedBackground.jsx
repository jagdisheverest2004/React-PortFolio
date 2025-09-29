import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

function AnimatedBackground() {
    const backgroundRef = useRef(null);

    useEffect(() => {
        // Floating orbs animation
        animate({
            targets: '.floating-orb',
            translateY: [0, -100, 0],
            translateX: [0, 50, -30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.4, 0.6],
            duration: 8000,
            loop: true,
            easing: 'easeInOutSine',
            delay: stagger(1000)
        });

        // Grid lines animation
        animate({
            targets: '.grid-line',
            opacity: [0.1, 0.3, 0.1],
            strokeDashoffset: [0, 100],
            duration: 4000,
            loop: true,
            easing: 'easeInOutQuad',
            delay: stagger(200)
        });
    }, []);

    return (
        <div ref={backgroundRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animate-morphing-bg opacity-30" />
            
            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path 
                            className="grid-line"
                            d="M 60 0 L 0 0 0 60" 
                            fill="none" 
                            stroke="rgba(6, 182, 212, 0.1)" 
                            strokeWidth="1"
                            strokeDasharray="2,2"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Floating orbs */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="floating-orb absolute rounded-full blur-sm"
                    style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, ${
                            i % 2 === 0 
                                ? 'rgba(6, 182, 212, 0.3)' 
                                : 'rgba(139, 92, 246, 0.3)'
                        }, transparent)`,
                    }}
                />
            ))}

            {/* Geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-cyan-400/10 rotate-12 animate-bounce" />
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-purple-400/15 transform rotate-45 animate-pulse" />
            
            {/* Particles */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-particle-float opacity-40"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                />
            ))}
        </div>
    );
}

export default AnimatedBackground;