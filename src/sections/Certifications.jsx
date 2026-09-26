import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Certifications() {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="bg-slate-50">
      <div className="section-container">
        <h2 className="heading-md">Certifications & Training</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="card flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent-blue mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 text-slate-600 text-sm mt-2">
                {cert.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-300 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
