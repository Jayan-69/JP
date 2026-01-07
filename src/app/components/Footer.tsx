import React from 'react';
import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail, MessageCircle, Facebook, Instagram, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Mail, href: "mailto:jayan.perera@example.com", label: "Gmail", color: "hover:text-red-400" },
  { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp", color: "hover:text-green-400" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Send, href: "https://t.me", label: "Telegram", color: "hover:text-sky-400" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-500 transition-colors ${social.color}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.3, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <motion.p
            className="text-slate-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Made {""}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
            </motion.span>{" "}
            by Jayan Mihisara Perera
          </motion.p>
          
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>

        {/* Back to Top */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#home"
            className="text-slate-500 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
            whileHover={{ y: -3 }}
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}