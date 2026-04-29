"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Lumina Analytics Dashboard",
    description: "A real-time data visualization platform built for enterprise scalability.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcacTLMND-05NGygNHUwr4VAj2RRfdub3nZ0mw7Y2e5VqPyJSFzt3KBk4F6DDuTMYWaM63RKmflb6OT-o_LLwKKt3BhVyXVc7GAkKgM6C0QyCid2xr86r8SjUS2SwT5Q-jzgnNtTy5RtHYRvhPuw3U7AS5UiysF7yOY5PxMZ8aXZtpecJr6_TJvRC-LiOHTWVbPLSmoComctErpwWs3Kc5i_ZX1CbUv5nEeVBNFwwrHB2Oi71LcLsiUXfhHEsUuHLrILCr2bVbn0g",
    tags: ["Next.js", "D3.js"],
    colSpan: "md:col-span-8",
    height: "h-80"
  },
  {
    title: "SynthCode Editor",
    description: "Customizable IDE theme for modern developers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsvIRUg0JzAko3g2GDR26CGNGzilCXN5zoYJFnxuNyR-nqEbkCf7b6B_ZpTVjVPeThqtv98ZBIXQC_b6gagpoCZ3JlFvKBHBGOpkVkIxVz4SD-F87RGvYh-kW00QJR36vGmyG-GS4YVrb30pLdobMnTPc7ef3DcgvqPG9t0qUpRm9my2jPBGuFgJJ0UBAyHksws7vZG5Xs0OgE-rruvN10hKSyR4jJIzlGaKLbGpNsiPDs9L8aV_Nb4nPiuF0W97GF1hIKNt8HP3M",
    tags: ["VS Code"],
    colSpan: "md:col-span-4",
    height: "h-80"
  },
  {
    title: "ArchFlow API",
    description: "Node-based orchestration engine for cloud services.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH9KQUtRY70JlTeRl6JI-EUudPP-Qb9asIK6m9zMswvU9Re8ZjzG1_tlWrlfn064fRctQdP0hT51ydExo-pX3gD-In3QLvmAdDlzNIJdi6annPBgLhfJGsA-83re2TcyE-ECe9zna0X4YkYwQ214V4t7ZyOldbQrOUZ5TTYS_C37gaWOUZ-dnXq2EbcNuArnBSvT-Kq44ZXMd_RyOUXUj3rs15n78bBwBo4mk4IM2BMevGTJEUsKWjvXSKiT7mXdYy6P0E4nogUXU",
    tags: [],
    colSpan: "md:col-span-4",
    height: "h-64"
  },
  {
    title: "Vault Crypto Mobile",
    description: "High-security mobile wallet for the decentralized future.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJV8M9EzJNC8kxGHJJR4bBwtRrIUqB2vd6wqvh_1m51nz_jbjswmYC4yN3vfFfnvkXViRgHYjBvuhfPzHlJA-ILl1-QLV1AsZ4rC8TPP9Jqj3VqxoxzbnDrddxTl6WsqIJ-V7CDtXymc147FbkaTTfjaaGaAsV2WdNTjfDgqeJ5GualnI8JwRFDs-hVB8aininvvyXDacLqRxlAHuHXnlOyQmn0fik-NnX8jw7ZIZSNZXq089yx7STi2-0wogPVEzvwhC4tR2S0RE",
    tags: [],
    colSpan: "md:col-span-8",
    height: "h-64"
  }
];

export default function Projects() {
  return (
    <section className="max-w-container-max mx-auto px-6 py-xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-base">
        <div>
          <span className="text-primary-fixed-dim font-label text-label uppercase tracking-widest mb-xs block">Portfolio</span>
          <h2 className="font-h2 text-h2 text-white">Featured Projects</h2>
        </div>
        <a className="text-outline hover:text-white transition-colors flex items-center gap-xs" href="#">
          View all projects <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${project.colSpan} bg-surface-container border border-white/10 rounded-xl overflow-hidden group`}
          >
            <div className={`${project.height} overflow-hidden`}>
              <img 
                src={project.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.title}
              />
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-base">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="material-symbols-outlined text-primary-fixed-dim">open_in_new</span>
              </div>
              <p className="text-outline font-body-md mb-md">{project.description}</p>
              {project.tags.length > 0 && (
                <div className="flex gap-sm">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-sm py-1 rounded text-xs font-label">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
