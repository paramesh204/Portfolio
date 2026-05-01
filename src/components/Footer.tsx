import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a1a] via-black to-black pt-12 pb-6 overflow-hidden">

      {/* Soft Glow (matches contact section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT - PROFILE */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Paramesh_portfolio
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              Full Stack Developer focused on building scalable and modern web applications with clean UI.
            </p>

            <p className="text-xs text-gray-500">
              📍 Trichy, India
            </p>
          </div>

          {/* CENTER - NAVIGATION */}
          <div className="flex flex-col items-center gap-3 text-sm">

            <p className="text-white font-medium">Quick Links</p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT - CONTACT + SOCIAL */}
          <div className="space-y-4 text-center md:text-right">

            <p className="text-white font-medium">Contact</p>

            <p className="text-sm text-gray-400">
              shreeparamesh204@gmail.com
            </p>

            <div className="flex justify-center md:justify-end gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/paramesh204"
                target="_blank"
                rel="noopener noreferrer"
                className="social-advanced"
              >
                <Github size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/paramesh04/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-advanced"
              >
                <Linkedin size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:shreeparamesh204@gmail.com"
                className="social-advanced"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-6 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 animate-pulse" /> by{" "}
            <span className="text-white font-medium">Shreeparameshwaran S</span>
          </p>

          <p>
            © {new Date().getFullYear()} All rights reserved
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;