import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-accent-indigo/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-accent-blue font-medium text-sm mb-6 border border-blue-100">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-900 leading-tight mb-4">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
            {personal.title}
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
            {personal.summary.split('. ')[0]}. {personal.summary.split('. ')[1]}.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-navy-900 text-white px-6 py-3.5 rounded-full font-medium hover:bg-navy-800 transition-all hover:-translate-y-1">
              View My Projects
              <ArrowRight size={18} />
            </a>
            {personal.resume && (
              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-navy-900 border border-slate-200 px-6 py-3.5 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm">
                <Download size={18} />
                Download Resume
              </a>
            )}
            <a href="#contact" className="flex items-center gap-2 text-slate-600 px-6 py-3.5 rounded-full font-medium hover:text-navy-900 transition-colors">
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={personal.photo} 
              alt={personal.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements behind image */}
          <div className="absolute -z-10 top-4 right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-indigo opacity-20 transform -rotate-6"></div>
        </div>
      </div>
    </section>
  );
}
