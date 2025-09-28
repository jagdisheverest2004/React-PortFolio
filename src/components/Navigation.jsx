import { FaSun, FaMoon} from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navigation({ isDarkMode, toggleTheme, activeSection, scrollToSection }) {
    return (
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
                                className={`px-3 py-1 rounded-md capitalize transition-all duration-300 ${activeSection === section
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
                            {isDarkMode ? <FaSun className="text-cyan-400" /> : <FaMoon className="text-purple-600" />}
                        </motion.div>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;