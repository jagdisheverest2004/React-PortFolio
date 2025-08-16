import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useLocation } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from "./components/team";
import ErrorPage from "./components/ErrorPage";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

// A custom NavLink component to handle the active state styling
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <RouterLink to={to} className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-gray-300 hover:text-white'}`}>
        {children}
        {isActive && (<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-cyan-400 rounded-full"></span>)}
      </RouterLink>
    </li>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-slate-900 text-white font-sans flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-purple-600 via-transparent to-transparent rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tl from-cyan-500 via-transparent to-transparent rounded-full animate-pulse animation-delay-4000 opacity-30"></div>
        </div>
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 z-10">
          <header className="w-full flex justify-between items-center p-4 mb-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-2xl">
            <h1 className="text-2xl font-bold text-white tracking-wider">My App</h1>
            <nav>
              <ul className="flex items-center space-x-2 sm:space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                {/* Added the Team nav link here */}
                {/*<NavLink to="/about/team">Team</NavLink>*/}
                <NavLink to="/achievements">Achievements</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </ul>
            </nav>
          </header>
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}>
                {/* This nested route will be rendered by the <Outlet /> in About.jsx */}
                <Route path="team" element={<Team />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </div>
      <style>{`.animation-delay-4000 { animation-delay: 4s; }`}</style>
    </Router>
  );
}

export default App;