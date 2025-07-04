
import { Link } from 'react-router-dom';

const ExperienceNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Portfolio
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
          <Link to="/skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition-colors duration-300">Portfolio</Link>
          <Link to="/experience" className="text-blue-400">Experience</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default ExperienceNav;
