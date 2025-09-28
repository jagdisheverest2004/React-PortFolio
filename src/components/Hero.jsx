import { motion } from 'framer-motion';

function Hero({isDarkMode, scrollToSection, homeRef, displayText}) {

    return(
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

    );
}

export default Hero;