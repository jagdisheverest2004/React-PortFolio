import {
    FaGithub,
    FaCode,
    FaDatabase,
    FaShieldAlt
} from 'react-icons/fa';
import {
    SiReact
} from 'react-icons/si';
import { motion } from 'framer-motion';


function Projects({ isDarkMode, projectsRef }) {

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

    return (
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
                    className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
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
                            className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 group hover:scale-105 flex flex-col h-[600px]`}
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
                                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${project.status === 'Active'
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
                            <p className={`mb-4 leading-relaxed text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} line-clamp-3`}>
                                {project.description}
                            </p>

                            <div className="mb-4 flex-grow">
                                <p className="font-semibold text-cyan-500 mb-2">Technologies:</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-slate-700/50 text-gray-300 border border-slate-600' : 'bg-gray-50 text-gray-700 border border-gray-200'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-6">
                                    <p className="font-semibold text-purple-500 mb-2">Key Features:</p>
                                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <span className="text-cyan-500 mr-3 text-lg leading-none">•</span>
                                                <span className="text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
    );
}

export default Projects;