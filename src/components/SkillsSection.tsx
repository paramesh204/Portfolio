import useScrollReveal from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 78 },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 72 },
    ],
  },
  {
    title: "Soft Skills",
    emoji: "🧠",
    skills: [
      { name: "Problem Solving", level: 75 },
      { name: "Communication", level: 68 },
      { name: "Team Collaboration", level: 90 },
      { name: "Adaptability", level: 92 },
    ],
  },
];

const SkillsSection = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-black to-[#050510]"
    >

      {/* Smooth background continuation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Technologies I use to build modern scalable applications
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cards.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:glow-border ${
                cards.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl mb-3">{category.emoji}</div>

              <h3 className="font-display text-lg font-semibold mb-5">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => {
                  const radius = 30;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (skill.level / 100) * circumference;

                  return (
                    <div key={skill.name} className="flex flex-col items-center">

                      {/* Circle Progress */}
                      <svg width="80" height="80">
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="6"
                          fill="none"
                        />

                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="url(#gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={cards.isVisible ? offset : circumference}
                          strokeLinecap="round"
                          style={{
                            transition: "stroke-dashoffset 1.5s ease",
                          }}
                        />

                        <defs>
                          <linearGradient id="gradient">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span className="text-sm mt-2">{skill.name}</span>
                      <span className="text-primary font-medium text-xs">
                        {skill.level}%
                      </span>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;