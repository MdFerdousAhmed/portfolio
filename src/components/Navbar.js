"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center h-16 px-6 max-w-container-max mx-auto font-heading tracking-tight">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          Ferdous Ahmed
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-base">
          <a className="text-primary-fixed-dim font-bold border-b border-primary-fixed-dim pb-1 hover:opacity-80 transition-all duration-200 active:scale-95" href="#">Home</a>
          <a className="text-outline font-medium px-md hover:text-primary-fixed-dim hover:opacity-80 transition-all duration-200 active:scale-95" href="#">Projects</a>
          <a className="text-outline font-medium px-md hover:text-primary-fixed-dim hover:opacity-80 transition-all duration-200 active:scale-95" href="#">About Me</a>
        </nav>
        
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-primary text-on-primary font-label text-label px-md py-sm rounded-lg hover:scale-[1.02] transition-transform active:scale-95"
        >
          Contact me
        </motion.button>
      </div>
    </header>
  );
}
