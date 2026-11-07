import { portfolioData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  if (!portfolioData.projects || portfolioData.projects.length === 0) return null;

  return (
    <section id="projects" className="bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-md !mb-3">Featured Projects</h2>
          <div className="w-16 h-1 bg-accent-blue mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            A showcase of my projects across Natural Language Processing, MLOps, Computer Vision, and Data Engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 border border-slate-100/80 hover:border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <FolderGit2 size={24} />
                </div>
                {project.category && (
                  <span className="text-xs font-semibold text-accent-blue bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-2 leading-snug group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>

              {project.description && (
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {project.description}
                </p>
              )}
              
              <ul className="space-y-2 mb-6 text-slate-600 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="text-accent-blue mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-2 py-2 px-3.5 rounded-lg text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-navy-900 hover:text-white transition-all duration-200 border border-slate-200 group/btn"
                  >
                    <Code2 size={14} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>View on GitHub</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
