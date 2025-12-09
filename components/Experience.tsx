
import React from 'react';
import type { ExperienceItem } from '../types';
import useScrollAnimate from '../hooks/useScrollAnimate';

const experienceData: ExperienceItem[] = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'I BACUS Technology, Coimbatore',
    period: ' Nov 2025',
    description: [
      'Built a full-stack MERN application to automate jewellery store operations including user management, stock tracking, billing, and financial reporting.',
      'Implemented advanced features including QR/Barcode-based inventory tracking, responsive UI dashboards, role-based access, and real-time data displays.',
      'Implemented secure role-based access, optimized database structures for high-volume transaction handling, and delivered responsive UI for multi-device usage.',
    ],
  },
  {
    role: 'AR VR Developer',
    company: 'PSGR Krishnammal College for Women',
    period: 'May 2025 – June 2025',
    description: [
      'Developed a VR-based factory machine simulation using Unity and Oculus Quest 2, enabling immersive hands-on training and systems.',
      'Configured XR Plugin Management and XR Interaction Toolkit, enabling tracking, teleportation locomotion and and interactive physics-based objects.',
      'Optimized performance for standalone VR by baking lighting, combining meshes, and applying occlusion culling, ensuring smooth 72+ FPS gameplay throughout.',
    ],
  },
  {
    role: 'App Developer and App Design',
    company: 'Elgi Equipments Limited',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Conducted manual testing of the "Air Select" mobile application, ensuring consistency between user interface data and backend technical specifications.',
      'Collaborated with cross-functional teams to integrate Microsoft SharePoint for data storage, enhancing retrieval efficiency by 50% and reducing manual entry errors by 40%.',
      'Documented and reported identified issues using bug tracking tools and with HTML, CSS, facilitating effective communication with the development team.',
    ],
  },
];

const Experience: React.FC = () => {
    const ref = useScrollAnimate();

  return (
    <section id="experience" ref={ref} className="scroll-reveal py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Internship Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-slate-700"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="mb-12 pl-12 md:pl-0 relative">
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'}`}>
                <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
                    <p className="text-sm text-blue-400 mb-1">{item.period}</p>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-slate-400 mb-4">{item.company}</p>
                    <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside md:list-outside">
                        {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
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
};

export default Experience;