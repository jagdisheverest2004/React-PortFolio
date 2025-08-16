const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
);


function Achievement({ data, isDetailedView, onBackClick }) {
    
    // --- Detailed View ---
    // This renders when a specific achievement is selected via the URL.
    if (isDetailedView) {
        return (
            <div>
                <button 
                    onClick={onBackClick}
                    className="inline-flex items-center mb-8 bg-slate-700 text-cyan-300 font-semibold px-5 py-2 rounded-md hover:bg-cyan-500 hover:text-slate-900 transition-colors duration-300"
                >
                    <BackIcon />
                    Back to All Achievements
                </button>
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={data.image} 
                        alt={data.title}
                        className="w-full max-w-lg h-auto object-cover rounded-lg border-2 border-slate-600 mb-6"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/94a3b8?text=Event'; }}
                    />
                    <h3 className="text-4xl font-bold text-white mb-4">{data.title}</h3>
                    <div className="flex flex-wrap items-center justify-center text-md text-slate-300 mb-6 gap-x-6 gap-y-2">
                        <div className="flex items-center"><CalendarIcon /><span>{data.date}</span></div>
                        <div className="flex items-center"><LocationIcon /><span>{data.location}</span></div>
                    </div>
                    <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">{data.description}</p>
                    {data.link && (
                        <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors duration-300">
                            View Proof <ExternalLinkIcon />
                        </a>
                    )}
                </div>
            </div>
        );
    }

    // --- Summary "Button" View ---
    // This renders as an item in the main list.
    return (
        <button
            onClick={data.onClick}
            className="w-full text-left achievement-item flex items-center gap-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 ease-in-out hover:border-cyan-400 hover:bg-slate-800 hover:scale-[1.02] transform-gpu"
        >
            <img src={data.image} alt={data.title} className="w-24 h-16 object-cover rounded-md border-2 border-slate-600 hidden sm:block" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/1e293b/94a3b8?text=...'; }} />
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{data.title}</h3>
                <p className="text-sm text-slate-400">{data.date} - {data.location}</p>
            </div>
        </button>
    );
}

export default Achievement;