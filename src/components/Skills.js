"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", icon: "deployed_code", color: "text-primary-fixed-dim", border: "hover:border-primary-fixed-dim/30" },
  { name: "PostgreSQL / Redis", icon: "database", color: "text-secondary-fixed", border: "hover:border-secondary-fixed/30" },
  { name: "AWS / Vercel", icon: "cloud", color: "text-tertiary-fixed-dim", border: "hover:border-tertiary-fixed-dim/30" },
  { name: "UI/UX Design", icon: "brush", color: "text-primary-fixed", border: "hover:border-primary-fixed/30" },
];

export default function Skills() {
  return (
    <section className="bg-surface-container-low py-xl">
      <div className="max-w-container-max mx-auto px-6">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-white mb-base">Technical Expertise</h2>
          <p className="text-outline font-body-lg max-w-[600px] mx-auto">
            Leveraging a modern tech stack to build resilient and performant applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-lg bg-surface border border-white/5 rounded-xl ${skill.border} transition-colors`}
            >
              <span className={`material-symbols-outlined ${skill.color} text-4xl mb-md`}>
                {skill.icon}
              </span>
              <span className="font-label text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
