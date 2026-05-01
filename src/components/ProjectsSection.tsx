import { ExternalLink, Github } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import mixtasImg from "../assets/Mixtas.jpg";
import auditImg from "../assets/audit.png"

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    description: "Full-stack shopping platform with payment integration.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/paramesh204/WeatherApp.git",
    live: "https://endearing-wisp-067739.netlify.app/",
  },
  {
    title: "Logistics Audit System (Invoice Validation Module)",
    image: auditImg,
    description: "Developed a logistics auditing module that validates invoice and declaration data by extracting details from scanned PDFs using OCR. Implemented automated matching logic to compare declaration numbers and dates, reducing manual verification effort. Built a real-time dashboard to track approval status and streamline audit workflows.",
    tags: ["TypeScript", "Socket.io", "OpenAI"],
    github: "https://github.com/paramesh204/Invoice_Validator.git",
    live: "https://github.com/paramesh204/Invoice_Validator.git",
  },
  {
    title: "E-Commerce-Mixtas-(Fashion Websites)",
    image: mixtasImg,
    description: "Fashion Store Life-style project management tool.",
    tags: ["JavaScript", "React.js", "Bootstrap"],
    github: "https://github.com/paramesh204/E-Commerce-Mixtas-.git",
    live: "https://paramesh204.github.io/E-Commerce-Mixtas-/",
  },
  {
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    description: "Weather app with forecasts and maps.",
    tags: ["React", "REST API", "Postman(API)"],
    github: "https://github.com/paramesh204/WeatherApp.git",
    live: "https://endearing-wisp-067739.netlify.app/",
  },
];

const ProjectsSection = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-black to-[#050510]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${heading.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real-world work with modern technologies 🚀
          </p>
        </div>

        {/* Cards */}
        <div ref={cards.ref} className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block rounded-2xl overflow-hidden glass-card transition-all duration-700 hover:scale-[1.04] hover:glow-border ${cards.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
                }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold tracking-wide">
                    View Project
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gradient transition">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-5 mt-6">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;