import React from 'react';
import { Home, FileText, Code, Linkedin, Twitter, Github } from 'lucide-react';

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const dockItems: DockItem[] = [
  {
    title: 'Home',
    icon: <Home className="h-5 w-5" />,
    href: '#'
  },
  {
    title: 'Resume',
    icon: <FileText className="h-5 w-5" />,
    href: '/resume1.pdf'
  },
  {
    title: 'Projects',
    icon: <Code className="h-5 w-5" />,
    href: '#projects'
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/agniveshshaga/'
  },
  {
    title: 'X',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://x.com/Amuul13'
  },
  {
    title: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/agnivesh13'
  }
];

export default function FloatingDock() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 border border-neutral-200 dark:border-neutral-800">
        {dockItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : '_self'}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
            className="group relative"
            title={item.title}
          >
            <div className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative w-10 h-10 hover:w-12 hover:h-12 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-neutral-700">
              <div className="flex items-center justify-center text-neutral-500 dark:text-neutral-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-100 transition-colors">
                {item.icon}
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="md:hidden">
        <button className="h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
          <Home className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
    </div>
  );
}