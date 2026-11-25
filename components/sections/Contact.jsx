"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  CheckCircle2,
  Copy,
  ArrowUpRight,
  AlertTriangle,
  Loader2,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import SlingButton from "@/components/ui/SlingButton";

const directChannels = [
  {
    icon: <Mail className="w-4 h-4 text-accent" />,
    label: "Email",
    value: "shivanshkaushik1237@gmail.com",
    href: "mailto:shivanshkaushik1237@gmail.com",
    canCopy: true,
  },
  {
    icon: <Phone className="w-4 h-4 text-accent" />,
    label: "Phone",
    value: "+91 7599188181",
    href: "tel:+917599188181",
    canCopy: true,
  },
  {
    icon: <MapPin className="w-4 h-4 text-accent" />,
    label: "Location",
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
  const [topic, setTopic] = useState("SWE Role / Internship");

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
    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "Friend";
    const subject = encodeURIComponent(`[${topic}] Note from ${fullName}`);
    const body = encodeURIComponent(
      `Hi Shivansh,\n\n` +
        `${formData.message || "Wanted to reach out regarding an opportunity or project."}\n\n` +
        `---\n` +
        `From: ${fullName}\n` +
        `Email: ${formData.email || "N/A"}\n` +
        `Phone: ${formData.phone || "N/A"}\n` +
        `Topic: ${topic}`
    );
    return `mailto:shivanshkaushik1237@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyPreparedEmail = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "Friend";
    const content =
      `To: shivanshkaushik1237@gmail.com\n` +
      `Subject: [${topic}] Note from ${fullName}\n\n` +
      `Hi Shivansh,\n\n` +
      `${formData.message}\n\n` +
      `---\n` +
      `From: ${fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Topic: ${topic}`;

    navigator.clipboard.writeText(content);
    setCopiedPrepared(true);
    setTimeout(() => setCopiedPrepared(false), 2400);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorInfo(null);

    try {
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
      console.error("EmailJS error:", error);

      setErrorInfo({
        message:
          "The inline mail relay hit a hiccup—no problem, you can open your email app with this message pre-filled or copy it below.",
        mailtoUrl: constructMailtoUrl(),
      });
    }
  };

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
                06 / Contact
              </p>
              <h2 className="h2 text-titanium-50 mb-4">
                Say{" "}
                <span className="font-editorial text-accent font-normal">
                  hello
                </span>
              </h2>
              <p className="text-sm sm:text-base text-titanium-300 leading-relaxed">
                Hiring for a software engineering role, building something interesting, or just want to swap notes on real-time web apps? Drop me a line.
              </p>
            </div>

            <div className="divide-y divide-surface-border border-y border-surface-border">
              {directChannels.map((card) => (
                <div
                  key={card.label}
                  className="py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-surface-border flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-titanium-400">
                        {card.label}
                      </p>
                      <a
                        href={card.href}
                        className="text-sm font-medium text-titanium-100 hover:text-accent transition-colors truncate block"
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
                      className="p-2 rounded-lg text-titanium-400 hover:text-titanium-50 hover:bg-surface transition-colors shrink-0"
                      title={`Copy ${card.label}`}
                    >
                      {copiedKey === card.label ? (
                        <CheckCircle2 className="w-4 h-4 text-[#5BB98C]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
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
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-surface border border-surface-border flex items-center justify-center text-titanium-300 hover:text-accent hover:border-accent/50 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#5BB98C]/15 border border-[#5BB98C]/30 flex items-center justify-center text-[#5BB98C]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-titanium-50">
                    Got your note
                  </h3>
                  <p className="text-sm text-titanium-300 max-w-sm">
                    Thanks for reaching out—I'll read this and reply as soon as I'm back at my desk.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                    size="sm"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-titanium-50 mb-1">
                      Send a note
                    </h3>
                    <p className="text-xs font-mono text-titanium-400">
                      Goes straight to my inbox.
                    </p>
                  </div>

                  {/* EmailJS template compatibility fields */}
                  <input type="hidden" name="from_name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="user_name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="name" value={fullName || "Website Visitor"} />
                  <input type="hidden" name="from_email" value={formData.email} />
                  <input type="hidden" name="user_email" value={formData.email} />
                  <input type="hidden" name="reply_to" value={formData.email} />
                  <input type="hidden" name="service" value={topic} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        First name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Aarav"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-primary border border-surface-border text-titanium-50 placeholder-titanium-600 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        Last name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-primary border border-surface-border text-titanium-50 placeholder-titanium-600 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-primary border border-surface-border text-titanium-50 placeholder-titanium-600 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-titanium-300">
                        Phone (optional)
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-primary border border-surface-border text-titanium-50 placeholder-titanium-600 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-titanium-300">
                      What's this about?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "SWE Role / Internship",
                        "Product Collaboration",
                        "Just Saying Hi",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setTopic(item)}
                          className={`px-3 py-2 rounded-lg text-xs font-mono transition-colors text-center ${
                            topic === item
                              ? "bg-accent/15 border border-accent text-accent font-semibold"
                              : "bg-primary border border-surface-border text-titanium-400 hover:text-titanium-100"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-titanium-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me a bit about the role, team, or idea..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-primary border border-surface-border text-titanium-50 placeholder-titanium-600 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Friendly Fallback Notice */}
                  {errorInfo && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-xs space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <p className="text-titanium-200 leading-relaxed">
                          {errorInfo.message}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={constructMailtoUrl()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-primary font-semibold text-xs hover:bg-accent-hover transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open email client</span>
                        </a>

                        <button
                          type="button"
                          onClick={copyPreparedEmail}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary border border-surface-border text-titanium-200 hover:text-titanium-50 text-xs font-mono transition-colors"
                        >
                          {copiedPrepared ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#5BB98C]" />
                              <span className="text-[#5BB98C]">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-3">
                    <div className="flex items-center gap-4">
                      <SlingButton
                        onSend={() => formRef.current?.requestSubmit()}
                        disabled={loading}
                        padColor="#F27D42"
                        iconColor="#0C0C0E"
                        accentColor="#FFD36E"
                        wellColor="#1E1E24"
                        bandColor="#6B6861"
                        size={52}
                        strokeWidth={2.5}
                        armAt={42}
                        maxPull={120}
                        ariaLabel="Send message"
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <ArrowUp className="w-5 h-5" strokeWidth={2.25} />
                        )}
                      </SlingButton>

                      <div className="flex flex-col">
                        <span className="text-sm font-heading font-semibold text-titanium-50">
                          {loading ? "Sending message..." : "Send message"}
                        </span>
                        <span className="text-[11px] font-mono text-titanium-400">
                          {loading ? "routing to inbox" : "pull & sling, or tap"}
                        </span>
                      </div>
                    </div>

                    <a
                      href={constructMailtoUrl()}
                      className="text-xs font-mono text-titanium-400 hover:text-accent transition-colors inline-flex items-center justify-center sm:justify-start gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Or open in email app</span>
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
