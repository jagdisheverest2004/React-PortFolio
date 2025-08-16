
// --- SVG Icon for the project link ---
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// --- Reusable Project Card Component ---
const ProjectCard = ({ name, description, link }) => {
    return (
        <div className="project flex flex-col p-6 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 ease-in-out hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-2 transform-gpu">
            <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
            <p className="text-slate-400 mb-6 flex-grow">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-slate-700 text-cyan-300 font-semibold px-5 py-2 rounded-md hover:bg-cyan-500 hover:text-slate-900 transition-colors duration-300"
            >
                View Project
                <ExternalLinkIcon />
            </a>
        </div>
    );
};


// --- Main Projects Component ---
function Projects() {
    // Correctly structured as an array of objects
    const projectData = [
        {
            name: "Real Time Food Ordering System",
            description: "A full-stack web application for ordering food from local restaurants with live order tracking.",
            link: "https://www.example.com/project1",
        },
        {
            name: "Real Time Ticket Booking System",
            description: "A responsive app for booking movie or event tickets, featuring seat selection and secure payments.",
            link: "https://www.example.com/project2",
        },
        {
            name: "Interactive Data Dashboard",
            description: "A data visualization tool built with D3.js and React to display complex datasets in an intuitive way.",
            link: "https://www.example.com/project3",
        },
        {
            name: "Collaborative Whiteboard App",
            description: "A real-time collaborative whiteboard application using WebSockets for seamless team brainstorming.",
            link: "https://www.example.com/project4",
        }
    ];

    return (
        <div className="projects p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-10 text-cyan-300">My Projects</h2>
            <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
