// --- SVG Icons for Social Links ---
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


// --- Reusable Team Member Card Component ---
const TeamMemberCard = ({ imgSrc, name, role, email }) => {
    return (
        <div className="team-member text-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-2 transform-gpu">
            <img 
                src={imgSrc} 
                alt={`Profile of ${name}`}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-slate-600 transition-all duration-300 group-hover:border-cyan-400"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/1e293b/94a3b8?text=Member'; }}
            />
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-cyan-400 font-medium mb-3">{role}</p>
            <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-700 w-full justify-center">
                <a href={`mailto:${email}`} className="text-slate-400 hover:text-cyan-300 transition-colors">
                    <MailIcon />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    );
};


// --- Main Team Component ---
function Team() {
    const teamMembers = [
        {
            imgSrc: "https://i.pravatar.cc/200?u=john",
            name: "John Doe",
            role: "Lead Software Engineer",
            email: "john.doe@example.com",
        },
        {
            imgSrc: "https://i.pravatar.cc/200?u=jane",
            name: "Jane Smith",
            role: "UX/UI Designer",
            email: "jane.smith@example.com",
        },
        {
            imgSrc: "https://i.pravatar.cc/200?u=alex",
            name: "Alex Johnson",
            role: "Project Manager",
            email: "alex.j@example.com",
        },
         {
            imgSrc: "https://i.pravatar.cc/200?u=emily",
            name: "Emily White",
            role: "DevOps Specialist",
            email: "emily.w@example.com",
        }
    ];

    return (
        <div className="team p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-10 text-cyan-300">Our Team</h2>
            <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard 
                        key={index}
                        imgSrc={member.imgSrc}
                        name={member.name}
                        role={member.role}
                        email={member.email}
                    />
                ))}
            </div>
        </div>
    );
}

export default Team;
