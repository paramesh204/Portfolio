import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Copy, Check, AlertCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmitStatus = "idle" | "sending" | "sent";

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [copied, setCopied] = useState<string | null>(null);

  const heading = useScrollReveal();
  const content = useScrollReveal();

  const validate = (data: FormData): FormErrors => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Name is required";
    if (!data.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email";
    }
    if (!data.subject.trim()) next.subject = "Subject is required";
    if (!data.message.trim()) {
      next.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters";
    }
    return next;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const next = { ...formData, [field]: value };
    setFormData(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    window.open(
      `mailto:shreeparamesh204@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`
    );

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({});
        setErrors({});
      }, 2500);
    }, 600);
  };

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:ring-2 ${
      touched[field] && errors[field]
        ? "border-red-500/50 focus:ring-red-500/20"
        : "border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20"
    }`;

  const contactDetails = [
    { icon: Mail, label: "Email", value: "shreeparamesh204@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6385347923" },
    { icon: MapPin, label: "Location", value: "Trichy, India", noCopy: true },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#050510] via-black to-[#0a0a1a]"
    >
      {/* BIG GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[90%] sm:w-[700px] h-[300px] sm:h-[400px] bg-purple-500/10 blur-[100px] sm:blur-[140px] rounded-full" />
      </div>

      {/* FLOATING ORBS */}
      <div className="absolute top-10 left-4 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* HEADING */}
        <div
          ref={heading.ref}
          className={`text-center mb-10 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            heading.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-2">
            Have a project idea or opportunity? Let's build something amazing 🚀
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          ref={content.ref}
          className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-1000 ${
            content.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* LEFT SIDE (INFO) */}
          <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Contact information
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, noCopy }) => (
                  <div
                    key={label}
                    className="group flex items-center justify-between gap-3 rounded-xl px-2 sm:px-3 py-2 -mx-2 sm:-mx-3 transition-colors duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon size={16} className="text-purple-300" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 truncate">
                        {value}
                      </span>
                    </div>

                    {!noCopy && (
                      <button
                        type="button"
                        onClick={() => handleCopy(label, value)}
                        aria-label={`Copy ${label.toLowerCase()}`}
                        className="flex-shrink-0 p-1.5 rounded-md text-slate-400 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {copied === label ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-xs sm:text-sm text-slate-300">
                Available for freelance & full-time roles
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-8 md:p-10 bg-black/40 backdrop-blur-xl space-y-4 sm:space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={inputClass("name")}
                />
                {touched.name && errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={inputClass("email")}
                />
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                onBlur={() => handleBlur("subject")}
                className={inputClass("subject")}
              />
              {touched.subject && errors.subject && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} className="flex-shrink-0" />
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                className={`${inputClass("message")} resize-none sm:rows-5`}
              />
              <div className="mt-1.5 flex items-center justify-between gap-2">
                {touched.message && errors.message ? (
                  <p className="text-xs text-red-400 flex items-center gap-1 min-w-0">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    <span className="truncate">{errors.message}</span>
                  </p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-slate-500 flex-shrink-0">
                  {formData.message.length} chars
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white text-sm sm:text-base transition-all duration-300 ${
                status === "sent"
                  ? "bg-emerald-600"
                  : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
              } disabled:opacity-80`}
            >
              {status === "sending" && (
                <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {status === "sent" && <Check size={16} />}
              {status === "idle" && <Send size={16} />}
              {status === "sending"
                ? "Opening mail client..."
                : status === "sent"
                ? "Message ready!"
                : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;