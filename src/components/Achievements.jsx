import { FaPython, FaJava, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Achievements({ isDarkMode, achievementsRef }) {   

    const certifications = [
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            issuer: "Fortinet",
            date: "2025",
            type: "Cybersecurity Certification", 
            icon: <FaShieldAlt className="text-red-500" />,
            description: "Comprehensive certification covering cybersecurity fundamentals, network security principles, and Fortinet security solutions.",
            skills: ["Network Security", "Threat Analysis", "Security Architecture", "Incident Response"],
            credentialId: "FCF-2025-XXXX"
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
    
    return (
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
                        className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
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
                                <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
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
                                    <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-800'}`}>
                                        Credential ID: <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{cert.credentialId}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    );
}

export default Achievements;
