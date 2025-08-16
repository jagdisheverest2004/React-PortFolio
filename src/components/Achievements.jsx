import { useSearchParams } from "react-router-dom";
import Achievement from "./Achievement";

function Achievements() {
    const [searchParams, setSearchParams] = useSearchParams();
    const achievementTitleToShow = searchParams.get("view");

    const achievementData = [
        { image: "https://placehold.co/600x400/38bdf8/0f172a?text=Web+Dev", title: "Greatest Website Developer", date: "June 2018", location: "Tech Conference, San Francisco", description: "Awarded for building a robust and scalable e-commerce platform for a major client, focusing on high-performance user data management and real-time analytics.", link: "https://www.example.com/award1" },
        { image: "https://placehold.co/600x400/a78bfa/0f172a?text=Innovation", title: "Innovator of the Year Award", date: "October 2020", location: "Global Innovators Summit", description: "Recognized for developing a novel real-time data synchronization algorithm that improved application performance by 40% across the board.", link: "https://www.example.com/award2" },
        { image: "https://placehold.co/600x400/f472b6/0f172a?text=Open+Source", title: "Top Open Source Contributor", date: "January 2022", location: "Online / GitHub", description: "Acknowledged as a Top 5% contributor to a major UI framework, with multiple complex pull requests merged into the main library.", link: "https://www.github.com/example" }
    ];

    // Find the specific achievement to display, if any.
    const detailedAchievement = achievementData.find(ach => ach.title === achievementTitleToShow);

    // Function to set the search param when a summary card is clicked.
    const handleViewDetail = (title) => {
        setSearchParams({ view: title });
    };

    // Function to clear the search param to go back to the list.
    const handleGoBack = () => {
        setSearchParams({});
    };

    return (
        <div className="achievements p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg min-h-[60vh]">
            {detailedAchievement ? (
                // If an achievement is selected, show the detailed view.
                <Achievement 
                    data={detailedAchievement} 
                    isDetailedView={true}
                    onBackClick={handleGoBack}
                />
            ) : (
                // Otherwise, show the list of all achievements.
                <>
                    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-300">My Achievements</h2>
                    <div className="achievement-list space-y-6 max-w-3xl mx-auto">
                        {achievementData.map((ach, index) => (
                            <Achievement
                                key={index}
                                data={{ ...ach, onClick: () => handleViewDetail(ach.title) }}
                                isDetailedView={false}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Achievements;
