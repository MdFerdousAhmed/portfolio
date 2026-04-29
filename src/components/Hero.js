"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center text-center px-gutter py-xl bg-radial-gradient">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-lg"
      >
        <div className="absolute inset-0 bg-surface-tint opacity-20 blur-3xl rounded-full"></div>
        <div className="relative w-40 h-40 rounded-full border-2 border-outline-variant p-1">
          <img 
            alt="Angel Garcia Profile" 
            className="w-full h-full object-cover rounded-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrLthURTT2zYbzg71WDiOR0JGsX21heg6_3CwS46G27XDg6h1vdOoqDHB9QwqU_3OkCxqoPXCJhL8ygQsuBA4l71wKmHQXHtGSf3Ozas6C8qLggdCiUg2zr6qlpCzAlSOw9MUyu6msCc05P7M7eI77MhxxOmvZxl9WA0OdpzI32zVrkq9loZeLGYJc8yyKP9SOCpRb3yI5_UX784bPGCNqIAArb7dsmdRqTFGuVu4IBnH3BSVO2iFMcwmb9XJukgzsgWwJShxsuv8"
          />
          <div className="absolute bottom-2 right-2 bg-white text-surface px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Ferdous
          </div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-h1 text-h1 max-w-[900px] mb-lg text-white"
      >
        Building <span className="text-primary-fixed-dim">modern web applications</span> with a focus on aesthetics, functionality and accessibility.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-md mb-xl"
      >
        <button className="flex items-center gap-xs bg-white text-surface font-label text-label px-lg py-sm rounded-lg hover:scale-105 transition-all">
          <span className="material-symbols-outlined">mail</span>
          Contact me
        </button>
        <div className="flex items-center gap-lg">
          <a className="text-secondary-fixed hover:translate-y-[-2px] transition-transform" href="#">
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </a>
          <a className="text-tertiary-fixed-dim hover:translate-y-[-2px] transition-transform" href="#">
            <span className="material-symbols-outlined text-3xl">share</span>
          </a>
          <a className="text-primary-fixed hover:translate-y-[-2px] transition-transform" href="#">
            <span className="material-symbols-outlined text-3xl">camera</span>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-md text-outline font-label text-label uppercase tracking-widest"
      >
        <span>React</span>
        <span className="text-white/20">/</span>
        <span>Next.js</span>
        <span className="text-white/20">/</span>
        <span>Node.js</span>
        <span className="text-white/20">/</span>
        <span>Tailwind CSS</span>
        <span className="text-white/20">/</span>
        <span>Typescript</span>
      </motion.div>
    </section>
  );
}
