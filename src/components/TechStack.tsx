import React, { useState } from 'react';

interface TechItem {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases';
}

const techItems: TechItem[] = [
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'HTML5', category: 'languages' },
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },
  { name: 'Express', category: 'frameworks' },
  { name: 'Tailwind CSS', category: 'frameworks' },
  { name: 'Django', category: 'frameworks' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'MongoDB', category: 'databases' },
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'MySQL', category: 'databases' },
  { name: 'Redis', category: 'databases' },
  { name: 'Firebase', category: 'databases' },
  { name: 'Supabase', category: 'databases' }
];

const categories = [
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'tools', label: 'Tools' },
  { id: 'databases', label: 'Databases' }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  const filteredItems = techItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-28 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap text-sm bg-green-500/20 text-green-400 border-green-500/30 mb-4">
            Technical Proficiency
          </span>
          <h2 className="text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-zinc-400">
            A collection of technologies I've worked with and mastered throughout my journey as a developer.
          </p>
        </div>

        <div className="mb-8">
          <div className="inline-flex h-12 items-center justify-center rounded-lg p-1 bg-zinc-900/20 border border-zinc-800 w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-sm font-medium text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}