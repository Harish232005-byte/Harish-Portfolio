import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  if (!portfolioData.education || portfolioData.education.length === 0) return null;

  return (
    <section id="education" className="bg-white">
      <div className="section-container max-w-4xl">
        <h2 className="heading-md">Education</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="card relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-medium text-accent-blue mb-2 flex items-center gap-2">
                    <GraduationCap size={18} />
                    {edu.institution}
                  </div>
                  {edu.location && (
                    <div className="text-slate-500 text-sm flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col md:items-end gap-2">
                  {edu.duration && (
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold whitespace-nowrap">
                      {edu.duration}
                    </span>
                  )}
                  {edu.cgpa && (
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold whitespace-nowrap">
                      {edu.cgpa.includes('%') ? `Percentage: ${edu.cgpa}` : `CGPA: ${edu.cgpa}`}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
