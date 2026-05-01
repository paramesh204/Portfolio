import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24 sm:pt-28">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40" />

            <div
                className="absolute inset-0 opacity-20 animate-slow-zoom"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Glow */}
            <div className="absolute top-20 left-5 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-5 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-reverse" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 text-center">

                {/* Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                        <Sparkles size={14} className="animate-pulse" />
                        Open to Opportunities
                    </div>
                </div>

                {/* Heading (PERFECT FIX) */}
                <h1 className="font-bold leading-tight tracking-tight">

                    <span className="block text-[clamp(1.5rem,4vw,3rem)]">
                        Hi, I'm
                    </span>

                    <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent text-[clamp(1.4rem,5vw,3.5rem)] leading-tight break-keep">
                        Shreeparameshwaran S
                    </span>

                </h1>

                {/* Subtitle */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                    Full Stack Developer building scalable web apps with React, Node.js, and modern UI.
                    Turning ideas into powerful digital experiences 🚀
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
                    {[
                        { icon: Github, href: "https://github.com/paramesh204" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/paramesh04/" },
                        { icon: Mail, href: "mailto:shreeparamesh204@gmail.com" }
                    ].map(({ icon: Icon, href }) => (
                        <a
                            key={href}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400 transition-all duration-300 hover:scale-110"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-10">

                    <a
                        href="#projects"
                        className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                    >
                        🚀 View My Work
                    </a>

                    <a
                        href="#contact"
                        className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:border-purple-400 transition-all duration-300"
                    >
                        📩 Contact Me
                    </a>

                </div>

                {/* Scroll */}
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-smooth text-gray-400">
                    <ArrowDown size={20} />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;