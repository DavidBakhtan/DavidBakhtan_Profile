import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="md:hidden relative z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="w-10 h-10 text-white hover:text-blue-400 transition-colors duration-300 hover:bg-gradient-to-r from-blue-400 to-purple-500"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Slide-down mobile menu */}
      <div
        className={`absolute top-20 left-0 right-0 z-40 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 rounded-b-xl shadow-lg">
          <nav className="py-4">
            <ul className="flex flex-col divide-y divide-slate-800">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className={`
                        block px-6 py-4 text-base font-medium transition-all duration-300 border-l-4 hover:border-l-blue-400
                        ${isActive 
                          ? 'text-blue-400 border-l-blue-400 bg-blue-400/10' 
                          : 'text-white hover:text-blue-400 hover:bg-slate-800/50 border-l-transparent '
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
