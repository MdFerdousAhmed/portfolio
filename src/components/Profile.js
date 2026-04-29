"use client";

import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section className="max-w-container-max mx-auto px-6 py-xl grid md:grid-cols-2 gap-xl items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-2 md:order-1"
      >
        <span className="text-secondary-fixed font-label text-label uppercase tracking-widest mb-xs block">The Developer</span>
        <h2 className="font-h2 text-h2 text-white mb-md">Engineering experiences, not just websites.</h2>
        <div className="space-y-md text-outline font-body-lg">
          <p>
            I'm a Full-Stack Engineer based in San Francisco, specializing in building high-performance web applications. My philosophy centers on "Clean Code" and "User-First Design."
          </p>
          <p>
            With over 3 years of experience, I've partnered with startups and established brands to deliver digital products that are both visually stunning and technically robust.
          </p>
        </div>
        <div className="mt-lg flex items-center gap-md">
          <div className="text-center border-r border-white/10 pr-md">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs uppercase text-outline">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-xs uppercase text-outline">Years Exp</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-1 md:order-2"
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
          <img 
            className="w-full h-full object-cover" 
            alt="Minimalist workspace" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkbvTRDYRBSk7tDPwPRuYRp7pr221xhzsLz7dr2F-yW8c5fC04YK46BbLbJazTBoANIMO8qtOCOuew_ACRgAVmIiuc9nY1dGad49wa7y2jpKc_9mpwGocnBw-h8yfhslfaZbWq4W-wWpOcWzSS2FgIQOwyY3kxNF82dHBCvROb9NqmLlN4GBpqXjiQKrhJqIcH5jHYBPrVsoLM60RtxzLDRrsppf-MYfoPK6-NLGS_PLEed5YZcjBeDZ4obpTVkfW2TG2_ob5iWMw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
        </div>
      </motion.div>
    </section>
  );
}
