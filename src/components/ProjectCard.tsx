import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  size?: 'large' | 'small';
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  githubUrl, 
  liveUrl, 
  size = 'large' 
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-100 dark:bg-black overflow-hidden h-60 md:h-96 w-full rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-2">
          {title}
        </div>
        <p className="text-neutral-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {description}
        </p>
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
          >
            <Github size={16} />
            <span className="text-sm">Source Code</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}