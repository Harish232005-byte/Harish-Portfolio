import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Users, Code2, Send } from 'lucide-react';

export default function Contact() {
  const { email, phone, linkedin, github } = portfolioData.personal;

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="heading-md">Get In Touch</h2>
        <div className="w-16 h-1 bg-accent-blue mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Let's Connect</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm currently seeking new opportunities to apply my technical skills and contribute to data-driven solutions. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors border border-slate-100">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <p className="text-navy-900 font-semibold group-hover:text-accent-blue transition-colors">{email}</p>
                  </div>
                </a>
              )}
              
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors border border-slate-100">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                    <p className="text-navy-900 font-semibold group-hover:text-accent-blue transition-colors">{phone}</p>
                  </div>
                </a>
              )}
              
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors border border-slate-100">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                    <p className="text-navy-900 font-semibold group-hover:text-accent-blue transition-colors">Connect on LinkedIn</p>
                  </div>
                </a>
              )}
              
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors border border-slate-100">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">GitHub</p>
                    <p className="text-navy-900 font-semibold group-hover:text-accent-blue transition-colors">View Profile</p>
                  </div>
                </a>
              )}
            </div>
          </div>
          
          {/* Contact Form Placeholder */}
          <div className="card">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Send me a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors bg-slate-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors bg-slate-50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors bg-slate-50 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-accent-blue transition-colors mt-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
