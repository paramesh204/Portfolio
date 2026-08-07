import { Award, BookOpen, Coffee, Target } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import resume from "@/assets/Resume.pdf";

const stats = [
  {
    icon: Award,
    label: "Internship Experience",
    value: "2+",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BookOpen,
    label: "Academic Projects",
    value: "5+",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Target,
    label: "Technical Skills",
    value: "5+",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Coffee,
    label: "Certifications",
    value: "3+",
    color: "from-amber-500 to-orange-500",
  },
];

const AboutSection = () => {
  const heading = useScrollReveal();
  const content = useScrollReveal();
  const statsReveal = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#050510] to-[#0a0a1a]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heading.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Passionate Full Stack Developer focused on building scalable,
            responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div
            ref={content.ref}
            className={`transition-all duration-1000 ${
              content.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-purple-300">
                Open to Full Stack Developer Opportunities
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Full Stack Developer
            </h3>

            <h4 className="text-xl text-purple-400 font-semibold mb-6">
              M.Sc Computer Science Graduate
            </h4>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with expertise in
                modern web technologies including React.js, JavaScript,
                 Java, MySQL, HTML5, CSS3, and Bootstrap.
              </p>

              <p>
                Through my internship experience, I have worked on
                real-world applications involving frontend development,
                backend integration, database management, and performance
                optimization.
              </p>

              <p>
                I enjoy solving complex technical challenges and building
                efficient software solutions that deliver exceptional user
                experiences.
              </p>

              <p>
                My goal is to begin my professional career with a leading
                organization where I can contribute, learn, and grow as a
                Software Engineer.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React.js",
                "JavaScript",
                "Java",
                "MySQL",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Git",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 text-slate-300 text-sm hover:border-purple-500 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:scale-105 transition-all"
              >
                📄 View Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-700 text-white hover:border-purple-500 transition-all"
              >
                📩 Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT - STATS */}
          <div
            ref={statsReveal.ref}
            className={`grid grid-cols-2 gap-5 transition-all duration-1000 ${
              statsReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-6 text-center hover:scale-105 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon size={24} className="text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="text-slate-400 mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;