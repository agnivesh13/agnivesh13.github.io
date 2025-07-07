import React from "react";
import { Github, Linkedin, Twitter, Code, Menu, X } from "lucide-react";
import FloatingDock from "./components/FloatingDock";
import GridBackground from "./components/GridBackground";
import TypingAnimation from "./components/TypingAnimation";
import TechStack from "./components/TechStack";
import ProjectCard from "./components/ProjectCard";
import MarqueeText from "./components/MarqueeText";
import AchievementCard from "./components/AchievementCard";
import profileImage from "./SAVE_20241114_151606.jpg";
import trainTracImage from './Screenshot 2025-07-07 084155.png';
import webshareImage from './Screenshot 2025-07-07 084901.png';
import Indevelopimg from "./development-2.png";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const typingWords = [
    "better web solutions",
    "modern applications",
    "scalable systems",
    "user experiences",
  ];

  const projects = [
    {
      title: "Train-Trac",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and real-time inventory management.",
      image:
        trainTracImage,
      githubUrl: "https://github.com/agnivesh13/Train-Trac/tree/main/TrainTrac-main",
      liveUrl: "https://train-trac-tawny.vercel.app/",
    },
    {
      title: "VNR BLOG",
      description:
        "A dynamic blog platform for VNR VJIET students to share technical content, event recaps, and campus stories",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/agnivesh13/VNR-BLOG",
      liveUrl: "https://vnr-blog.vercel.app/",
    },
    {
      title: "Home Cloud Storage (In Progress) ",
      description:
        "A home-based cloud storage system built with React, Node.js, and Socket.io, enabling secure file access, sharing, and role-based user management across family devices.",
      image:
        Indevelopimg,
      githubUrl: "https://github.com/agnivesh13/HomeCloudStorage",
      liveUrl: "none",
    },
    {
      title: "Web Share (In progress)",
      description:
        "A cross-platform file-sharing app built with React, enabling secure peer-to-peer transfers via local network or room codes with a simple, intuitive UI.",
      image:
        webshareImage,
      githubUrl: "https://github.com/agnivesh13/WebShare",
      liveUrl: "https://web-share-psi.vercel.app/",
    },
  ];

  const achievements = [
    {
      title: "H",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[-5deg]",
      position: "top-10 left-[20%]",
    },
    {
      title: "Open Source Contributor",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[8deg]",
      position: "top-5 left-[40%]",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[10deg]",
      position: "top-32 left-[55%]",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[2deg]",
      position: "top-20 right-[35%]",
    },
    {
      title: "G",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[-7deg]",
      position: "top-24 left-[45%]",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      rotation: "rotate-[4deg]",
      position: "top-8 left-[30%]",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <FloatingDock />

      {/* Hero Section */}
      <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden">
        <GridBackground />

        <div className="w-full z-20 h-full flex flex-col justify-start gap-12">
          {/* Navigation */}
          <header className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto z-50 relative">
            <nav className="relative">
              <div className="flex items-center justify-between border border-white/10 bg-black backdrop-blur-2xl px-4 sm:px-6 py-3 sm:py-4 rounded-lg mt-4 sm:mt-6 shadow-lg">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                  Agnivesh Shaga
                </h1>

                <button
                  className="md:hidden text-white focus:outline-none p-1 rounded-md hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>

                <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
                  <a
                    href="#about"
                    className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#projects"
                    className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#contact"
                    className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/agniveshshaga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm lg:text-base text-green-400 hover:text-green-300 transition-colors duration-200 relative group"
                  >
                    LinkedIn
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-lg p-4">
                  <div className="flex flex-col space-y-3">
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#projects"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Projects
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                    <a
                      href="https://www.linkedin.com/in/agniveshshaga/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </nav>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 sm:mt-4 px-2 gap-2 sm:gap-0">
              <span className="text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
                Oh, Hello There!
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></span>
                <span className="whitespace-nowrap">Hyderabad, VNRVJIET</span>
                <span className="hidden sm:inline text-gray-500">•</span>
                <span className="whitespace-nowrap">Available for hire</span>
              </div>
            </div>
          </header>

          {/* Hero Content */}
          <main className="relative z-10 flex flex-col justify-center min-h-[60vh] px-4 md:px-8">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* Profile Image */}
              <div className="md:col-span-1 md:order-last order-first mb-8 md:mb-0 flex items-center justify-center">
                <div className="relative flex items-center justify-start">
                  <div className="md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group">
                    <div className="relative h-full w-full">
                      <div className="group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500"></div>
                      <div className="h-full w-full relative bg-gray-50 dark:bg-black">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="h-full w-full object-cover scale-[1.15] rounded-lg"
                        />
                      </div>
                      <div className="text-white absolute bottom-4 left-4 z-40">
                        <p className="font-bold text-xl">
                          Shaga Swami Agnivesh
                        </p>
                        <p className="font-normal text-sm">
                          Full stack developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Text */}
              <div className="md:col-span-2 order-last md:order-first">
                <span className="text-xl md:text-2xl text-zinc-400 block">
                  I'm
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2">
                  Swami Agnivesh<span className="text-zinc-500">,</span>
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl text-zinc-400 mb-6 md:mb-8">
                  full stack developer.
                </div>
                <div className="text-lg sm:text-xl md:text-3xl max-w-3xl flex">
                  <div className="flex justify-start items-start">
                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                      Building{" "}
                      <TypingAnimation
                        words={typingWords}
                        className="text-neutral-900 dark:text-neutral-100"
                      />
                      <br />
                      through creative web solutions.
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <ul className="flex gap-5 mt-8 md:mt-10">
                  <li>
                    <a
                      href="https://github.com/agnivesh13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors group"
                    >
                      <Github className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/agniveshshaga/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 text-zinc-700 hover:text-[#0A66C2] dark:text-zinc-400 dark:hover:text-[#0A66C2] transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Amuul13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 text-zinc-700 hover:text-[#1DA1F2] dark:text-zinc-400 dark:hover:text-[#1DA1F2] transition-colors group"
                    >
                      <Twitter className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block p-2 text-zinc-700 hover:text-[#FFA116] dark:text-zinc-400 dark:hover:text-[#FFA116] transition-colors group"
                    >
                      <Code className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* About Section Spacer */}
      <div className="h-[40rem] relative bg-black" id="about"></div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section className="bg-black text-white py-32" id="projects">
        <div className="space-y-4 max-w-full mx-auto mb-24">
          <MarqueeText text="SHOWCASE * PROJECTS * PORTFOLIO * WORKS *" />
          <MarqueeText
            text="* SHOWCASE * PROJECTS * PORTFOLIO * WORKS"
            reverse={true}
          />
        </div>

        <div className="max-w-7xl mx-auto md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="md:col-span-2">
              <ProjectCard {...projects[0]} />
            </div>
            <div className="md:col-span-1">
              <ProjectCard {...projects[1]} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <ProjectCard {...projects[2]} />
            </div>
            <div className="md:col-span-2">
              <ProjectCard {...projects[3]} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full mx-auto pb-12 bg-black">
        <div className="container px-4 mx-auto">
          <div className="mb-24 max-w-5xl mx-auto">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap text-sm bg-green-500/20 text-green-400 border-green-500/30 mb-4">
              Professional Milestones
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Achievements
            </h2>
            <p className="mt-4 max-w-[700px] text-neutral-400">
              Key milestones and recognition throughout my professional journey
              as a developer.
            </p>
          </div>

          <div className="relative flex h-[600px] max-w-7xl mx-auto w-full items-center justify-center overflow-hidden">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 z-10">
              Professional Recognition & Awards
            </p>

            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-32" id="contact">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap text-sm bg-green-500/20 text-green-400 border-green-500/30 mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>
          <a
            href="mailto:agniveshshaga@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
