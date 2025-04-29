import { useState, useEffect } from 'react';
import { NavItem } from '../types';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 1, label: 'Features', href: '#features' },
    { id: 2, label: 'How It Works', href: '#how-it-works' },
    { id: 3, label: 'Pricing', href: '#pricing' },
    { id: 4, label: 'FAQ', href: '#faq' },
  ];

  // Handle scroll state for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="group flex items-center text-2xl font-bold">
              <div className="relative">
                <div className="absolute inset-0 bg-ai-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src="/logo.png" 
                  alt="Dev Market" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-base font-medium text-dark-500 hover:text-ai-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ai-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              className="btn btn-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Get Early Access</span>
              <span className="absolute inset-0 bg-gradient-to-r from-ai-600 to-ai-700 group-hover:scale-110 transition-transform duration-500"></span>
              <span className="absolute -inset-x-1 bottom-0 h-0.5 bg-white/30"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-dark-500 rounded-md hover:text-ai-600 hover:bg-ai-50 focus:outline-none focus:ring-2 focus:ring-ai-500 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="card-glass p-4 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-dark-500 hover:text-ai-600 hover:bg-ai-50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-ai-200 to-transparent my-2"></div>
              <a
                href="#cta"
                className="block px-4 py-3 mt-2 text-center text-white bg-ai-gradient bg-size-200 hover:bg-right-bottom rounded-lg text-base font-semibold transition-all duration-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;