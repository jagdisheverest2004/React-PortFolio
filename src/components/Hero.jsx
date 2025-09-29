/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero({isDarkMode, scrollToSection, homeRef, displayText}) {
    const heroTextRef = useRef(null);
    const particlesRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        // Simple letter animation for the main title using CSS animations
        if (heroTextRef.current) {
            const textWrapper = heroTextRef.current;
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter animate-letter'>$&</span>");
            
            // Add staggered delay to each letter using CSS
            const letters = textWrapper.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 70}ms`;
            });
        }

        // Simple CSS animations for particles
        if (particlesRef.current) {
            const particles = particlesRef.current.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                particle.style.animationDelay = `${index * 200}ms`;
                particle.classList.add('animate-float');
            });
        }
    }, []);

    return(
        <section
            id="home"
            ref={homeRef}
            className={`relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden ${
                isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-white via-cyan-50 to-purple-50'
            }`}
        >
            {/* Animated Background */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 opacity-40"
                style={{
                    background: isDarkMode
                        ? 'linear-gradient(45deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))'
                        : 'linear-gradient(45deg, rgba(6,182,212,0.08), rgba(139,92,246,0.08))'
                }}
            />

            {/* Floating Particles */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`particle absolute w-2 h-2 rounded-full ${
                            isDarkMode
                                ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                                : 'bg-gradient-to-r from-cyan-500 to-purple-400'
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-10 w-20 h-20 border-2 ${isDarkMode ? 'border-cyan-400/30' : 'border-cyan-500/20'} rotate-45 animate-pulse`} />
                <div className={`absolute bottom-20 right-10 w-16 h-16 border-2 ${isDarkMode ? 'border-purple-400/30' : 'border-purple-400/20'} rounded-full animate-bounce`} />
                <div className={`absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r ${isDarkMode ? 'from-cyan-400/20 to-purple-500/20' : 'from-cyan-500/10 to-purple-400/10'} rotate-12 animate-pulse`} />
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
                        className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight py-4 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{
                            lineHeight: '1.1',
                            paddingBottom: '0.5rem',
                            color: isDarkMode ? '#ffffff' : '#1e293b',
                            textShadow: isDarkMode
                                ? '0 0 20px rgba(6,182,212,0.8), 0 0 40px rgba(139,92,246,0.6)'
                                : '0 0 10px rgba(6,182,212,0.3), 0 0 20px rgba(139,92,246,0.2)',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                    >
                        Jagdish Everest
                    </h1>

                    <div className="text-2xl md:text-3xl h-12 flex items-center justify-center">
                        <span className={`font-mono ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                            {displayText}
                            <span className={`animate-pulse ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`}>|</span>
                        </span>
                    </div>

                    <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                        Computer Science Student at R.M.K. Engineering College, graduating in 2026.
                        Passionate about building secure, scalable applications and exploring the fascinating world of cybersecurity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            className={`px-8 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                                    : 'bg-gradient-to-r from-cyan-500 to-purple-400 text-white'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 ${
                                isDarkMode
                                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                                    : 'border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white'
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