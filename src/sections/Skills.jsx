import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50">
      <div className="section-container">
        <h2 className="heading-md">Technical Skills</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div key={index} className="card group">
              <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-accent-blue transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
