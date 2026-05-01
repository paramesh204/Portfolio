import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const heading = useScrollReveal();
  const content = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:your@email.com?subject=${formData.subject}&body=${formData.message}`
    );
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#050510] via-black to-[#0a0a1a]"
    >

      {/* BIG GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* FLOATING ORBS */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 blur-3xl rounded-full animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* HEADING */}
        <div
          ref={heading.ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Let’s <span className="text-gradient">Work Together</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project idea or opportunity? Let’s build something amazing 🚀
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          ref={content.ref}
          className={`max-w-6xl mx-auto grid md:grid-cols-2 rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-1000 ${
            content.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >

          {/* LEFT SIDE (INFO) */}
          <div className="p-8 sm:p-10 bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="icon-box">
                    <Mail size={18} />
                  </div>
                  <span>shreeparamesh204@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="icon-box">
                    <Phone size={18} />
                  </div>
                  <span>+91 6385347923</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="icon-box">
                    <MapPin size={18} />
                  </div>
                  <span>Trichy, India</span>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <p className="text-sm text-muted-foreground">
                Available for freelance & full-time roles
              </p>
            </div>

          </div>

          {/* RIGHT SIDE (FORM) */}
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 bg-black/40 backdrop-blur-xl space-y-5"
          >

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="input-premium"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input-premium"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              className="input-premium"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />

            <textarea
              rows={5}
              placeholder="Message..."
              required
              className="input-premium resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Send size={16} />
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;