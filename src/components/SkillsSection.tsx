import React, { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
  accent: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "🎨",
    description:
      "Creating responsive, interactive, and user-friendly web interfaces.",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "Bootstrap", level: 88 },
      { name: "React.js", level: 60 },
    ],
    accent: "from-purple-600 to-cyan-600",
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Building application logic and integrating server-side functionality.",
    skills: [
      { name: "Mern Stack", level: 80 },
      { name: "Core Java", level: 70 },
      { name: "REST APIs", level: 50 },
    ],
    accent: "from-fuchsia-600 to-purple-600",
  },
  {
    title: "Database Management",
    icon: "🗄️",
    description:
      "Managing structured data and connecting applications with databases.",
    skills: [{ name: "MySQL", level:  75},
      { name: "MongoDB", level: 70 }

    ],
    accent: "from-cyan-600 to-emerald-600",
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    description:
      "Development tools used for coding, collaboration, and deployment.",
    skills: [
     
      { name: "GitHub", level: 60 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 78 },
    ],
    accent: "from-amber-500 to-orange-600",
  },
];

/* ------------------------------ Skill Bar ------------------------------ */

const SkillBar = ({
  skill,
  accent,
  visible,
  delay,
}: {
  skill: Skill;
  accent: string;
  visible: boolean;
  delay: number;
}) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs sm:text-sm text-slate-300 font-medium">
        {skill.name}
      </span>
      <span className="text-xs text-slate-500">{skill.level}%</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${accent} transition-all duration-1000 ease-out`}
        style={{
          width: visible ? `${skill.level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

/* --------------------------- Skill Card --------------------------- */

const SkillCard = ({
  category,
  index,
  isVisible,
}: {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transitionDelay: `${index * 120}ms`,
        transform: isVisible
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
      }}
      className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Glow accent on hover */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Icon */}
      <div className="relative text-4xl sm:text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        {category.icon}
      </div>

      {/* Title */}
      <h3 className="relative text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
        {category.title}
      </h3>

      {/* Description */}
      <p className="relative text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
        {category.description}
      </p>

      {/* Skill bars */}
      <div className="relative">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            accent={category.accent}
            visible={isVisible}
            delay={i * 100}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------------------------- Skills Section ---------------------------- */

const SkillsSection = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );
  const avgLevel = Math.round(
    skillCategories.reduce(
      (acc, cat) =>
        acc + cat.skills.reduce((s, sk) => s + sk.level, 0),
      0
    ) / totalSkills
  );

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-black to-[#050510]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            heading.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-5">
            <span className="text-xs sm:text-sm text-purple-300 font-medium">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Technologies and tools I have worked with through academic
            projects, internship experience, and continuous learning.
          </p>

          {/* Live stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {totalSkills}+
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Technologies
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {skillCategories.length}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Core areas
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {avgLevel}%
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Avg proficiency
              </p>
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isVisible={cards.isVisible}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl px-6 sm:px-8 py-5 sm:py-6 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
              Continuous Learning
              <span className="inline-block animate-bounce">🚀</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              I continuously improve my technical skills by building projects,
              exploring new technologies, and staying updated with modern web
              development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;