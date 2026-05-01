import { Award, BookOpen, Coffee, Target } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import resume from "@/assets/resume.pdf";

const stats = [
  { icon: Coffee, label: "Projects Completed", value: "25+", color: "from-primary to-accent" },
  { icon: Award, label: "Certifications", value: "8", color: "from-accent to-primary" },
  { icon: BookOpen, label: "Years Learning", value: "3+", color: "from-primary to-pink-500" },
  { icon: Target, label: "Technologies", value: "15+", color: "from-pink-500 to-primary" },
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

      {/* Smooth transition glow from hero */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A quick overview of who I am and what drives me
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div
            ref={content.ref}
            className={`space-y-6 transition-all duration-1000 ${
              content.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I'm a dedicated software developer with a strong foundation in
              computer science and a passion for building clean, efficient, and
              user-centric applications. Currently pursuing my academic growth
              while actively contributing to real-world projects.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I thrive in collaborative environments and love solving complex
              problems with elegant solutions. My goal is to join an innovative
              MNC where I can make meaningful contributions while growing as a
              professional.
            </p>

            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
            >
              📄 View Resume
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsReveal.ref}
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              statsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center transition-all duration-500 hover:scale-105 hover:glow-border hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-3 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon
                    className="text-white transition-transform duration-300 group-hover:scale-110"
                    size={20}
                  />
                </div>

                <div className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;