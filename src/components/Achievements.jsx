import { FaCertificate, FaAward, FaCode, FaPython, FaJava, FaShieldAlt, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

function Achievements() {
    const certifications = [
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            issuer: "Fortinet",
            date: "2023",
            type: "Cybersecurity Certification",
            icon: <FaShieldAlt className="text-red-500" />,
            description: "Comprehensive certification covering cybersecurity fundamentals, network security principles, and Fortinet security solutions.",
            skills: ["Network Security", "Threat Analysis", "Security Architecture", "Incident Response"],
            credentialId: "FCF-2023-XXXX",
            verificationLink: "#"
        },
        {
            title: "Programming in Java",
            issuer: "NPTEL - IIT Kharagpur",
            date: "2023",
            type: "Programming Certification",
            icon: <FaJava className="text-orange-500" />,
            description: "Advanced Java programming certification covering object-oriented programming, data structures, algorithms, and enterprise application development.",
            skills: ["Java Programming", "OOP Concepts", "Data Structures", "Algorithm Design"],
            credentialId: "NPTEL23CS54",
            verificationLink: "#"
        },
        {
            title: "Joy of Computing using Python",
            issuer: "NPTEL - IIT Ropar",
            date: "2023",
            type: "Programming Certification",
            icon: <FaPython className="text-blue-500" />,
            description: "Comprehensive Python programming certification focusing on computational thinking, problem-solving, and practical applications.",
            skills: ["Python Programming", "Computational Thinking", "Problem Solving", "Data Analysis"],
            credentialId: "NPTEL23CS67",
            verificationLink: "#"
        }
    ];

    const achievements = [
        {
            title: "Security-First Developer",
            description: "Developed multiple security-focused applications including Secure-Share and SPOOF-SHIELD, demonstrating expertise in cybersecurity implementation.",
            icon: <FaShieldAlt className="text-green-500" />,
            date: "2023-2024",
            type: "Project Achievement"
        },
        {
            title: "Full Stack Development",
            description: "Successfully built and deployed multiple full-stack applications using Java Spring Boot backend with modern frontend technologies.",
            icon: <FaCode className="text-purple-500" />,
            date: "2023-2024",
            type: "Technical Achievement"
        }
    ];

    return (
        <div className="achievements p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <motion.h2 
                className="text-4xl font-bold text-center mb-4 text-cyan-300"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Achievements & Certifications
            </motion.h2>
            <motion.p 
                className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Professional certifications and key achievements that showcase my commitment to continuous learning and excellence.
            </motion.p>

            {/* Certifications Section */}
            <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center">
                    <FaCertificate className="mr-3 text-yellow-500" />
                    Professional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:bg-slate-800"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Certificate Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-4xl">
                                    {cert.icon}
                                </div>
                                <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    {cert.date}
                                </span>
                            </div>

                            <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                                {cert.title}
                            </h4>
                            <p className="text-cyan-300 font-semibold mb-3">{cert.issuer}</p>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                {cert.description}
                            </p>

                            {/* Skills */}
                            <div className="mb-4">
                                <p className="text-white font-semibold mb-2 text-sm">Key Skills:</p>
                                <div className="flex flex-wrap gap-1">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded border border-slate-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Credential Info */}
                            <div className="border-t border-slate-600 pt-4">
                                <p className="text-slate-400 text-xs mb-2">
                                    Credential ID: <span className="text-slate-300">{cert.credentialId}</span>
                                </p>
                                <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
                                    <FaExternalLinkAlt className="mr-2 text-xs" />
                                    Verify Certificate
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Project Achievements Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center">
                    <FaAward className="mr-3 text-yellow-500" />
                    Key Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-purple-400 transition-all duration-300"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-start mb-4">
                                <div className="text-3xl mr-4">
                                    {achievement.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        {achievement.title}
                                    </h4>
                                    <div className="flex items-center text-slate-400 text-sm mb-2">
                                        <FaCalendarAlt className="mr-2" />
                                        {achievement.date}
                                    </div>
                                </div>
                                <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    {achievement.type}
                                </span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Future Goals Section */}
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-8 max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-white mb-4">Continuous Learning Journey</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Always striving to stay ahead of the curve in technology and security. Currently pursuing advanced certifications 
                        in cloud security and exploring emerging technologies in AI and blockchain security.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Achievements;
