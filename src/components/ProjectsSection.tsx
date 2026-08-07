import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Code2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Assets
import mixtasImg from "../assets/Mixtas.jpg";
import auditImg from "../assets/audit.png";

interface Project {
  title: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  status: "Live" | "In Progress" | "Completed";
}

const projects: Project[] = [
  {
    title: "Employee Management Ecosystem",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "A comprehensive enterprise solution featuring full CRUD capabilities, cloud-synchronized MySQL database, and secure backend architecture.",
    tags: ["Java", "Spring Boot", "MySQL", "Docker", "Render"],
    github: "https://github.com/paramesh204/employeeCrudOperation.git",
    live: "https://employeecrudoperation.onrender.com/",
    status: "Live",
  },
  {
    title: "AI Logistics Audit System",
    image: auditImg,
    description:
      "Advanced invoice validation module using OCR technology to automate data extraction. Features real-time matching logic and an interactive audit dashboard.",
    tags: ["React.js", "Socket.io", "OpenAI", "Node.js"],
    github: "https://github.com/paramesh204/Invoice_Validator.git",
    live: "https://github.com/paramesh204/Invoice_Validator.git",
    status: "In Progress",
  },
  {
    title: "Mixtas Fashion E-Commerce",
    image: mixtasImg,
    description: "High-performance lifestyle fashion store featuring dynamic product filtering, responsive design, and modern checkout experience.",
    tags: ["JavaScript", "React.js", "Bootstrap", "AOS"],
    github: "https://github.com/paramesh204/E-Commerce-Mixtas-.git",
    live: "https://paramesh204.github.io/E-Commerce-Mixtas-/",
    status: "Live",
  },
  {
    title: "Predictive Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    description: "Dynamic weather visualization tool utilizing RESTful APIs to provide real-time forecasts, atmospheric data, and interactive maps.",
    tags: ["React", "OpenWeather API", "Postman", "CSS3"],
    github: "https://github.com/paramesh204/WeatherApp.git",
    live: "https://endearing-wisp-067739.netlify.app/",
    status: "Live",
  },
];

const statusConfig = {
  Live: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
  "In Progress": "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
  Completed: "bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
};

/* ----------------------------- Project Card ----------------------------- */

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Visual Identity Layer */}
      <div className="absolute -inset-px bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Section */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {/* Skeleton Loader */}
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-800" />
        )}
        
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
            imgLoaded ? "scale-100" : "scale-110 blur-sm"
          }`}
        />

        {/* Floating Status Badge */}
        <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${statusConfig[project.status]}`}>
          <span className={`h-1.5 w-1.5 rounded-full bg-current ${project.status !== "Completed" ? "animate-pulse" : ""}`} />
          {project.status}
        </div>

        {/* Advanced Hover Overlay */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0"
        >
          <div className="px-6 py-2.5 bg-white text-black rounded-full flex items-center gap-2 text-sm font-bold shadow-2xl hover:scale-105 transition-transform">
            Launch Deployment
            <ArrowUpRight size={18} />
          </div>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 min-h-[40px]">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-white/5 text-slate-300 border border-white/10 group-hover:border-purple-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-purple-400 transition-colors"
          >
            <Github size={18} />
            SOURCE CODE
          </a>
          
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink size={18} />
            LIVE DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------- Projects Section ---------------------------- */

const ProjectsSection = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden bg-[#030308]">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div
          ref={heading.ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Layers size={14} className="text-cyan-400" />
            <span className="text-xs text-slate-300 font-bold tracking-widest uppercase">Portfolio Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Building robust digital solutions with a focus on clean architecture, 
            performance, and user-centric design.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={cards.isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <a 
                href="https://github.com/paramesh204" 
                target="_blank" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105"
            >
                <Code2 size={20} className="text-purple-400" />
                View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;