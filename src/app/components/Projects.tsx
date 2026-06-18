import React from 'react';
import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone, Globe, Monitor, Database, Code, FileText, Heart, MessageSquare, Volume2 } from "lucide-react";

const projects = [
  {
    title: "Intelligent-LRT - React Native Mobile App",
    description: "Smart Light Rail Transit mobile app built with React Native and Expo, featuring modern navigation, state management, mapping, and database integration.",
    tags: ["React Native", "Expo", "Node.js", "Express.js", "TypeScript", "MongoDB", "Redux Toolkit"],
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
    githubLink: "https://github.com/Jayan-69/Intelligent-LRT---React-Native-Mobile-App.git"
  },
  {
    title: "BDMS - Blood Donation Management System",
    description: "Efficient platform for managing blood donors, hospitals, and emergency requests through a user-friendly web interface with streamlined blood inventory tracking.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: Heart,
    gradient: "from-red-500 to-pink-500",
    githubLink: "https://github.com/Jayan-69/Game-Detail-App---Mobile-CW-2.git"
  },
  {
    title: "Game Detail App",
    description: "Flutter mobile application providing detailed information about various games, showcasing mobile UI design, API integration, and cross-platform development skills.",
    tags: ["Flutter", "Dart", "Mobile Development"],
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    githubLink: "https://github.com/Jayan-69/Game-Detail-App---Mobile-CW-2.git"
  },
  {
    title: "Smart Campus",
    description: "Web-based campus management system using PHP, MySQL, and additional libraries like SendGrid for email functionality and TCPDF for PDF document generation.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "SendGrid", "TCPDF"],
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    githubLink: "https://github.com/Jayan-69/SDP---Smart-Campus.git"
  },
  {
    title: "News App Flutter",
    description: "Cross-platform mobile news application built with Flutter and Dart, integrating with APIs to fetch and display the latest news articles with modern UI.",
    tags: ["Flutter", "Dart", "API Integration", "Mobile Development"],
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-500",
    githubLink: "https://github.com/Jayan-69/News_App_Flutter.git"
  },
  {
    title: "MyNoteApp Flutter",
    description: "Mobile note-taking application built with Flutter and Dart, allowing users to create, manage, and organize notes efficiently across devices.",
    tags: ["Flutter", "Dart", "Mobile Development", "Note Management"],
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
    githubLink: "https://github.com/Jayan-69/MyNoteApp_Flutter.git"
  },
  {
    title: "Avatar-Driven Text-to-Speech App",
    description: "Web application converting text to speech using animated 3D avatars, built with MERN stack and leveraging Three.js for 3D graphics and Web Speech API.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Three.js", "Web Speech API"],
    icon: Volume2,
    gradient: "from-cyan-500 to-blue-500",
    githubLink: "https://github.com/Jayan-69/Avatar-Driven-Text-to-Speech-App---Mern-Stack.git"
  },
  {
    title: "Mood Tracker",
    description: "Web application for tracking and monitoring mood patterns with interactive features and data visualization for mental health awareness.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Data Visualization"],
    icon: MessageSquare,
    gradient: "from-purple-500 to-indigo-500",
    githubLink: "https://github.com/Jayan-69/Avatar-Driven-Text-to-Speech-App---Mern-Stack.git"
  },
  {
    title: "Hospital Arogya",
    description: "Web application designed to streamline hospital management processes with features for managing patients, appointments, and staff efficiently.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Hospital Management"],
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    githubLink: "https://github.com/Jayan-69/hospital_arogya---Web-Application.git"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Ambient background */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/[0.05] rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-80 h-80 bg-violet-500/[0.05] rounded-full blur-[110px]"
        animate={{
          scale: [1.15, 1, 1.15],
        }}
        transition={{
          duration: 18,
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
          <span className="inline-block text-xs tracking-widest text-blue-400/80 uppercase mb-3">Portfolio</span>
          <motion.h2
            className="text-4xl md:text-5xl mb-4 text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my recent work and contributions
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/15 transition-all group relative"
            >
              {/* Gradient bar */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${project.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />

              {/* Background tint on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity pointer-events-none`}
              />

              <div className="p-6 relative">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 shadow-lg shadow-black/20`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 8,
                    transition: { duration: 0.4 }
                  }}
                >
                  <project.icon className="text-white" size={22} />
                </motion.div>

                <motion.h3
                  className="text-lg text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-slate-400 mb-4 leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-slate-300 rounded-full text-xs hover:bg-white/[0.08] transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + tagIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full text-sm shadow-md shadow-black/20 hover:shadow-lg transition-shadow"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-500 rounded-full text-sm cursor-not-allowed"
                    disabled
                  >
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}