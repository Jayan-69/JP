import React from 'react';
import { motion } from "motion/react";
import { Code2, Smartphone, Monitor, Database, Server, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Web Development",
    skills: ["React", "HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Dart"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Monitor,
    title: "Desktop Development",
    skills: ["C#", "Java", "Python"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "SQL", "MySQL"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "PHP"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Layers,
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "C#", "Dart", "PHP"],
    gradient: "from-pink-500 to-rose-500"
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expertise across the full development stack
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group relative overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div 
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 relative z-10`}
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                <category.icon className="text-white" size={24} />
              </motion.div>
              
              <h3 className="text-xl mb-4 text-white relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}