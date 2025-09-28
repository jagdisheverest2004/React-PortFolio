import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaArrowUp} from 'react-icons/fa';
import Hero from './Hero';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Achievements from './Achievements';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Professional photo will be loaded from public assets

const Portfolio = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('home');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Intersection Observer for sections
    const [homeRef, homeInView] = useInView({ threshold: 0.3 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
    const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
    const [achievementsRef, achievementsInView] = useInView({ threshold: 0.3 });
    const [contactRef, contactInView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(globalThis.scrollY > 300);
        };
        globalThis.addEventListener('scroll', handleScroll);
        return () => globalThis.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (homeInView) setActiveSection('home');
        else if (aboutInView) setActiveSection('about');
        else if (projectsInView) setActiveSection('projects');
        else if (achievementsInView) setActiveSection('achievements');
        else if (contactInView) setActiveSection('contact');
    }, [homeInView, aboutInView, projectsInView, achievementsInView, contactInView]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Typing animation for roles
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const titles = useMemo(() => [
        "Full Stack Developer",
        "Cyber Security Enthusiast",
        "Java Developer",
        "Python Programmer",
        "Spring Framework Enthusiast"
    ], []);

    useEffect(() => {
        const currentTitle = titles[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, titles]);


    // Contact form handlers
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            // Replace with your actual EmailJS credentials
            const serviceId = 'service_g6c3h5f';
            const templateId = 'template_ncmsr5q'; // You need to get this from EmailJS dashboard
            const publicKey = 'hkMWfRopBVjpLoO4V';   // You need to get this from EmailJS dashboard

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Jagdish Everest',
                reply_to: formData.email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const themeClasses = `transition-all duration-500 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`;

    return (
        <div className={`min-h-screen font-inter ${themeClasses}`}>
            {/* Navigation */}
            <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} activeSection={activeSection} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <Hero isDarkMode={isDarkMode} scrollToSection={scrollToSection} homeRef={homeRef} displayText={displayText} />

            {/* About Section */}
            <About aboutRef={aboutRef} isDarkMode={isDarkMode} />

            {/* Projects Section */}
            <Projects projectsRef={projectsRef} isDarkMode={isDarkMode} />

            {/* Achievements Section */}
            <Achievements achievementsRef={achievementsRef} isDarkMode={isDarkMode} />

            {/* Contact Section */}
            <Contact contactRef={contactRef} isLoading={isLoading} isDarkMode={isDarkMode} submitStatus={submitStatus} formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl z-50"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'} border-t py-8 px-4`}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className={isDarkMode ? 'text-gray-700' : 'text-gray-800'}>
                        © 2025 Jagdish Everest. Built with React, Tailwind CSS, and lots of ☕
                    </p>
                </div>
            </footer>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <Portfolio />
        </ThemeProvider>
    );
};

export default App;
