"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, } from "react-icons/si";

// about data 
const about = {
  title: "About me",
  description: "I specialize in frontend and full-stack development, working with technologies like React, Next.js, and Node.js to create fast, scalable, and efficient applications. I also have a strong interest in UI/UX design, ensuring every project not only works well but also looks visually appealing and provides a great user experience.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md.Ferdous Ahmed"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 177 790 6923"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "mdferdousahmed3112@outlook.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "mdferdousahmed31122003@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bangla, Hindi"
    },

  ]
}

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I have experience working on modern web development projects, focusing on building responsive, fast, and user-friendly applications. I have developed multiple projects using technologies such as React, Next.js, and Node.js, along with REST APIs and database integration.",
  items: [
    {
      company: "Programming Hero",
      position: "Full Stack Developer",
      duration: "2025 - present"
    },
    {
      company: "Programming Hero",
      position: "Front-End Developer Intern",
      duration: "2024 - 2025"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance web Development",
      duration: "2023 - 2024"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2022 - 2023"
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2021 - 2022"
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2020 - 2021"
    },
  ]
}

// education
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "I have experience working on modern web development projects, focusing on building responsive, fast, and user-friendly applications. I have developed multiple projects using technologies such as React, Next.js, and Node.js, along with REST APIs and database integration.",
  items: [
    {
      institution: "Programming Hero",
      degree: "Full Stack Developer",
      duration: "2026"
    },
    {
      institution: "Programming Hero",
      degree: "Front-End Developer",
      duration: "2026"
    },
    {
      institution: "Programming Hero",
      degree: "Back-end Developer",
      duration: "2026"
    },
    {
      institution: "barguna polytechnic institute",
      degree: "diploma-in-engineering",
      duration: "2024"
    },
    {
      institution: "Jahan-Ara High School",
      degree: "SSC",
      duration: "2020"
    },


  ]
}

// skills
const skills = {
  title: "My skills",
  description: "On the frontend, I work with technologies like HTML, CSS, JavaScript, React, and Next.js to build interactive and dynamic user interfaces. I also use Tailwind CSS to design clean and responsive layouts efficiently.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },

  ]
}

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion";


const Resume = () => {
  return <motion.div initial={{ opacity: 0 }}
    animate={{
      opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">

      <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
        <div className="flex flex-col xl:flex-row gap-[60px] container mx-auto">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li  key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-sky-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/** dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-sky-400"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full ">
              education
            </TabsContent>

            {/** education */}
            <TabsContent value="skills" className="w-full ">
              skills
            </TabsContent>
            {/** education */}
            <TabsContent value="about" className="w-full ">
              about
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  </motion.div>

};

export default Resume;