import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  if (!portfolioData.experience || portfolioData.experience.length === 0) return null;

  return (
    <section id="experience" className="bg-white">
      <div className="section-container max-w-4xl">
        <h2 className="heading-md">Work Experience</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                {/* Timeline dot & line (mobile) */}
                <div className="md:hidden absolute left-0 top-1 w-3 h-3 bg-accent-blue rounded-full"></div>
                <div className="md:hidden absolute left-[5px] top-4 bottom-[-32px] w-0.5 bg-slate-200"></div>
                
                {/* Duration */}
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 mt-1">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
                    {exp.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-4 card relative md:-mt-4">
                  {/* Timeline dot & line (desktop) */}
                  <div className="hidden md:block absolute -left-[25px] top-8 w-3 h-3 bg-accent-blue rounded-full border-2 border-white box-content"></div>
                  
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                      {exp.role}
                      {exp.isInternship && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ml-2">
                          Internship
                        </span>
                      )}
                    </h3>
                    <div className="text-accent-blue font-medium mt-1 flex items-center gap-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4 text-slate-600">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-blue mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
