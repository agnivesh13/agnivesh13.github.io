import React from 'react';

interface MarqueeTextProps {
  text: string;
  reverse?: boolean;
}

export default function MarqueeText({ text, reverse = false }: MarqueeTextProps) {
  const words = text.split(' ');
  
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      <div className={`flex animate-marquee${reverse ? '-reverse' : ''} hover:pause`}>
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0">
            {words.map((word, wordIndex) => (
              <div key={`${groupIndex}-${wordIndex}`} className="text-6xl font-bold mx-8 whitespace-nowrap">
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}