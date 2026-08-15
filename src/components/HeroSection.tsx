import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import profilePhoto from "@/assets/paramesh.png";

const HeroSection = () => {
  // Resume download handler
  const handleDownloadResume = () => {
    window.open("/path-to-your-resume.pdf", "_blank");
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/paramesh04/" },
    { icon: Mail, href: "mailto:shreeparamesh204@gmail.com" },
    { icon: Github, href: "https://github.com/paramesh204" }
  ];

  return (
    <section className="min-h-screen bg-[#1f242d] text-white flex items-center justify-center px-4 sm:px-12 md:px-24 py-12 md:py-16 overflow-y-auto select-none">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-6 items-center">

        {/* LEFT COLUMN: TEXT CONTENT & SOCIALS */}
        <div className="w-full flex flex-col justify-center text-center md:text-left order-2 md:order-1 z-10 px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white mb-2">
            HELLO, IT'S ME
          </h3>

          {/* Responsive Heading: Perfect font scaling to prevent overflow on Mobile, Laptop, and Desktop */}
        <h1 className="text-2xl sm:text-4xl md:text-[3.5vw] lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight break-keep">
  Shreeparameshwaran <span className="inline-block md:block lg:inline-block">S</span>
</h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
            I'm a Graduate who is passionate in{" "}
            <span className="text-[#00eeff] inline-block drop-shadow-[0_0_10px_rgba(0,238,255,0.6)]">
              Full-Stack|
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg leading-relaxed mb-8 mx-auto md:mx-0">
            Building scalable web apps with React, Node.js, and modern UI architectures.
            Turning ideas into powerful digital experiences with elegant layouts and optimized logic.
          </p>

          {/* Social Icons Container */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center bg-transparent transition-all duration-300 hover:bg-[#00eeff] hover:text-[#1f242d] hover:shadow-[0_0_15px_#00eeff] hover:-translate-y-1"
              >
                <Icon size={18} strokeWidth={2.5} />
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex justify-center md:justify-start">


          </div>
        </div>

        {/* RIGHT COLUMN: LARGE PORTRAIT WITH TEAL GLOW */}
        <div className="w-full flex justify-center items-center order-1 md:order-2 z-10 mt-4 md:mt-0">
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] flex items-center justify-center">

            {/* Background Radial Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00eeff] to-transparent opacity-40 md:opacity-60 blur-2xl animate-pulse" />

            {/* Outer Circular Boundary matching Template's Cyan Accent */}
            <div className="absolute inset-1.5 rounded-full border-4 border-transparent bg-gradient-to-tr from-[#00eeff] via-[#00eeff]/20 to-[#00eeff] shadow-[0_0_30px_rgba(0,238,255,0.3)] md:shadow-[0_0_40px_rgba(0,238,255,0.4)]" />

            {/* Inner Mask Container for Image */}
            <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden bg-gradient-to-b from-[#00eeff]/20 to-[#1f242d] flex items-center justify-center border border-[#00eeff]/30">
              <img
                src={profilePhoto}
                alt="Shreeparameshwaran S"
                className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 hover:scale-110"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;