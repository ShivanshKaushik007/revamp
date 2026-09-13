"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
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
  const [copiedKey, setCopiedKey] = useState(null);
  const [service, setService] = useState("Web Development");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_au0opt6",
        "template_n4eku2e",
        formRef.current,
        "uyMnPD0BeZa90REzO"
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          formRef.current?.reset();
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message: " + (error.text || "Please try again later."));
        }
      );
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#11131C] border border-white/[0.08] hover:border-accent/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-titanium-400 uppercase tracking-wider">
                        {card.label}
                      </p>
                      <a
                        href={card.href}
                        target={card.canCopy ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-white hover:text-accent transition-colors truncate block"
                      >
                        {card.value}
                      </a>
                    </div>
                  </div>

                  {card.canCopy && (
                    <button
                      onClick={() => handleCopy(card.value, idx)}
                      className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-titanium-400 hover:text-white transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedKey === idx ? (
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick response note */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121422] to-[#0D0E16] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                <Clock className="w-4 h-4" />
                <span>Response Time Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed font-sans mb-4">
                I generally respond within 12–24 hours on workdays for engineering opportunities, hackathon collaborations, and consulting inquiries.
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                {[
                  { icon: <FaGithub className="w-4 h-4" />, href: "https://github.com/ShivanshKaushik007", name: "GitHub" },
                  { icon: <FaLinkedinIn className="w-4 h-4" />, href: "https://www.linkedin.com/in/shivansh-kaushik-b3165827a/", name: "LinkedIn" },
                  { icon: <SiLeetcode className="w-4 h-4" />, href: "https://leetcode.com/u/Shivansh_Kaushik/", name: "LeetCode" },
                  { icon: <FaInstagram className="w-4 h-4" />, href: "https://www.instagram.com/shivanshkaushik1237", name: "Instagram" },
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
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs font-mono text-titanium-400">
                    Fill in your project or role parameters below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-titanium-300">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
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
                      name="last_name"
                      required
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
                  <input type="hidden" name="service" value={service} />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                    placeholder="Describe your engineering role, project scope, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder-titanium-600 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>

                {/* Submit button & confirmation */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    type="submit"
                    size="md"
                    variant="default"
                    disabled={loading}
                    className="gap-2 font-semibold"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {submitted && (
                    <span className="text-xs font-mono text-accent flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Message received successfully!</span>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
