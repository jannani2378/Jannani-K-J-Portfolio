
import React from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const About: React.FC = () => {
    const ref = useScrollAnimate();

  return (
    <section id="about" ref={ref} className="scroll-reveal py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 text-lg text-slate-400 leading-relaxed">
            <p className="mb-4">
              Motivated final-year BCA student with hands-on experience in app development and certified Unity Software(3D) Game Developer, proficient in PowerApps, SharePoint, HTML/CSS, and Java. 
            </p>
            <p className="mb-4">
              Actively contributed to technical projects and departmental initiatives, demonstrating strong problem-solving and collaborative skills.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-slate-800/50 border border-slate-700 rounded-lg space-y-4">
            <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full"><MapPinIcon /></div>
                <p><strong>Location:</strong> Coimbatore, India</p>
            </div>
             <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full"><AcademicCapIcon /></div>
                <p><strong>Education:</strong> Final-year BCA Student</p>
            </div>
             <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-full"><HeartIcon /></div>
                <p><strong>Passion:</strong> Software Engineering & UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.672l1.318-1.354a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);


export default About;
