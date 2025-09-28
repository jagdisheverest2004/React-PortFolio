import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

function Home() {
    const navigate = useNavigate();
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const titles = useMemo(() => [
        "Full Stack Developer",
        "Cyber Security Enthusiast",
        "Java Developer",
        "Spring Boot Expert"
    ], []);

    useEffect(() => {
        const currentTitle = titles[currentIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, titles]);

    const handleNavigate = () => {
        navigate('/projects');
    };

    return (
        <div className="home flex flex-col items-center justify-center text-center min-h-[80vh] p-8 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                        animate={{
                            x: [Math.random() * globalThis.innerWidth, Math.random() * globalThis.innerWidth],
                            y: [Math.random() * globalThis.innerHeight, Math.random() * globalThis.innerHeight],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        style={{
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                    />
                ))}
            </div>

            <div className="home__header relative z-10">
                <motion.h1 
                    className="text-6xl md:text-8xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Jagdish Everest
                    </span>
                </motion.h1>
                
                <motion.div 
                    className="text-2xl md:text-3xl text-cyan-300 mb-6 h-12 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <span className="font-mono">
                        {displayText}
                        <span className="animate-pulse text-pink-500">|</span>
                    </span>
                </motion.div>

                <motion.p 
                    className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Computer Science Student at R.M.K. Engineering College, graduating in 2026. 
                    Passionate about building secure, scalable applications and exploring the fascinating world of cybersecurity.
                </motion.p>

                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <button
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        onClick={handleNavigate}
                    >
                        <span className="relative z-10">Explore My Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                    
                    <button
                        className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                        onClick={() => navigate('/contact')}
                    >
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;