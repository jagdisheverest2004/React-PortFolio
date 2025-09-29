/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

import {
    FaJava,
    FaDatabase,
    FaFileCode
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


function Skill({ isDarkMode }) {

    const skills = [
        { name: "Java", icon: <FaJava className="text-orange-500 text-3xl size-15" />, level: 80 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-3xl size-15" />, level: 70 },
        { name: "SQL", icon: <FaDatabase className="text-blue-500 text-3xl size-15" />, level: 75 },
        { name: "React", icon: <SiReact className="text-blue-400 text-3xl size-15" />, level: 65 },
        { name: "JavaScript", icon: <SiJavascript className="text-cyan-500 text-3xl size-15" />, level: 60 },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600 text-3xl size-15" />, level: 70 },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600 text-3xl size-15" />, level: 60 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-3xl size-15" />, level: 65 },
        { name: "Dart", icon: <SiDart className="text-blue-400 text-3xl size-15" />, level: 75 },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-3xl size-15" />, level: 75 },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl size-15" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl size-15" />, level: 80 },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-red-500 text-3xl size-15" />, level: 70 },
        { name: "VS Code", icon: <FaFileCode className="text-blue-500 text-3xl size-15" />, level: 70 },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl size-15" />, level: 85 }
    ];


    return (
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
    );
}

export default Skill;