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
        className="absolute top-1/3 left-10 w-80 h-80 bg-teal-500/[0.05] rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
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
          <span className="inline-block text-xs tracking-widest text-teal-400/80 uppercase mb-3">Career</span>
          <motion.h2
            className="text-4xl md:text-5xl mb-4 text-white tracking-tight"
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
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-2xl p-8 hover:border-white/15 transition-all group relative overflow-hidden"
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white">{exp.role}</h3>
                  <p className="text-base md:text-lg text-blue-300 mt-1">{exp.company}</p>
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm mt-1.5">
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
                    <Search className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-slate-300/90 leading-relaxed text-[15px]">{point}</p>
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
