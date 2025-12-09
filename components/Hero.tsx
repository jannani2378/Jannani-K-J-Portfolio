import React, { useState, useEffect } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const codeLines = [
  { text: 'class ', type: 'keyword' },
  { text: 'Jannani ', type: 'class' },
  { text: '{', type: 'default' },
  { text: '  public String ', type: 'keyword' },
  { text: 'role', type: 'method' },
  { text: '() {', type: 'default' },
  { text: '    return ', type: 'keyword' },
  { text: '"Software Developer"', type: 'string' },
  { text: ';', type: 'default' },
  { text: '  }', type: 'default' },
  { text: '  public String[] ', type: 'keyword' },
  { text: 'skills', type: 'method' },
  { text: '() {', type: 'default' },
  { text: '    return new String[] {', type: 'keyword' },
  { text: '"Java"', type: 'string' },
  { text: ', ', type: 'default' },
  { text: '"Python"', type: 'string' },
  { text: ', ', type: 'default' },
  { text: '"MERN Stack"', type: 'string' },
  { text: '};', type: 'default' },
  { text: '  }', type: 'default' },
  { text: '}', type: 'default' },
];

const typingDelay = 50;

const Hero: React.FC = () => {
  const ref = useScrollAnimate();
  const [typedCode, setTypedCode] = useState<React.ReactNode[]>([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    let lineIndex = 0;
    let currentLine = '';

    const type = () => {
      if (lineIndex < codeLines.length) {
        const currentSegment = codeLines[lineIndex];
        if (charIndex < currentSegment.text.length) {
          currentLine += currentSegment.text[charIndex];
          
          const newTypedCode = codeLines.slice(0, lineIndex).map((seg, i) => (
            <span key={i} className={getColor(seg.type)}>{seg.text}</span>
          ));
          newTypedCode.push(<span key={lineIndex} className={getColor(currentSegment.type)}>{currentLine}</span>);

          setTypedCode(newTypedCode);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          charIndex = 0;
          currentLine = '';
          lineIndex++;
          setTimeout(type, typingDelay);
        }
      } else {
        setIsTypingComplete(true);
      }
    };
    
    // Start typing after a short delay
    const timeoutId = setTimeout(type, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const getColor = (type: string) => {
    switch (type) {
      case 'keyword': return 'text-cyan-400';
      case 'class': return 'text-yellow-400';
      case 'method': return 'text-green-400';
      case 'string': return 'text-orange-400';
      default: return 'text-slate-400';
    }
  };
  
  const formattedCode = typedCode.map((node, index) => {
    // FIX: Check if node is a valid React element and if its props contain a string 'children' property before access.
    if (React.isValidElement(node) && node.props && typeof (node.props as any).children === 'string') {
        const children = (node.props as any).children as string;
        if (children.includes('{')) {
            return <React.Fragment key={index}>{node}<br/><span className="pl-4"></span></React.Fragment>;
        }
        if (children.includes('}')) {
            const parts = children.split('}');
            return (
                <React.Fragment key={index}>
                    {parts[0].trim() && <><br />{parts[0].trim()}</>}
                    }<br/>
                </React.Fragment>
            );
        }
    }
    return node;
  });

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
        const response = await fetch('/jannani_kj_resume.txt');
        if (!response.ok) throw new Error('Resume file not found');
        const resumeText = await response.text();

        const { jsPDF } = (window as any).jspdf;
        if (!jsPDF) {
            alert('Could not generate PDF. The jsPDF library is missing.');
            return;
        }
        const doc = new jsPDF('p', 'pt', 'a4');

        const margin = 40;
        const usableWidth = doc.internal.pageSize.getWidth() - margin * 2;
        let y = margin;

        const lines = resumeText.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
            if (y > doc.internal.pageSize.getHeight() - margin) {
                doc.addPage();
                y = margin;
            }

            if (line.startsWith('#HD1# ')) {
                doc.setFontSize(24).setFont('helvetica', 'bold');
                doc.text(line.substring(6), margin, y);
                y += 25;
            } else if (line.startsWith('#HD2# ')) {
                doc.setFontSize(10).setFont('helvetica', 'normal');
                doc.text(line.substring(6), margin, y);
                y += 15;
                doc.setDrawColor(200, 200, 200);
                doc.line(margin, y, doc.internal.pageSize.getWidth() - margin, y);
                y += 20;
            } else if (line.startsWith('## ')) {
                y += 10;
                doc.setFontSize(14).setFont('helvetica', 'bold');
                doc.text(line.substring(3).toUpperCase(), margin, y);
                y += 5;
                doc.setDrawColor(150, 150, 150);
                doc.line(margin, y, doc.internal.pageSize.getWidth() - margin, y);
                y += 15;
            } else if (line.startsWith('#SH# ')) {
                doc.setFontSize(11).setFont('helvetica', 'bold');
                const textLines = doc.splitTextToSize(line.substring(5), usableWidth);
                doc.text(textLines, margin, y);
                y += textLines.length * 12 + 2;
            } else if (line.startsWith('#ST# ')) {
                doc.setFontSize(10).setFont('helvetica', 'italic');
                const textLines = doc.splitTextToSize(line.substring(5), usableWidth);
                doc.text(textLines, margin, y);
                y += textLines.length * 10 + 4;
            } else if (line.startsWith('#LI# ')) {
                doc.setFontSize(10).setFont('helvetica', 'normal');
                const textLines = doc.splitTextToSize(line.substring(5), usableWidth - 15);
                doc.text('•', margin, y, { baseline: 'top' });
                doc.text(textLines, margin + 15, y);
                y += textLines.length * 12 + 2;
            } else if (line.startsWith('#P# ')) {
                doc.setFontSize(10).setFont('helvetica', 'normal');
                const textLines = doc.splitTextToSize(line.substring(4), usableWidth);
                doc.text(textLines, margin, y);
                y += textLines.length * 12 + 5;
            }
        }

        doc.save('Jannani_KJ_Resume.pdf');
    } catch (error) {
        console.error('Failed to download resume:', error);
        alert('Sorry, the resume could not be downloaded at this time.');
    }
  };

  return (
    <section id="home" ref={ref} className="scroll-reveal min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Jannani K J
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mt-2 mb-6">
            Aspiring Software Developer
          </p>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Final-year BCA student crafting user-centered digital solutions with a blend of clean design and functional engineering.
          </p>
          
          <div className="font-mono text-left bg-slate-800/50 border border-slate-700 rounded-lg p-6 max-w-xl mx-auto my-12 text-sm md:text-base whitespace-pre-wrap shadow-lg">
            <code>
              {formattedCode}
              <span className="blinking-cursor">|</span>
            </code>
          </div>

          <div className="flex justify-center">
            <a href="#" onClick={handleDownload} className="glow-on-hover bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;