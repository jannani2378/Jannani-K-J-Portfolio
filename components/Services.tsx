import React from 'react';
import type { Service } from '../types';
import useScrollAnimate from '../hooks/useScrollAnimate';


// FIX: Moved SVG icon components before they are used to resolve block-scoped variable errors.
// SVG Icons
const CodeBracketSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>;
const DevicePhoneMobileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" /></svg>;
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;

const servicesData: Service[] = [
  {
    icon: <CodeBracketSquareIcon />,
    title: 'Software Development',
    description: 'Building robust and scalable software solutions tailored to solve complex business problems effectively.',
  },
  {
    icon: <DevicePhoneMobileIcon />,
    title: 'App Development',
    description: 'Specializing in PowerApps and SharePoint integration to create powerful, automated business applications.',
  },
  {
    icon: <BoltIcon />,
    title: 'MERN Stack Development',
    description: 'Crafting modern, full-stack web applications with a focus on performance and seamless user experiences.',
  },
];

const Services: React.FC = () => {
  const ref = useScrollAnimate();

  return (
    <section id="services" ref={ref} className="scroll-reveal py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">What I Offer</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-slate-800/40 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;