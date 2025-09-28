import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    FaSun, 
    FaMoon, 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope, 
    FaPhone,
    FaMapMarkerAlt,
    FaArrowUp,
    FaCode,
    FaJava,
    FaDatabase,
    FaPython,
    FaShieldAlt,
    FaFileCode,
    FaGraduationCap,
    FaCalendarAlt,
    FaPaperPlane,
    FaUser,
    FaComment,
    FaCheckCircle,
    FaExclamationCircle,
    FaDownload
} from 'react-icons/fa';
import { 
    SiSpringboot, 
    SiIntellijidea, 
    SiMysql, 
    SiPostgresql, 
    SiPostman,
    SiDart,
    SiFlutter,
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss
} from 'react-icons/si';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

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
        "Spring Boot Expert"
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

    // Skills data
    const skills = [
        { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" />, level: 90 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-3xl" />, level: 85 },
        { name: "SQL", icon: <FaDatabase className="text-blue-500 text-3xl" />, level: 80 },
        { name: "React", icon: <SiReact className="text-blue-400 text-3xl" />, level: 80 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-3xl" />, level: 85 },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600 text-3xl" />, level: 90 },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600 text-3xl" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-3xl" />, level: 90 },
        { name: "Dart", icon: <SiDart className="text-blue-400 text-3xl" />, level: 75 },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-3xl" />, level: 75 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" />, level: 80 },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-red-500 text-3xl" />, level: 90 },
        { name: "VS Code", icon: <FaFileCode className="text-blue-500 text-3xl" />, level: 95 },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" />, level: 85 }
    ];

    // Projects data - expanded with more projects
    const projects = [
        {
            name: "Secure-Share",
            description: "A secure file-sharing system built with Java Spring Boot, implementing advanced encryption techniques including AES-256 GCM and RSA encryption to ensure complete data security during file transfers.",
            icon: <FaShieldAlt className="text-cyan-500" />,
            technologies: ["Java", "Spring Boot", "PostgreSQL", "AES-256 GCM", "RSA Encryption"],
            features: [
                "End-to-end encryption with AES-256 GCM",
                "RSA key exchange for secure communication", 
                "User authentication and authorization",
                "File integrity verification"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            status: "Active"
        },
        {
            name: "SPOOF-SHIELD", 
            description: "An advanced email spoofing detection system that analyzes email headers and verifies SPF, DKIM, and DMARC records to identify and prevent email spoofing attacks.",
            icon: <FaShieldAlt className="text-purple-500" />,
            technologies: ["Java", "Spring Boot", "Email Security", "DNS Analysis"],
            features: [
                "SPF record verification",
                "DKIM signature validation", 
                "DMARC policy analysis",
                "Real-time threat detection"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            status: "Active"
        },
        {
            name: "Ecommerce-Platform",
            description: "A comprehensive Spring Boot-based backend for an e-commerce application featuring robust RESTful APIs, secure payment processing, and PostgreSQL database integration.",
            icon: <FaCode className="text-red-500" />,
            technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "JWT Authentication"],
            features: [
                "User management and authentication",
                "Product catalog management",
                "Shopping cart functionality",
                "Payment gateway integration"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            status: "Completed"
        },
        {
            name: "Employee Management System",
            description: "A robust Spring Boot backend system for comprehensive employee management, featuring role-based access control, performance tracking, and detailed reporting capabilities.",
            icon: <FaDatabase className="text-purple-500" />,
            technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Spring Security"],
            features: [
                "Employee profile management",
                "Department and role assignment",
                "Attendance tracking system",
                "Performance evaluation"
            ],
            githubLink: "https://github.com/jagdisheverest2004", 
            status: "Completed"
        },
        {
            name: "React Portfolio Website",
            description: "A modern, responsive portfolio website built with React, featuring smooth animations, dark/light themes, and interactive components to showcase projects and skills.",
            icon: <SiReact className="text-blue-400" />,
            technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design"],
            features: [
                "Responsive design for all devices",
                "Smooth scroll animations",
                "Theme switching functionality",
                "Interactive contact form"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            status: "Active"
        },
        {
            name: "API Development Suite",
            description: "A collection of RESTful APIs built with Java Spring Boot, demonstrating various backend development patterns, security implementations, and database integrations.",
            icon: <FaCode className="text-green-500" />,
            technologies: ["Java", "Spring Boot", "REST API", "Microservices", "Database Design"],
            features: [
                "RESTful API endpoints",
                "Database integration",
                "Authentication & authorization",
                "Comprehensive documentation"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            status: "Active"
        }
    ];

    // Certifications data
    const certifications = [
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            issuer: "Fortinet",
            date: "2023",
            type: "Cybersecurity Certification", 
            icon: <FaShieldAlt className="text-red-500" />,
            description: "Comprehensive certification covering cybersecurity fundamentals, network security principles, and Fortinet security solutions.",
            skills: ["Network Security", "Threat Analysis", "Security Architecture", "Incident Response"],
            credentialId: "FCF-2023-XXXX"
        },
        {
            title: "Programming in Java",
            issuer: "NPTEL - IIT Kharagpur",
            date: "2023",
            type: "Programming Certification",
            icon: <FaJava className="text-orange-500" />,
            description: "Advanced Java programming certification covering object-oriented programming, data structures, algorithms, and enterprise application development.",
            skills: ["Java Programming", "OOP Concepts", "Data Structures", "Algorithm Design"],
            credentialId: "NPTEL23CS54"
        },
        {
            title: "Joy of Computing using Python",
            issuer: "NPTEL - IIT Ropar", 
            date: "2023",
            type: "Programming Certification",
            icon: <FaPython className="text-blue-500" />,
            description: "Comprehensive Python programming certification focusing on computational thinking, problem-solving, and practical applications.",
            skills: ["Python Programming", "Computational Thinking", "Problem Solving", "Data Analysis"],
            credentialId: "NPTEL23CS67"
        }
    ];

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
            const serviceId = 'service_your_id';
            const templateId = 'template_your_id';
            const publicKey = 'your_public_key';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Jagdish Everest'
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
            <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-lg border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <motion.h1 
                        className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        Jagdish Everest
                    </motion.h1>
                    
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex space-x-4">
                            {['home', 'about', 'projects', 'achievements', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`px-3 py-1 rounded-md capitalize transition-all duration-300 ${
                                        activeSection === section
                                            ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                                            : isDarkMode 
                                                ? 'text-gray-300 hover:text-white hover:bg-slate-800' 
                                                : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                        
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-50 hover:bg-gray-200'} transition-colors duration-300`}
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDarkMode ? 0 : 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-slate-700" />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center pt-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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

            {/* About Section */}
            <section id="about" ref={aboutRef} className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-16 mb-16">
                        {/* Photo and Info */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-75"></div>
                                <div className={`relative ${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-2xl p-8 text-center`}>
                                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500">
                                        <img 
                                            src="/professional-photo.jpg" 
                                            alt="Jagdish Everest - Professional Photo" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Jagdish Everest</h3>
                                    <p className="text-cyan-500 font-semibold mb-4">Full Stack Developer</p>
                                    <div className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                        <div className="flex items-center justify-center">
                                            <FaGraduationCap className="mr-2 text-cyan-500" />
                                            <span>B.E. Computer Science</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <FaCalendarAlt className="mr-2 text-purple-500" />
                                            <span>Graduating 2026</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <FaMapMarkerAlt className="mr-2 text-red-500" />
                                            <span>Chennai, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* About Text */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Hello! I'm Jagdish</h3>
                                <div className={`space-y-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                                    <p>
                                        I'm a passionate Computer Science student at R.M.K. Engineering College, set to graduate in 2026. 
                                        My journey in technology is driven by an insatiable curiosity for building secure, scalable applications 
                                        and exploring the fascinating world of cybersecurity.
                                    </p>
                                    <p>
                                        I specialize in full-stack development with a strong foundation in Java and Spring Boot for backend 
                                        development, complemented by modern frontend technologies like React and Tailwind CSS. My passion extends 
                                        to cybersecurity, where I love creating secure applications and understanding various security protocols.
                                    </p>
                                    <p>
                                        When I'm not coding, I'm probably learning about the latest security vulnerabilities, 
                                        contributing to open-source projects, or working on innovative solutions that make the digital world safer.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className={`${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-gray-50 hover:bg-white shadow-md'} p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 border ${isDarkMode ? 'border-slate-700 hover:border-cyan-500/50' : 'border-gray-200 hover:border-cyan-500/50'}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="mb-4 flex justify-center">
                                        {skill.icon}
                                    </div>
                                    <h4 className="font-semibold mb-3">{skill.name}</h4>
                                    <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                                        <motion.div 
                                            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-700' : 'text-gray-800'} mt-2 block`}>
                                        {skill.level}%
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div 
                        className="mt-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            My Journey
                        </h3>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            {/* Education & Experience Timeline */}
                            <div className="relative">
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                                
                                {/* Higher Secondary Education */}
                                <motion.div 
                                    className="relative flex gap-6 mb-8"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaGraduationCap className="text-white text-xl" />
                                    </div>
                                    <div className={`flex-1 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold">Higher Secondary Education</h4>
                                            <span className="text-cyan-400 font-semibold">2020 - 2022</span>
                                        </div>
                                        <p className="text-purple-400 font-semibold mb-1">Computer Science Stream</p>
                                        <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-800'} text-sm mb-3`}>Chennai, India</p>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Completed higher secondary education with focus on Mathematics, Physics, Chemistry, and Computer Science. 
                                            Developed strong analytical and problem-solving skills that laid the foundation for my engineering journey.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* College - B.E. Computer Science */}
                                <motion.div 
                                    className="relative flex gap-6 mb-8"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaCode className="text-white text-xl" />
                                    </div>
                                    <div className={`flex-1 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold">Bachelor of Engineering - Computer Science</h4>
                                            <span className="text-purple-400 font-semibold">2022 - 2026</span>
                                        </div>
                                        <p className="text-cyan-400 font-semibold mb-1">R.M.K. Engineering College</p>
                                        <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-800'} text-sm mb-3`}>Chennai, India</p>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Currently pursuing B.E. in Computer Science with specialization in software development, 
                                            data structures, algorithms, and cybersecurity. Actively involved in coding competitions and technical projects.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Full Stack Development Journey */}
                                <motion.div 
                                    className="relative flex gap-6 mb-8"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaDatabase className="text-white text-xl" />
                                    </div>
                                    <div className={`flex-1 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold">Full Stack Development Mastery</h4>
                                            <span className="text-cyan-400 font-semibold">2023 - Present</span>
                                        </div>
                                        <p className="text-purple-400 font-semibold mb-1">Self-Learning & Professional Development</p>
                                        <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-800'} text-sm mb-3`}>Personal Growth Journey</p>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Mastering modern full-stack technologies including Java Spring Boot, React, Node.js, and database systems. 
                                            Building secure, scalable applications while exploring advanced cybersecurity concepts and best practices.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Internship & Professional Experience */}
                                <motion.div 
                                    className="relative flex gap-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaShieldAlt className="text-white text-xl" />
                                    </div>
                                    <div className={`flex-1 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold">Cybersecurity & Development Focus</h4>
                                            <span className="text-purple-400 font-semibold">2024 - Present</span>
                                        </div>
                                        <p className="text-cyan-400 font-semibold mb-1">Security-First Development Approach</p>
                                        <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-800'} text-sm mb-3`}>Continuous Learning & Application</p>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Specializing in secure application development, vulnerability assessment, and implementing robust security protocols. 
                                            Working on real-world projects that combine development skills with cybersecurity best practices.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Resume Download Section */}
                        <motion.div 
                            className="mt-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-2xl font-bold mb-6">Want to know more about my journey?</h4>
                            <a
                                href="/Jagdish-Resume.pdf"
                                download="Jagdish-Everest-Resume.pdf"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                            >
                                <FaFileCode className="text-xl group-hover:rotate-12 transition-transform" />
                                Download My Resume
                                <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                Get detailed information about my education, skills, projects, and experience
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" ref={projectsRef} className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Here are some of my recent projects that showcase my skills in full-stack development, 
                        cybersecurity, and modern web technologies.
                    </motion.p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 group hover:scale-105`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-4xl">
                                        {project.icon}
                                    </div>
                                    {project.status && (
                                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                                            project.status === 'Active' 
                                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                        }`}>
                                            {project.status}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                                    {project.name}
                                </h3>
                                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <p className="font-semibold text-cyan-500 mb-2">Technologies:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-slate-700/50 text-gray-300 border border-slate-600' : 'bg-gray-50 text-gray-700 border border-gray-200'}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="font-semibold text-purple-500 mb-2">Key Features:</p>
                                    <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="text-cyan-500 mr-2 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.a 
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="mr-2" />
                                    View Code
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" ref={achievementsRef} className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Certifications & Achievements
                    </motion.h2>
                    <motion.p 
                        className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Professional certifications and key achievements that showcase my commitment to continuous learning and excellence.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl">
                                        {cert.icon}
                                    </div>
                                    <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {cert.date}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold mb-2 leading-tight">
                                    {cert.title}
                                </h4>
                                <p className="text-cyan-500 font-semibold mb-3">{cert.issuer}</p>
                                <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                    {cert.description}
                                </p>

                                <div className="mb-4">
                                    <p className="font-semibold mb-2 text-sm">Key Skills:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-700/50 text-gray-300 border border-slate-600' : 'bg-gray-50 text-gray-700 border border-gray-200'}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`border-t pt-4 ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                                    <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>
                                        Credential ID: <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{cert.credentialId}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactRef} className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p 
                        className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <FaPhone className="text-cyan-500 text-xl" />,
                                        title: "Phone",
                                        value: "+91 8778900128",
                                        href: "tel:+918778900128",
                                        description: "Available Mon - Fri, 9am - 6pm IST"
                                    },
                                    {
                                        icon: <FaEnvelope className="text-purple-500 text-xl" />,
                                        title: "Email", 
                                        value: "Jagdisheverest23@gmail.com",
                                        href: "mailto:Jagdisheverest23@gmail.com",
                                        description: "I'll respond within 24 hours"
                                    },
                                    {
                                        icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
                                        title: "Location",
                                        value: "Chennai, India", 
                                        href: null,
                                        description: "Available for remote work globally"
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">{item.title}</h4>
                                                {item.href ? (
                                                    <a 
                                                        href={item.href} 
                                                        className="text-cyan-500 hover:text-cyan-400 transition-colors font-medium block"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <span className="text-cyan-500 font-medium block">{item.value}</span>
                                                )}
                                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-700' : 'text-gray-800'}`}>{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    {[
                                        {
                                            icon: <FaLinkedin className="text-2xl" />,
                                            name: "LinkedIn",
                                            url: "https://linkedin.com/in/jagdish-everest",
                                            color: "text-blue-500 hover:text-blue-400"
                                        },
                                        {
                                            icon: <FaGithub className="text-2xl" />,
                                            name: "GitHub",
                                            url: "https://github.com/jagdisheverest2004",
                                            color: isDarkMode ? "text-gray-700 hover:text-gray-300" : "text-gray-800 hover:text-gray-800"
                                        }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-gray-50 border-gray-200 hover:bg-white shadow-md'} border transition-all duration-300 ${social.color}`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            className={`${isDarkMode ? 'bg-slate-800/30 border-slate-600' : 'bg-white border-gray-200'} border rounded-2xl p-8`}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                            
                            {submitStatus && (
                                <motion.div 
                                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                                        submitStatus === 'success' 
                                            ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400' 
                                            : 'bg-red-500/20 border border-red-500/30 text-red-400'
                                    }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {submitStatus === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    {submitStatus === 'success' 
                                        ? 'Message sent successfully! I\'ll get back to you soon.' 
                                        : 'Failed to send message. Please try again or contact me directly.'
                                    }
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block font-semibold mb-2" htmlFor="name">
                                        <FaUser className="inline mr-2 text-cyan-500" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300`}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold mb-2" htmlFor="email">
                                        <FaEnvelope className="inline mr-2 text-purple-500" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold mb-2" htmlFor="message">
                                        <FaComment className="inline mr-2 text-red-500" />
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300 resize-none`}
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                                        isLoading 
                                            ? isDarkMode ? 'bg-slate-600 text-slate-400 cursor-not-allowed' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg'
                                    }`}
                                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-transparent"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

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
