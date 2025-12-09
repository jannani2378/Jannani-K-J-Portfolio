
import React from 'react';
import type { EducationItem } from '../types';
import useScrollAnimate from '../hooks/useScrollAnimate';

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'PSGR Krishnammal College for Women',
    graduation: 'Graduation: Apr 2026',
    details: 'CGPA - 8.9',
  },
  {
    degree: 'HSC, Tamil Nadu State Board',
    institution: 'Tamil Nadu 2023',
    graduation: 'Graduation: May 2023',
    details: 'PERCENTAGE - 90',
  },
];

const Education: React.FC = () => {
    const ref = useScrollAnimate();

  return (
    <section id="education" ref={ref} className="scroll-reveal py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
          {educationData.map((item, index) => (
            <div key={index} className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="p-4 rounded-lg shadow-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="mb-1 font-bold text-white text-lg">{item.degree}</h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-400 mb-1">{item.institution}</p>
                    <p className="text-xs text-slate-500 mb-2">{item.graduation}</p>
                    <p className="text-sm font-semibold text-blue-400">{item.details}</p>
                </div>
              </div>
              <div className="z-10 flex items-center bg-blue-500 shadow-xl w-8 h-8 rounded-full absolute left-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.747-6.99H17.747" />
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
