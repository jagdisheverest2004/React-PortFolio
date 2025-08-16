import { Outlet, Link } from "react-router-dom";

function About() {
    return (
        <div className="about p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-6 text-cyan-300">About</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                This project is a multi-page React application built using <code className="bg-slate-700 text-cyan-300 px-2 py-1 rounded-md text-base">react-router-dom</code> for navigation.
                The styling is achieved entirely with <code className="bg-slate-700 text-cyan-300 px-2 py-1 rounded-md text-base">Tailwind CSS</code>, focusing on a dark, futuristic theme with glassmorphism effects and subtle animations.
            </p>
            <div className="text-center mt-8">
                <Link to="team" className="inline-block bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors duration-300">
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