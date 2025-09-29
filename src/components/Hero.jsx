import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

function Hero({isDarkMode, scrollToSection, homeRef, displayText}) {
    const heroTextRef = useRef(null);
    const particlesRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        // Simple letter animation for the main title
        if (heroTextRef.current) {
            const textWrapper = heroTextRef.current;
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            // Simple staggered animation without timeline
            setTimeout(() => {
                animate({
                    targets: '.letter',
                    scale: [0.3, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: stagger(70)
                });
            }, 300);
        }

        // Floating particles animation
        if (particlesRef.current) {
            animate({
                targets: '.particle',
                translateY: [-20, 20],
                translateX: [-10, 10],
                rotate: [0, 360],
                scale: [0.8, 1.2],
                opacity: [0.3, 0.8],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: stagger(200)
            });
        }

        // Background gradient animation
        if (backgroundRef.current) {
            animate({
                targets: backgroundRef.current,
                background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
                    'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))'
                ],
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutQuad'
            });
        }
    }, []);

    return(
        <section id="home" ref={homeRef} className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
            {/* Animated Background */}
            <div 
                ref={backgroundRef}
                className="absolute inset-0 opacity-50"
                style={{
                    background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))'
                }}
            />
            
            {/* Floating Particles */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-bounce" />
                <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rotate-12 animate-pulse" />
            </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 
                            ref={heroTextRef}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight py-4"
                            style={{ lineHeight: '1.1', paddingBottom: '0.5rem' }}
                        >
                            Jagdish Everest
                        </h1>
                        
                        <div className="text-2xl md:text-3xl h-12 flex items-center justify-center">
                            <span className="font-mono text-cyan-500">
                                {displayText}
                                <span className="animate-pulse text-purple-500">|</span>
                            </span>
                        </div>

                        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                            Computer Science Student at R.M.K. Engineering College, graduating in 2026. 
                            Passionate about building secure, scalable applications and exploring the fascinating world of cybersecurity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.button>
                            
                            <motion.button
                                onClick={() => scrollToSection('contact')}
                                className={`px-8 py-4 border-2 border-cyan-500 font-semibold rounded-lg transition-all duration-300 ${
                                    isDarkMode 
                                        ? 'text-cyan-400 hover:bg-cyan-500 hover:text-white' 
                                        : 'text-cyan-600 hover:bg-cyan-500 hover:text-white'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

    );
}

export default Hero;