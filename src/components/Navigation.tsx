
import { Link, useLocation } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          <div className="w-12 h-12">
              <div
                className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-rotate-cycle"
                style={{
                  WebkitMaskImage: 'url(Untitled-5.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(Untitled-5.png)',
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  maskPosition: 'center',
                }}
              />
            </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  px-4 py-2 rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'text-blue-400' 
                    : 'text-slate-200 hover:text-white'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
