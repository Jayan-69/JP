import React from 'react';
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Facebook, Instagram, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Jayan-69", label: "GitHub", color: "hover:text-gray-400" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jayan-perera-1725a22b4/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Mail, href: "mailto:jayanmihisara8@gmail.com", label: "Gmail", color: "hover:text-red-400" },
  { icon: MessageCircle, href: "https://wa.me/+94754464724", label: "WhatsApp", color: "hover:text-green-400" },
  { icon: Facebook, href: "https://web.facebook.com/mihisara.perera.5", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "https://www.instagram.com/_jp__69_", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Send, href: "https://t.me/+94754464724", label: "Telegram", color: "hover:text-sky-400" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05070d]">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-16 left-12 w-[28rem] h-[28rem] bg-blue-500/[0.08] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-violet-500/[0.08] rounded-full blur-[110px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="flex-shrink-0"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Soft glow */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-2xl" />

                <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-white/10 border border-white/5 shadow-[0_0_60px_-15px_rgba(99,102,241,0.5)]">
                  <img
                    src="./Assets/BU4A0371.jpg"
                    alt="Jayan Mihisara Perera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                {/* Availability badge */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-lg backdrop-blur-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs text-slate-300">Open to opportunities</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60 mb-6"
              >
                <span className="text-xs text-slate-400 tracking-wide">Full Stack Developer & Project Coordinator</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Jayan Mihisara Perera
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-slate-400 text-base md:text-lg mb-8">
                  Building scalable web, mobile & desktop applications
                </p>
              </motion.div>

              <motion.p
                className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-9 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Passionate about creating elegant solutions with modern technologies.
                Specializing in full-stack development with expertise in web, mobile, and desktop applications.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.a
                  href="#contact"
                  className="px-7 py-3 bg-white text-slate-900 rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-7 py-3 border border-slate-700 text-slate-200 rounded-full hover:border-slate-500 hover:bg-slate-900/50 transition-colors"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                </motion.a>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 transition-colors ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-slate-500" size={32} />
      </motion.div>
    </section>
  );
}