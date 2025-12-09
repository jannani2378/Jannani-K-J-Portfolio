import React, { useState } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const ref = useScrollAnimate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:jannanikj77@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={ref} className="scroll-reveal py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
            <p className="text-slate-400 mb-8">Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always open to discussing new projects and ideas.</p>
            <div className="space-y-4">
              <a href="tel:+919342756168" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                <PhoneIcon />
                <span>+91 9342756168</span>
              </a>
              <a href="mailto:jannanikj77@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                <EnvelopeIcon />
                <span>jannanikj77@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/jannanikj77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                <LinkedInIcon />
                <span>linkedin.com/in/jannanikj77</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full glow-on-hover bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
                Send Message
              </button>
              <p className="text-center text-xs text-slate-500 pt-2">Note: This will open your default email application.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// Icons
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const EnvelopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.97v16h4.97v-7.934c0-2.022.99-3.969 3.235-3.969 2.21 0 2.765 1.743 2.765 3.969v7.934h4.97v-10.138c0-4.87-2.73-7.01-6.28-7.01s-5.694 2.14-6.68 4.226z"/></svg>;


export default Contact;