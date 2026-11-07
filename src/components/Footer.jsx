import { portfolioData } from '../data/portfolioData';
import { Users, Code2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, title, linkedin, github, email } = portfolioData.personal;

  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          {name}
        </h2>
        <p className="text-slate-400 mb-6 font-medium">
          {title}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-navy-800 hover:bg-accent-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-navy-700"
            >
              <Code2 size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-navy-800 hover:bg-accent-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-navy-700"
            >
              <Users size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-navy-800 hover:bg-accent-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-navy-700"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
        
        <div className="w-12 h-0.5 bg-slate-700 mx-auto mb-6"></div>
        
        <p className="text-sm text-slate-400">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
