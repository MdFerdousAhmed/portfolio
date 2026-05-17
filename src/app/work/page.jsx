"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend projects",
    title: "Portfolio",
    description: "I am a passionate full-stack web developer specializing in building modern, high-performance web applications using Next.js. I focus on creating fast, responsive, and SEO-friendly websites with clean UI/UX and scalable architecture. My development approach combines performance optimization with a strong emphasis on user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://portfolio-one-sepia-44.vercel.app",
    github: "https://github.com/MdFerdousAhmed/portfolio",
  },
  {
    num: "02",
    category: "fullstack project",
    title: "QurbaniHat",
    description: "QurbaniHat is a modern web application built to help users explore and book animals for Qurbani. It provides detailed information about cows and goats, including price, breed, weight, and location, making the selection process simple and user-friendly.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/qurbanihat.png",
    live: "https://livestock-booking-platform.vercel.app",
    github: "https://github.com/MdFerdousAhmed/livestock-booking-platform",
  },
  {
    num: "03",
    category: "frontend project",
    title: "Pixgen",
    description: "A modern web developer workspace showing a clean, minimal desk setup with a laptop displaying a Next.js project dashboard. The screen shows a sleek UI with code and a website preview. The environment is professional and aesthetic, with soft natural lighting, a plant on the desk, a coffee cup, and subtle tech accessories.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/pixgen.png",
    live: "https://pixgen-tau.vercel.app",
    github: "https://github.com/MdFerdousAhmed/pixgen",
  },
  {
    num: "04",
    category: "frontend project",
    title: "Dragon-News",
    description: "Dragon News is a modern, fast, and responsive news platform built to deliver the latest updates in a clean and user-friendly experience. It provides categorized news content with smooth navigation, ensuring users can easily explore trending topics, breaking news, and in-depth articles.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/dragon-news.png",
    live: "https://b13-dragon-news-next-better-auth.vercel.app/category/01",
    github: "https://github.com/MdFerdousAhmed/b13-dragon-news-next-better-auth",
  },
]

const Work = () => {
  const [project, setProjects] = useState(projects[0]);

  const handelSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update projects state based on current slide index
    setProjects(projects[currentIndex])
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** outline num */}
              <div className="text-8xl leading-none font-extrabold  text-transparent text-outline">{project.num}</div>

              {/** projects category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize ">{project.category} </h2>
              {/** project description */}
              <p>{project.description}</p>
              {/** stack */}
              <ul className="flex gap-4">
                {
                  project.stack.map((item, index) => {
                    return <li key={index} className="text-xl text-green-400 ">
                      {item.name}
                      {/** remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  })
                }
              </ul>
              {/** border */}
              <div className="border border-white/20">

              </div>
              {/** buttons */}
              <div className="flex items-center gap-4">
                {/** live projects button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-sky-400 " />
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/** github projects button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-green-400 " />
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handelSlideChange}
            >
              {
                projects.map((project, index) => {
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/** overplay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/** image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt=""></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                })
              }
              {/** slider buttons*/}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-green-400 hover:bg-green-400-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;