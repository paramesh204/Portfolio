import React from "react";
import { Briefcase, GraduationCap, Sparkles, Rocket, Server } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface TimelineEntry {
  type: "education" | "internship" | "work";
  title: string;
  org: string;
  period: string;
  description: string;
  current?: boolean;
}

const timeline: TimelineEntry[] = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    org: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2021 - 2024",
    description:
      "Studied fundamentals of MySQL, Java, and Computer Networking during undergraduate coursework.",
  },
  {
    type: "education",
    title: "Master of Science in Computer Science (MSc CS)",
    org: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2024 - 2026",
    description:
      "Specializing in Web Development and Scalable Architectures. Projects include Airline Booking systems and full-stack E-commerce platforms.",
    //current: true,
  },
  {
    type: "internship",
    title: "Web Development Intern",
    org: "ILife Academy",
    period: "May 2024 - Aug 2024",
    description:
      "Developed a responsive E-commerce web application using React. Integrated MySQL and applied JavaScript DOM manipulation to build dynamic user interfaces.",
  },
  {
    type: "internship",
    title: "Fullstack Developer Intern",
    org: "VDart Academy",
    period: "Dec 2025 - Mar 2026",
    description:
      "Contributed to open-source projects and engineered a real-time logistics system for document verification with dynamic dashboard updates.",
  },
  {
    type: "work",
    title: "Backend Network Operations Associate",
    org: "TATA Tele Business Services",
    period: "Jun 2026 - Present",
    description:
      "Managing backend network infrastructure and collaborating with technical vendors to ensure high-availability services. Focused on optimizing backend systems and troubleshooting network-side operations within the TATA ecosystem.",
    current: true,
  },
];

/* ----------------------------- Config Mapping ----------------------------- */

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: "text-purple-400",
    iconColor: "text-purple-300",
    bgGradient: "from-purple-500/30 to-fuchsia-500/30",
    borderColor: "border-purple-500",
    shadow: "shadow-purple-500/20",
    glow: "from-purple-600 to-fuchsia-600",
  },
  internship: {
    icon: Rocket,
    color: "text-amber-400",
    iconColor: "text-amber-300",
    bgGradient: "from-amber-500/30 to-orange-500/30",
    borderColor: "border-amber-500",
    shadow: "shadow-amber-500/20",
    glow: "from-amber-600 to-orange-600",
  },
  work: {
    icon: Server, // Server icon fits networking/backend work well
    color: "text-cyan-400",
    iconColor: "text-cyan-300",
    bgGradient: "from-cyan-500/30 to-emerald-500/30",
    borderColor: "border-cyan-500",
    shadow: "shadow-cyan-500/20",
    glow: "from-cyan-600 to-emerald-600",
  },
};

/* ----------------------------- Timeline Item ----------------------------- */

const TimelineItem = ({ item, idx }: { item: TimelineEntry; idx: number }) => {
  const reveal = useScrollReveal();
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <div
      ref={reveal.ref}
      className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 transition-all duration-1000 ${
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      {/* Icon Circle */}
      <div
        className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border flex items-center justify-center z-10 shadow-lg transition-all duration-500 bg-slate-950 ${
          config.bgGradient
        } ${config.borderColor} ${config.shadow} ${
          reveal.isVisible ? "scale-100" : "scale-0"
        }`}
        style={{ transitionDelay: `${idx * 100 + 200}ms` }}
      >
        {item.current && (
          <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${config.borderColor.replace('border', 'bg')}`} />
        )}
        <Icon size={20} className={`relative ${config.iconColor}`} />
      </div>

      {/* Card */}
      <div
        className={`group relative ml-20 md:ml-0 md:w-[45%] rounded-2xl border bg-slate-900/50 backdrop-blur-xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden border-slate-800 ${
          idx % 2 === 0 ? "md:mr-auto text-left" : "md:ml-auto text-left"
        }`}
      >
        {/* Hover Glow */}
        <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${config.glow}`} />

        {/* Badge for Current Role */}
        {item.current && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Current
          </span>
        )}

        <span className={`relative text-xs font-bold uppercase tracking-widest ${config.color}`}>
          {item.period}
        </span>

        <h3 className="relative text-lg sm:text-xl font-bold text-white mt-2">
          {item.title}
        </h3>
        
        <p className={`relative text-sm font-medium mt-1 ${config.color} opacity-90`}>
          {item.org}
        </p>

        <p className="relative text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

/* --------------------------- Experience Section --------------------------- */

const ExperienceSection = () => {
  const heading = useScrollReveal();
  const lineWrap = useScrollReveal();

  return (
    <section id="experience" className="relative py-20 sm:py-32 overflow-hidden bg-[#030308]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div
          ref={heading.ref}
          className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs text-slate-300 font-medium tracking-wide">My Professional Timeline</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div ref={lineWrap.ref} className="max-w-5xl mx-auto relative">
          {/* Vertical Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 md:-translate-x-1/2" />

          {/* Animated Gradient Fill */}
          <div
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-amber-500 to-cyan-500 md:-translate-x-1/2 shadow-lg transition-all duration-[2500ms] ease-in-out"
            style={{ height: lineWrap.isVisible ? "100%" : "0%" }}
          />

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;