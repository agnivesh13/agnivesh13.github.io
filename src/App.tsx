import About from './components/About';
import CodingProfiles from './components/CodingProfiles';
import Events from './components/Events';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-300">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <CodingProfiles />
        <Projects />
        <Events />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
