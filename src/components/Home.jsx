import { Link, useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects');
    };

    return (
        <div className="home flex flex-col items-center justify-center text-center min-h-[60vh] p-8">
            <div className="home__header">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Welcome to My Page
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                    This is a creative implementation of your React application, styled with Tailwind CSS to be modern and visually appealing.
                </p>

                <div className="text-center mt-8">
                    <button
                        className="inline-block bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
                        onClick={handleNavigate}
                    >
                        CheckOut My Projects
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;