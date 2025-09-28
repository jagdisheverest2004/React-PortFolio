import { Outlet, Link } from "react-router-dom";
import { 
    FaJava, 
    FaDatabase, 
    FaCode, 
    FaGraduationCap, 
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaFileCode
} from "react-icons/fa";
import { 
    SiSpringboot, 
    SiIntellijidea, 
    SiMysql, 
    SiPostgresql, 
    SiPostman,
    SiDart,
    SiFlutter
} from "react-icons/si";

function About() {
    const skills = [
        { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" />, level: 90 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-3xl" />, level: 85 },
        { name: "SQL", icon: <FaDatabase className="text-blue-500 text-3xl" />, level: 80 },
        { name: "Dart", icon: <SiDart className="text-blue-400 text-3xl" />, level: 75 },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-3xl" />, level: 75 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" />, level: 80 },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-red-500 text-3xl" />, level: 90 },
        { name: "VS Code", icon: <FaFileCode className="text-blue-500 text-3xl" />, level: 95 },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" />, level: 85 },
    ];

    const timeline = [
        {
            year: "2022 - 2026",
            title: "Bachelor of Engineering - Computer Science",
            institution: "R.M.K. Engineering College",
            location: "Chennai, India",
            description: "Pursuing B.E. in Computer Science with focus on software development and cybersecurity."
        },
        {
            year: "2023 - Present",
            title: "Full Stack Development",
            institution: "Self-Learning & Projects",
            location: "Personal Development",
            description: "Mastering Java Spring Boot, React, and building secure applications with modern technologies."
        }
    ];

    return (
        <div className="about p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <motion.h1 
                className="text-4xl font-bold text-center mb-12 text-cyan-300"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Left Column - Photo and Personal Info */}
                <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-1 rounded-2xl">
                        <div className="bg-slate-900 rounded-2xl p-8 text-center">
                            <div className="w-32 h-32 mx-auto mb-6 relative">
                                <img 
                                    src="/public/professional-photo.jpg" 
                                    alt="Jagdish Everest - Professional Photo"
                                    className="w-full h-full object-cover rounded-full border-4 border-gradient-to-br from-cyan-400 to-purple-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Jagdish Everest</h3>
                            <p className="text-cyan-300 mb-4">Full Stack Developer</p>
                            <div className="flex items-center justify-center text-slate-400 mb-2">
                                <FaGraduationCap className="mr-2" />
                                <span>B.E. Computer Science</span>
                            </div>
                            <div className="flex items-center justify-center text-slate-400 mb-2">
                                <FaCalendarAlt className="mr-2" />
                                <span>Graduating 2026</span>
                            </div>
                            <div className="flex items-center justify-center text-slate-400">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>Chennai, India</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - About Description */}
                <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="prose prose-invert">
                        <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm Jagdish</h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-4">
                            I'm a passionate Computer Science student at R.M.K. Engineering College, set to graduate in 2026. 
                            My journey in technology is driven by an insatiable curiosity for building secure, scalable applications 
                            and exploring the fascinating world of cybersecurity.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-4">
                            I specialize in full-stack development with a strong foundation in Java and Spring Boot for backend 
                            development, complemented by modern frontend technologies. My passion extends to cybersecurity, 
                            where I love creating secure applications and understanding various security protocols.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            When I'm not coding, I'm probably learning about the latest security vulnerabilities, 
                            contributing to open-source projects, or working on innovative solutions that make the digital world safer.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-cyan-300">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-3 flex justify-center">
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-cyan-300">Education & Journey</h3>
                <div className="space-y-6">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                                {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-cyan-400/30 mt-2"></div>}
                            </div>
                            <div className="flex-1 bg-slate-800/30 p-6 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <span className="text-cyan-300 font-semibold">{item.year}</span>
                                </div>
                                <p className="text-purple-400 font-semibold mb-1">{item.institution}</p>
                                <p className="text-slate-400 text-sm mb-3">{item.location}</p>
                                <p className="text-slate-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="text-center mt-8">
                <Link to="team" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    Meet The Team
                </Link>
            </div>

            {/* The Outlet component will render the nested Team component */}
            <div className="mt-12">
                <Outlet />
            </div>
        </div>
    );
}

export default About;