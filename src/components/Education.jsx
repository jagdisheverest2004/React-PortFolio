/* eslint-disable no-unused-vars */
import {
    FaCode,
    FaDatabase,
    FaShieldAlt,
    FaFileCode,
    FaGraduationCap,
    FaPaperPlane
} from 'react-icons/fa';
import { motion } from 'framer-motion';


function Education({ isDarkMode }) {
    return (

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

                    {/*SSLC*/}
                    <motion.div
                        className="relative flex gap-6 mb-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaGraduationCap className="text-white text-xl" />
                        </div>
                        <div className={`flex-1 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold">Secondary School Leaving Certificate</h4>
                                <span className="text-purple-400 font-semibold">2018 - 2020</span>
                            </div>
                            <p className="text-cyan-400 font-semibold mb-1">Nazareth Matric Hr Sec School</p>
                            <p className={`${isDarkMode ? 'text-gray-700' : 'text-gray-800'} text-sm mb-3`}>Chennai, India</p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Completed secondary education with a focus on core subjects including Mathematics, Science, Social Science and English.
                                Developed a strong foundation in analytical thinking and problem-solving skills.
                            </p>
                        </div>
                    </motion.div>
                    
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
                            <p className="text-purple-400 font-semibold mb-1">Nazareth Matric Hr Sec School</p>
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
                                <span className="text-purple-400 font-semibold">2022 - Present</span>
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
                                <h4 className="text-xl font-bold">Admin Executive Intern - Swish Craft Innovation Pvt Ltd</h4>
                                <span className="text-cyan-400 font-semibold">June 2024 – July 2024</span>
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
                                <h4 className="text-xl font-bold">Cyber Security Intern – Future Interns</h4>
                                <span className="text-purple-400 font-semibold">June 2025 - July 2025</span>
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
                <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-800'}`}>
                    Get detailed information about my education, skills, projects, and experience
                </p>
            </motion.div>
        </motion.div>

    );
}

export default Education;