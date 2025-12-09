
import React from 'react';
import type { Skill } from '../types';
import useScrollAnimate from '../hooks/useScrollAnimate';

// FIX: Moved SVG icon components before they are used to resolve block-scoped variable errors.
// SVG Icons
const CodeBracketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const CircleStackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>;
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const WrenchScrewdriverIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.193-.816l-2.496 3.03zM11.42 15.17L5.877 21m6.491-9.491a2.652 2.652 0 01-3.75 0L3 11.75a2.652 2.652 0 010-3.75l5.877-5.877a2.652 2.652 0 013.75 0l5.877 5.877a2.652 2.652 0 010 3.75l-5.877 5.877z" /></svg>;
const PaintBrushIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118v-.084c-.01-.017-.017-.032-.021-.05a2.25 2.25 0 012.338-2.338h.147c.017.003.034.006.05.01a3 3 0 001.128-5.78z" /></svg>;
const CubeTransparentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
const CpuChipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.085-1.085-1.085m1.085 1.085L5.25 18l.75-1.5m9.75-3l1 1.085 1.085-1.085m-1.085 1.085l3.75 3.565-.75 1.5M9.75 18h4.5" /></svg>;
const ComputerDesktopIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>;

const skills: { category: string; list: Skill[] }[] = [
  {
    category: 'Programming',
    list: [
      { name: 'Java', icon: <CodeBracketIcon /> },
      { name: 'Python', icon: <CodeBracketIcon /> },
      { name: 'C', icon: <CodeBracketIcon /> },
      { name: 'SQL', icon: <CircleStackIcon /> },
    ],
  },
  {
    category: 'Web',
    list: [
      { name: 'HTML', icon: <CodeBracketIcon /> },
      { name: 'CSS', icon: <CodeBracketIcon /> },
      { name: 'JavaScript', icon: <CodeBracketIcon /> },
      { name: 'React JS', icon: <BoltIcon /> },
      { name: 'MERN Stack', icon: <BoltIcon /> },
    ],
  },
  {
    category: 'Tools',
    list: [
      { name: 'Unity (3D AR/VR)', icon: <CubeTransparentIcon /> },
      { name: 'Figma', icon: <PaintBrushIcon /> },
      { name: 'PowerApps', icon: <WrenchScrewdriverIcon /> },
      { name: 'SharePoint', icon: <WrenchScrewdriverIcon /> },
      { name: 'PowerPoint', icon: <ComputerDesktopIcon /> },
      { name: 'VS Code', icon: <ComputerDesktopIcon /> },
    ],
  },
  {
    category: 'Concepts',
    list: [
      { name: 'Object-Oriented Programming', icon: <CpuChipIcon /> },
      { name: 'Game Development', icon: <CubeTransparentIcon /> },
      { name: 'UI/UX Principles', icon: <PaintBrushIcon /> },
    ],
  },
];

const Skills: React.FC = () => {
    const ref = useScrollAnimate();

  return (
    <section id="skills" ref={ref} className="scroll-reveal py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="space-y-12">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillCategory.list.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="text-blue-400 mb-2">{skill.icon}</div>
                    <span className="text-white text-center text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;
