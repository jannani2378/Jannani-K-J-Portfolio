
import React, { useState } from 'react';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';
import useScrollAnimate from '../hooks/useScrollAnimate';


const projectsData: Project[] = [
  {
    title: 'Jewellery Management System',
    category: 'MERN Stack - I BACUS Technology',
    description: 'Built a full-stack MERN application to automate jewellery store operations.',
    details: [
        'Developed modules for user management, stock tracking, billing, and financial reporting.',
        'Implemented advanced features including QR/Barcode-based inventory tracking, responsive UI dashboards, and real-time data displays.',
        'Ensured secure role-based access and optimized database structures for high-volume transaction handling.',
    ],
  },
  {
    title: 'OFSAC & LEPSAC Frontend Design',
    category: 'PowerApps + SharePoint - Elgi Equipments Ltd.',
    description: 'Developed a user-facing application enabling the efficient handling of 1,000+ monthly data submissions.',
    details: [
      'Automated Excel-based reporting workflows, increasing reporting speed by 40% and reducing manual errors by 40%.',
      'Tackled data validation and submission accuracy issues during live deployment.',
      'Enhanced overall data integrity across systems.',
    ],
  },
  {
    title: 'Automated WhatsApp News Bot',
    category: 'Python',
    description: 'Built an automated news alert system delivering real-time updates via WhatsApp using Twilio API.',
     details: [
        'Integrated News Data for topic-specific news extraction.',
        'Enhanced user experience with OpenAI-based summarization.',
        'Designed for hourly delivery using Python scheduler and potential to scale into a SaaS platform.',
    ],
  },
  {
    title: 'Ghost Light Getaway',
    category: 'Unity Software',
    description: 'Designed and developed a 3D stealth game using Unity and C#.',
    details: [
        'Featured enemy AI, line-of-sight detection, and interactive environments.',
        'Implemented smooth player controls, animations, and immersive lighting to enhance visual and gameplay quality.',
        'Developed a custom UI system with health indicators, start/pause menus, and clear game feedback.',
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useScrollAnimate();

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" ref={ref} className="scroll-reveal py-20 md:py-32 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer flex flex-col justify-between min-h-[280px]"
                onClick={() => openModal(project)}
              >
                <div>
                  <span className="text-sm font-semibold text-blue-400">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                </div>
                <div className="mt-6">
                  <span className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </>
  );
};

export default Projects;