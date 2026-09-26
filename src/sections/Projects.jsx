import { portfolioData } from '../data/portfolioData';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  if (!portfolioData.projects || portfolioData.projects.length === 0) return null;

  return (
    <section id="projects" className="bg-slate-50">
      <div className="section-container">
        <h2 className="heading-md">Featured Projects</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full group hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                <FolderGit2 size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                {project.title}
              </h3>
              
              <ul className="space-y-2 mb-6 text-slate-600 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-blue mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
