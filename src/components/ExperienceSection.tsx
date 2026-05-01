import { Briefcase, GraduationCap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const timeline = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA) ",
    org: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2021 - 2024",
    description:
      "Studied fundamentals of MySQL, Java, and Computer Networking during undergraduate coursework.",
  },
  {
    type: "education",
    title: "Master of Science in Computer Science (MSc CS)  ",
    org: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2024 -  2026",
    description:
      " Focused on Web Development, building scalable applications with hands-on experience through projects like Airline Booking and E-commerce systems.",
  },
  {
    type: "work",
    title: "Internship",
    org: "ILife Academy",
    period: "May 2024 - Aug 2024",
    description:
      "Developed a responsive E-commerce web application using React with routing and MySQL integration, applying JavaScript DOM concepts to build dynamic and user-friendly interfaces.",
  },
  {
    type: "work",
    title: "Internship",
    org: "VDart Academy",
    period: "Dec 2025 - Mar 2026",
    description:
      "Contributed to open-source projects and built a real-time logistics system for import/export document verification with dynamic dashboard updates and improved data handling.",
  },
];

const TimelineItem = ({ item, idx }) => {
  const reveal = useScrollReveal();

  return (
    <div
      ref={reveal.ref}
      className={`relative flex flex-col md:flex-row items-start gap-8 transition-all duration-1000 ${
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >

      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20 animate-pulse">

        {item.type === "education" ? (
          <GraduationCap size={20} className="text-primary" />
        ) : (
          <Briefcase size={20} className="text-accent" />
        )}

      </div>

      {/* Card */}
      <div
        className={`ml-20 md:ml-0 md:w-[45%] glass-card rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:glow-border hover:-translate-y-1 ${
          idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <span className="text-xs text-accent font-medium uppercase tracking-wider">
          {item.period}
        </span>

        <h3 className="font-display text-lg font-semibold text-foreground mt-1">
          {item.title}
        </h3>

        <p className="text-sm text-primary/80 mt-1">{item.org}</p>

        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const heading = useScrollReveal();

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#050510] via-black to-[#0a0a1a]"
    >

      {/* Smooth background continuation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Glow orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            My journey — learning, building, and growing 🚀
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">

          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2 shadow-lg shadow-primary/30" />

          <div className="space-y-12">
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