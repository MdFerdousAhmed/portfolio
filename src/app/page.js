"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    
    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <main className="overflow-x-hidden pt-xl">
      <Hero />
      
      <div className="reveal-section section-reveal">
        <Projects />
      </div>

      <div className="reveal-section section-reveal">
        <Skills />
      </div>

      <div className="reveal-section section-reveal">
        <Profile />
      </div>
    </main>
  );
}
