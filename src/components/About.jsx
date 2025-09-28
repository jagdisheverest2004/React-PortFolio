import { motion } from 'framer-motion';
import { 
    FaMapMarkerAlt,
    FaGraduationCap,
    FaCalendarAlt} from 'react-icons/fa';
import Skill  from './Skill';
import  Education from './Education';

function About({ isDarkMode, aboutRef }) {
    return (
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
                <Skill isDarkMode={isDarkMode} />

                {/* Education Timeline */}
                <Education isDarkMode={isDarkMode} />
            </div>
        </section>
    );
}

export default About;
