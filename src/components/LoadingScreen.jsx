import { useEffect, useRef, useState } from 'react';

function LoadingScreen({ onLoadingComplete }) {
    const loadingRef = useRef(null);
    const progressRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        console.log('LoadingScreen mounted, onLoadingComplete:', typeof onLoadingComplete);
        
        if (isCompleted) return; // Prevent multiple executions
        
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 4; // Faster increment for testing
            console.log('Progress:', currentProgress);
            setProgress(currentProgress);
            
            // Update progress bar
            if (progressRef.current) {
                progressRef.current.style.width = `${Math.min(currentProgress, 100)}%`;
            }
            
            // Complete when reaching 100%
            if (currentProgress >= 100) {
                clearInterval(interval);
                setIsCompleted(true);
                console.log('Loading completed, calling callback...');
                
                // Call completion callback
                if (onLoadingComplete && typeof onLoadingComplete === 'function') {
                    setTimeout(() => {
                        console.log('Executing onLoadingComplete...');
                        onLoadingComplete();
                    }, 500);
                } else {
                    console.error('onLoadingComplete is not valid:', onLoadingComplete);
                }
            }
        }, 25); // 25ms intervals for 1-second total

        return () => clearInterval(interval);
    }, [onLoadingComplete, isCompleted]);

    return (
        <div 
            ref={loadingRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
        >
            {/* Background particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Geometric background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse" />
                <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rotate-12 animate-bounce" />
            </div>

            {/* Main content */}
            <div className="text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8 tracking-wider animate-pulse">
                    JAGDISH EVEREST
                </h1>
                
                <div className="mb-6">
                    <div className="text-cyan-400 font-mono text-lg mb-2">
                        {progress < 25 && "🚀 Initializing Portfolio..."}
                        {progress >= 25 && progress < 50 && "⚡ Loading Components..."}
                        {progress >= 50 && progress < 75 && "🎨 Setting up Animations..."}
                        {progress >= 75 && progress < 95 && "✨ Finalizing Experience..."}
                        {progress >= 95 && "🎯 Ready to Launch!"}
                    </div>
                    <div className="text-purple-400 font-mono text-2xl font-bold">{progress}%</div>
                </div>

                {/* Progress bar */}
                <div className="w-80 h-3 bg-slate-700/50 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl border border-slate-600/30">
                    <div 
                        ref={progressRef}
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-200 ease-out shadow-lg relative"
                        style={{ width: '0%' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                    </div>
                </div>

                {/* Loading dots */}
                <div className="flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </div>

                <div className="mt-8 text-gray-400 text-sm font-mono">
                    Full Stack Developer • Cyber Security Enthusiast
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;