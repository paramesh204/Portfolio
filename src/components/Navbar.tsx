import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-2.5 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo / Name */}
       <a
          href="#"
          onClick={(e) => handleClick(e, "#")}
          className="font-display font-bold tracking-tight whitespace-nowrap"
        >
          {/* Full name on desktop */}
          <span className="hidden lg:inline text-xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Shree
            </span>
            <span className="text-white font-light">parameshwaran s</span>
          </span>

          {/* Shortened on tablet */}
          <span className="hidden md:inline lg:hidden text-lg">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Paramesh
            </span>
           
          </span>

          {/* Initials on mobile */}
          <span className="inline md:hidden text-lg">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              S
            </span>
            <span className="text-white font-light">P</span>
          </span>
        </a>

        {/* Desktop / tablet nav */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              
                <a href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-xs lg:text-sm transition-colors whitespace-nowrap ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            
              <a href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg bg-primary text-primary-foreground text-xs lg:text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                
              <a    href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              
               <a href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;