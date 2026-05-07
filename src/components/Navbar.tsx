import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'PC Builder', path: '/pc-builder' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4">
              <img 
                src="/assets/logo-new.png" 
                alt="Web Pros Africa Logo" 
                className="h-16 w-auto drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all" 
              />
              <span className="font-heading font-bold text-2xl tracking-wide hidden sm:block">
                Web Pros <span className="text-wpa-blue">Africa</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-wpa-blue ${location.pathname === link.path ? 'text-wpa-blue' : 'text-gray-700 dark:text-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-wpa-blue to-wpa-purple text-white font-semibold hover:shadow-lg hover:shadow-wpa-blue/30 transition-all">
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2">
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
            </button>
            <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-wpa-blue p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-5 py-3 text-center rounded-lg bg-wpa-blue text-white font-semibold">
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
