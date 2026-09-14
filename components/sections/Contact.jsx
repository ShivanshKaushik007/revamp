"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  ArrowUpRight,
  AlertTriangle,
  ExternalLink,
  Loader2,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: <Mail className="w-5 h-5 text-accent" />,
    label: "Email Address",
    value: "shivanshkaushik1237@gmail.com",
    href: "mailto:shivanshkaushik1237@gmail.com",
    canCopy: true,
  },
  {
    icon: <Phone className="w-5 h-5 text-accent" />,
    label: "Phone / WhatsApp",
    value: "+91 7599188181",
    href: "tel:+917599188181",
    canCopy: true,
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Campus / Location",
    value: "IET Lucknow, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=IET+Lucknow",
    canCopy: false,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);
  const [copiedPrepared, setCopiedPrepared] = useState(false);
  const [service, setService] = useState("Full-Stack Engineering");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorInfo) setErrorInfo(null);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const constructMailtoUrl = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "Inquirer";
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${service}] from ${fullName}`);
    const body = encodeURIComponent(
      `Hi Shivansh,\n\n` +
      `${formData.message || "I'd like to discuss an engineering opportunity or project collaboration."}\n\n` +
      `---\n` +
      `Sender: ${fullName}\n` +
      `Email: ${formData.email || "N/A"}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Domain: ${service}`
    );
    return `mailto:shivanshkaushik1237@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyPreparedEmail = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "Inquirer";
    const content =
      `To: shivanshkaushik1237@gmail.com\n` +
      `Subject: [Portfolio Inquiry: ${service}] from ${fullName}\n\n` +
      `Hi Shivansh,\n\n` +
      `${formData.message}\n\n` +
      `---\n` +
      `Sender: ${fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Domain: ${service}`;

    navigator.clipboard.writeText(content);
    setCopiedPrepared(true);
    setTimeout(() => setCopiedPrepared(false), 2400);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorInfo(null);

    try {
      // Use modern @emailjs/browser with publicKey
      await emailjs.sendForm(
        "service_au0opt6",
        "template_n4eku2e",
        formRef.current,
        "uyMnPD0BeZa90REzO"
      );

      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      formRef.current?.reset();
    } catch (error) {
      setLoading(false);
      console.error("EmailJS transmission error:", error);

      const errText = error?.text || error?.message || "";
      const isAuthGrantError =
        errText.toLowerCase().includes("invalid grant") ||
        errText.toLowerCase().includes("reconnect your gmail") ||
        error?.status === 412;

      setErrorInfo({
        isAuthError: isAuthGrantError,
        message: errText || "Email transmission could not be completed via EmailJS.",
        mailtoUrl: constructMailtoUrl(),
      });
    }
  };

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h2 className="h2 text-white font-heading font-extrabold">
              Let's Build Something Exceptional.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-titanium-300 font-sans leading-relaxed">
            Have a project in mind, an engineering role, or a technical inquiry? Send a message directly or connect across channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Commitment */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#11131C] border border-white/10 hover:border-accent/40 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-titanium-400">
                        {card.label}
                      </p>
                      <a
                        href={card.href}
                        className="text-sm font-semibold text-white group-hover:text-accent transition-colors font-sans"
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {card.value}
                      </a>
                    </div>
                  </div>

                  {card.canCopy && (
                    <button
                      onClick={() => handleCopy(card.value, card.label)}
                      className="p-2 rounded-lg text-titanium-400 hover:text-white hover:bg-white/5 transition-all"
                      title={`Copy ${card.label}`}
                    >
                      {copiedKey === card.label ? (
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* SLA Commitment Card */}
            <div className="p-6 rounded-2xl bg-[#11131C] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                <Clock className="w-4 h-4" />
                <span>Response Time Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed font-sans mb-4">
                I generally respond within 12–24 hours on workdays for engineering opportunities, hackathon collaborations, and consulting inquiries.
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                {[
                  {
                    icon: <FaGithub className="w-4 h-4" />,
                    href: "https://github.com/ShivanshKaushik007",
                    name: "GitHub",
                  },
                  {
                    icon: <FaLinkedinIn className="w-4 h-4" />,
                    href: "https://www.linkedin.com/in/shivansh-kaushik-b3165827a/",
                    name: "LinkedIn",
                  },
                  {
                    icon: <SiLeetcode className="w-4 h-4" />,
                    href: "https://leetcode.com/u/Shivansh_Kaushik/",
                    name: "LeetCode",
                  },
                  {
                    icon: <FaInstagram className="w-4 h-4" />,
                    href: "https://www.instagram.com/shivanshkaushik1237",
                    name: "Instagram",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium-300 hover:text-accent hover:border-accent/40 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#11131C] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-titanium-300 max-w-md font-sans">
                    Thank you for reaching out. Your message has been routed to my primary inbox and I will follow up promptly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs font-mono text-titanium-400">
                      Fill in your project or role parameters below.
                    </p>
                  </div>

                  {/* Multi-variable alias compatibility for EmailJS templates */}
                  <input type="hidden" name="from_name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="user_name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="from_email" value={formData.email} />
                  <input type="hidden" name="user_email" value={formData.email} />
                  <input type="hidden" name="reply_to" value={formData.email} />
                  <input type="hidden" name="service" value={service} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        FIRST NAME *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        LAST NAME *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="e.g. Connor"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        PHONE NUMBER
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-titanium-300">
                      INQUIRY DOMAIN
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "Full-Stack Engineering",
                        "Real-Time Systems",
                        "UI/UX & Frontend",
                      ].map((s, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setService(s)}
                          className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center ${
                            service === s
                              ? "bg-accent/15 border border-accent text-accent font-semibold"
                              : "bg-[#090A0F] border border-white/10 text-titanium-400 hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-titanium-300">
                      PROJECT DETAILS OR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your engineering role, project scope, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  {/* Resilient Error & Fallback Banner */}
                  {errorInfo && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-300">
                            {errorInfo.isAuthError
                              ? "Gmail Integration Token Expired"
                              : "Transmission Notice"}
                          </p>
                          <p className="text-titanium-300 mt-1 font-sans text-xs leading-relaxed">
                            {errorInfo.isAuthError
                              ? "The Google OAuth token for service_au0opt6 has expired on EmailJS and needs a 1-click reconnect in your dashboard. In the meantime, dispatch your message directly:"
                              : errorInfo.message}
                          </p>
                        </div>
                      </div>

                      {/* Instant Fallback Actions */}
                      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 pt-1 border-t border-amber-500/20">
                        <a
                          href={constructMailtoUrl()}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent text-[#090A0F] font-sans font-semibold text-xs hover:bg-accent-hover transition-colors w-full sm:w-auto"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email Client (mailto)</span>
                        </a>

                        <button
                          type="button"
                          onClick={copyPreparedEmail}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-titanium-200 hover:text-white text-xs font-mono transition-colors w-full sm:w-auto"
                        >
                          {copiedPrepared ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-accent" />
                              <span className="text-accent">Copied to Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Prepared Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit button & direct options */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                    <Button
                      type="submit"
                      size="md"
                      variant="default"
                      disabled={loading}
                      className="w-full sm:w-auto justify-center gap-2 font-semibold"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#090A0F]" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <a
                      href={constructMailtoUrl()}
                      className="text-xs font-mono text-titanium-400 hover:text-accent transition-colors flex items-center justify-center sm:justify-start gap-1.5 py-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Or send via mailto</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
