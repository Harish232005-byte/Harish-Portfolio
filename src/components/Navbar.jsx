import { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-navy-900 tracking-tight">
          {portfolioData.personal.name.split(' ')[0]}<span className="text-accent-blue">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-accent-blue transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            {portfolioData.personal.github && (
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-navy-900 px-3 py-2 rounded-full text-sm font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                title="GitHub Profile"
              >
                <Code2 size={16} />
                <span>GitHub</span>
              </a>
            )}
            {portfolioData.personal.resume && (
              <a 
                href={portfolioData.personal.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-blue transition-colors"
              >
                <FileText size={16} />
                View Resume
              </a>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-slate-700 block py-1.5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {portfolioData.personal.github && (
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                <Code2 size={16} />
                GitHub Profile
              </a>
            )}
            {portfolioData.personal.resume && (
              <a 
                href={portfolioData.personal.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                <FileText size={16} />
                View Resume
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
