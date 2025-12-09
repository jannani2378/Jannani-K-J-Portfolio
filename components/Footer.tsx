import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {currentYear} Jannani K J. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;