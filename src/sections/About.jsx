import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { summary } = portfolioData.personal;

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md">About Me</h2>
          <div className="w-16 h-1 bg-accent-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {summary}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
             <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="text-3xl font-bold text-navy-900 mb-1">M.Sc</div>
               <div className="text-sm text-slate-500 font-medium">AI & Data Science</div>
             </div>
             <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="text-3xl font-bold text-navy-900 mb-1">Python</div>
               <div className="text-sm text-slate-500 font-medium">Development</div>
             </div>
             <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="text-3xl font-bold text-navy-900 mb-1">ML</div>
               <div className="text-sm text-slate-500 font-medium">Algorithms</div>
             </div>
             <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <div className="text-3xl font-bold text-navy-900 mb-1">Data</div>
               <div className="text-sm text-slate-500 font-medium">Analysis</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
