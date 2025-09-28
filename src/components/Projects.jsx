import { FaGithub, FaExternalLinkAlt, FaJava, FaShieldAlt, FaStore, FaUsers } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMysql } from "react-icons/si";

// --- SVG Icon for the project link ---
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// --- Reusable Project Card Component ---
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div 
            className="project flex flex-col p-6 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 ease-in-out hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-2 transform-gpu group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Project Icon */}
            <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-cyan-400">
                    {project.icon}
                </div>
                <div className="flex gap-2">
                    {project.status && (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                            {project.status}
                        </span>
                    )}
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.name}
            </h3>
            <p className="text-slate-400 mb-4 flex-grow leading-relaxed">
                {project.description}
            </p>

            {/* Technologies Used */}
            <div className="mb-6">
                <p className="text-cyan-300 font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span 
                            key={techIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-slate-700/50 text-slate-300 border border-slate-600"
                        >
                            {tech.icon && <span className="mr-1">{tech.icon}</span>}
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
                <p className="text-cyan-300 font-semibold mb-2">Key Features:</p>
                <ul className="text-slate-400 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Project Links */}
            <div className="mt-auto flex gap-3">
                {project.githubLink && (
                    <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-slate-700 text-cyan-300 font-semibold px-4 py-3 rounded-md hover:bg-slate-600 transition-colors duration-300"
                    >
                        <FaGithub className="mr-2" />
                        Code
                    </a>
                )}
                {project.liveLink && (
                    <a 
                        href={project.liveLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-cyan-500 text-slate-900 font-semibold px-4 py-3 rounded-md hover:bg-cyan-400 transition-colors duration-300"
                    >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

// --- Main Projects Component ---
function Projects() {
    const projectData = [
        {
            name: "Secure-Share",
            description: "A secure file-sharing system built with Java Spring Boot, implementing advanced encryption techniques including AES-256 GCM and RSA encryption to ensure complete data security during file transfers.",
            icon: <FaShieldAlt />,
            status: "Active",
            technologies: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
                { name: "AES-256 GCM" },
                { name: "RSA Encryption" }
            ],
            features: [
                "End-to-end encryption with AES-256 GCM",
                "RSA key exchange for secure communication",
                "User authentication and authorization",
                "File integrity verification",
                "Secure file download with expiration"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            liveLink: null
        },
        {
            name: "SPOOF-SHIELD",
            description: "An advanced email spoofing detection system that analyzes email headers and verifies SPF, DKIM, and DMARC records to identify and prevent email spoofing attacks.",
            icon: <FaShieldAlt />,
            status: "Active",
            technologies: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
                { name: "Email Security" },
                { name: "DNS Analysis" }
            ],
            features: [
                "SPF record verification",
                "DKIM signature validation",
                "DMARC policy analysis",
                "Email header inspection",
                "Real-time threat detection"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            liveLink: null
        },
        {
            name: "Ecommerce-Platform",
            description: "A comprehensive Spring Boot-based backend for an e-commerce application featuring robust RESTful APIs, secure payment processing, and PostgreSQL database integration.",
            icon: <FaStore />,
            status: "Completed",
            technologies: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
                { name: "REST API" },
                { name: "JWT Authentication" }
            ],
            features: [
                "User management and authentication",
                "Product catalog management",
                "Shopping cart functionality",
                "Order processing system",
                "Payment gateway integration"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            liveLink: null
        },
        {
            name: "Employee Management System",
            description: "A robust Spring Boot backend system for comprehensive employee management, featuring role-based access control, performance tracking, and detailed reporting capabilities.",
            icon: <FaUsers />,
            status: "Completed",
            technologies: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
                { name: "REST API" },
                { name: "Spring Security" }
            ],
            features: [
                "Employee profile management",
                "Department and role assignment",
                "Attendance tracking system",
                "Performance evaluation",
                "Payroll management integration"
            ],
            githubLink: "https://github.com/jagdisheverest2004",
            liveLink: null
        }
    ];

    return (
        <div className="projects p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <motion.h2 
                className="text-4xl font-bold text-center mb-4 text-cyan-300"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h2>
            <motion.p 
                className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Here are some of the projects I've built, focusing on security, scalability, and modern development practices.
            </motion.p>
            
            <div className="project-list grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
