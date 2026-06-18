import React from 'react';
import { motion } from "motion/react";
import { Briefcase, Search, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Web Developer & Project Coordinator",
    company: "Code Craft Solutions (Startup)",
    period: "Feb 2025 – Present",
    points: [
      "Delivered 3–5 full-stack web projects within a cross-functional team of 7–10 engineers, using the MERN stack, Next.js, and Supabase across diverse client requirements.",
      "Worked with MongoDB and PostgreSQL as primary databases, designing scalable schemas and optimising query performance for production applications.",
      "Implemented on-page and technical SEO best practices including structured data, metadata optimisation, and codebase-level SEO improvements to improve organic search rankings.",
      "Monitored site performance, indexing, and search visibility using Google Search Console, identifying and resolving crawl issues to improve client search presence.",
      "Collaborated within an Agile (Scrum) workflow — participating in sprint planning, daily stand-ups, retrospectives, and backlog grooming to ensure consistent on-time delivery.",
      "Led project coordination responsibilities including requirement gathering, client communication, task management, and progress reporting across concurrent projects.",
      "Conducted code reviews and enforced clean code standards, contributing to a maintainable and scalable shared codebase."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hands-on impact across SEO and full-stack development
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all group relative overflow-hidden"
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl text-white">{exp.role}</h3>
                  <p className="text-lg text-purple-400 mt-1">{exp.company}</p>
                  <span className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {exp.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <Search className="text-teal-400 mt-1 flex-shrink-0" size={18} />
                    <p className="text-slate-300 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
