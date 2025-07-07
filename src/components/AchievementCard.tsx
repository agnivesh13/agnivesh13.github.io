import React from 'react';

interface AchievementCardProps {
  title: string;
  image: string;
  rotation: string;
  position: string;
}

export default function AchievementCard({ title, image, rotation, position }: AchievementCardProps) {
  return (
    <div 
      className={`min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl dark:bg-neutral-900 absolute ${position} ${rotation} hover:z-50 transition-all duration-300 hover:scale-110 cursor-pointer`}
      style={{ willChange: 'transform' }}
    >
      <img 
        src={image} 
        alt={title}
        className="pointer-events-none relative z-10 h-80 w-full object-cover rounded-lg"
      />
      <h3 className="mt-4 text-center text-lg font-bold text-neutral-700 dark:text-neutral-300">
        {title}
      </h3>
    </div>
  );
}