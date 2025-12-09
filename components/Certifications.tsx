
import React from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';
import type { CertificationItem, AwardItem } from '../types';

const certificationData: CertificationItem[] = [
  { title: 'Unity Certified Associate Game Developer', issuer: 'Unity Technologies' },
  { title: 'Unity Essentials Certification', issuer: 'Unity Technologies' },
  { title: 'Python Programming CS106A', issuer: 'Stanford University' },
  { title: 'Database Management System', issuer: 'NPTEL' },
  { title: 'AWS Cloud Technical Essentials', issuer: 'United Latino Students Association, Coursera' },
];

const awardsData: AwardItem[] = [
    { 
        title: 'Active Participation Recognition',
        context: 'BCA Department, YRC Club (2023-2025)',
        description: 'Recognized for active participation in department initiatives for academic years 2023-2025.' 
    },
    { 
        title: 'Top Scorer & Proficiency Certifications',
        context: 'PSGR Krishnammal College for Women (2023-2025)',
        description: 'Awarded proficiency certifications for core subjects and recognized as a top scorer for the academic years 2023-2024 and 2024-2025.'
    },
    { 
        title: 'Hackathons & Technical Expos Awards',
        context: 'Various Events',
        description: 'Actively participated and secured awards for innovative solutions and paper presentations in various hackathons and technical expos.'
    },
]

const Certifications: React.FC = () => {
  const ref = useScrollAnimate();

  return (
    <section id="certifications" ref={ref} className="scroll-reveal py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Certifications & Awards</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center md:text-left">Courses & Certifications</h3>
                <div className="space-y-4">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="bg-slate-800/50 p-4 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors">
                            <p className="font-bold text-white">{cert.title}</p>
                            <p className="text-sm text-slate-400">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center md:text-left">Awards & Recognitions</h3>
                <div className="space-y-4">
                    {awardsData.map((award, index) => (
                        <div key={index} className="bg-slate-800/50 p-4 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors">
                            <p className="font-bold text-white">{award.title}</p>
                            <p className="text-sm text-slate-400 mb-2">{award.context}</p>
                            <p className="text-sm text-slate-400">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
