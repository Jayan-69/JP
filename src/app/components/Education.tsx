import React from 'react';
import { motion } from "motion/react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "BSc (Hons) Computing Science in Software Engineering (TOP UP)",
    institution: "Kingston University London (Esoft Metro Campus, Colombo)",
    location: "Colombo, Sri Lanka",
    year: "2024-2025",
    status: "FIRST CLASS AWARD",
    description: "Pursued BSc (Hons) Computing Science in Software Engineering at Kingston University London through Esoft Metro Campus, achieving First Class honors.",
    achievements: [
      "FIRST CLASS AWARD - Academic Excellence",
      "Advanced Software Engineering specialization",
      "Modern development practices and system design"
    ]
  },
  {
    degree: "Higher National Diploma (HND) in Computer Science",
    institution: "Esoft Metro Campus, Gampaha",
    location: "Gampaha, Sri Lanka",
    year: "2024",
    status: "Grade Merit",
    description: "Successfully completed Pearson Assured Higher National Diploma in Computer Science with Merit grade.",
    achievements: [
      "Pearson Assured HND in Computer Science",
      "Grade Merit achieved",
      "Comprehensive computer science foundation"
    ]
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Esoft Metro Campus, Gampaha",
    location: "Gampaha, Sri Lanka",
    year: "2022",
    status: "Grade Distinction",
    description: "Successfully completed Pearson Assured Diploma in Information Technology with Distinction grade.",
    achievements: [
      "Pearson Assured Diploma in IT",
      "Grade Distinction achieved",
      "Information Technology excellence"
    ]
  },
  {
    degree: "BCI Certificate in English",
    institution: "BCI Campus, Negombo",
    location: "Negombo, Sri Lanka",
    year: "2018",
    status: "Certificate Completed",
    description: "Successfully completed BCI Certificate in English program.",
    achievements: [
      "English language proficiency certification",
      "Communication skills development",
      "Academic English foundation"
    ]
  },
  {
    degree: "GCE Advanced Level (Mathematics Stream)",
    institution: "St. Peter's College Colombo 04, Gampaha Branch",
    location: "Gampaha, Sri Lanka",
    year: "2020",
    status: "Completed",
    description: "Successfully completed General Certificate of Education Advanced Level examination in Mathematics stream.",
    achievements: [
      "GCE A/L in Mathematics stream",
      "Advanced mathematics and science education",
      "University entrance qualification"
    ]
  },
  {
    degree: "GCE Ordinary Level",
    institution: "St. Peter's College Colombo 04, Gampaha Branch",
    location: "Gampaha, Sri Lanka",
    year: "2017",
    status: "Completed",
    description: "Successfully completed General Certificate of Education Ordinary Level examination.",
    achievements: [
      "GCE O/L qualification completed",
      "Secondary education foundation",
      "Academic milestone achieved"
    ]
  },
  
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
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
            Education
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic background and qualifications
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line with gradient animation */}
              <motion.div 
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: "top" }}
              />
              
              <div className="relative pl-20 pb-12">
                {/* Timeline dot with pulse animation */}
                <motion.div
                  className="absolute left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.75, 0, 0.75],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all group relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 relative z-10"
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                      }}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <GraduationCap className="text-white" size={28} />
                    </motion.div>
                    <div className="flex-1 relative z-10">
                      <motion.h3 
                        className="text-2xl text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-purple-400 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-4 text-slate-400 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <motion.span 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05, color: "#a855f7" }}
                        >
                          <Calendar size={16} />
                          {edu.year}
                        </motion.span>
                        <motion.span 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05, color: "#a855f7" }}
                        >
                          <Award size={16} />
                          {edu.status}
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  <motion.p 
                    className="text-slate-300 mb-4 leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {edu.description}
                  </motion.p>

                  <div className="space-y-2 relative z-10">
                    <motion.p 
                      className="text-sm text-slate-400 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      Key Highlights:
                    </motion.p>
                    {edu.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 group/item"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        <p className="text-slate-400 text-sm group-hover/item:text-slate-300 transition-colors">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}