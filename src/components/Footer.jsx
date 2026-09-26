import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          {portfolioData.personal.name}
        </h2>
        <p className="text-slate-400 mb-6 font-medium">
          {portfolioData.personal.title}
        </p>
        
        <div className="w-12 h-0.5 bg-slate-700 mx-auto mb-6"></div>
        
        <p className="text-sm">
          &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
