import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, ArrowUp } from 'lucide-react';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-28 pb-12 border-t border-[#f43f5e]/20 bg-[#080406] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-full max-w-4xl bg-[#f43f5e]/15 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#f43f5e]">05 — Connect & Collaborate</span>
          </div>
          
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white glow-text leading-none mt-2">
            LET'S TALK
          </h2>
          
          <p className="text-neutral-400 font-body text-sm md:text-base mt-4">
            Available for full-stack developer and AI engineering roles, hackathon collaborations, and high-impact software projects.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Direct Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="font-display text-2xl text-white font-bold tracking-wide">
                Direct Communication
              </h3>

              <div className="space-y-4 text-xs md:text-sm font-mono">
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#f43f5e]" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-200 hover:text-white transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <Phone className="h-4 w-4 text-[#f43f5e]" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-neutral-200 hover:text-white transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <MapPin className="h-4 w-4 text-[#f43f5e]" />
                  <span className="text-neutral-400">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#f43f5e]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                >
                  <Github className="h-3.5 w-3.5 text-[#f43f5e]" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f43f5e]/15 hover:bg-[#f43f5e]/25 border border-[#f43f5e]/30 text-xs font-mono text-[#f43f5e] transition-colors"
                >
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="font-display text-2xl text-white font-bold tracking-wide mb-6">
                Send a Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <div className="inline-flex p-2 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono">Message Received</h4>
                  <p className="text-xs text-neutral-300 font-body">
                    Thank you, Akhand will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Carter"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs font-body focus:outline-none focus:border-[#f43f5e] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs font-body focus:outline-none focus:border-[#f43f5e] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Project or Inquiries
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, hackathon, or architecture you're working on..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs font-body focus:outline-none focus:border-[#f43f5e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#f43f5e] hover:bg-[#fb7185] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#f43f5e]/25 flex items-center justify-center gap-2"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message to Akhand</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Akhand Shukla. Engineered with 60 FPS Canvas & Zero Lag.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#f43f5e] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </footer>
      </div>
    </section>
  );
}
