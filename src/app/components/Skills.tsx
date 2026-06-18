import React from 'react';
import { motion } from "motion/react";
import { Code2, Smartphone, Database, Server, Layers, Search, Wrench, Users, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Layers,
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "PHP", "Dart"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Redux Toolkit", "Vite"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful API Design"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    skills: ["On-Page SEO", "Technical SEO", "Google Search Console", "Codebase SEO Optimisation"],
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Postman", "CI/CD Pipelines"],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Methodologies",
    skills: ["Agile (Scrum)", "Sprint Planning", "Backlog Grooming"],
    gradient: "from-violet-500 to-fuchsia-500"
  },
  {
    icon: Sparkles,
    title: "Other",
    skills: ["API Integration", "Debugging", "Full-Stack Architecture", "Client Communication"],
    gradient: "from-cyan-500 to-blue-500"
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
      {/* Ambient background */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-blue-500/[0.06] rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/[0.06] rounded-full blur-[110px]"
        animate={{
          scale: [1.15, 1, 1.15],
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
          <span className="inline-block text-xs tracking-widest text-blue-400/80 uppercase mb-3">What I work with</span>
          <motion.h2
            className="text-4xl md:text-5xl mb-4 text-white tracking-tight"
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
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 hover:bg-white/[0.05] transition-all group relative overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity`}
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-black/20`}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                <category.icon className="text-white" size={22} />
              </motion.div>

              <h3 className="text-lg mb-4 text-white relative z-10">{category.title}</h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-white/[0.04] border border-white/[0.06] text-slate-300 rounded-full text-sm hover:bg-white/[0.08] transition-colors cursor-default"
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