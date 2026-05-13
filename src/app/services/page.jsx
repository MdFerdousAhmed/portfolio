"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: "01",
    title:"Web Development",
    description: "Web development is the process of creating, building, and maintaining websites or web applications that run on the internet. It includes designing user interfaces, developing server-side functionality, managing databases, and ensuring websites are responsive, fast, and user-friendly.",
    href: ""
  },
  {
    num: "02",
    title:"UI/UX Design",
    description: "UI/UX Design is the process of creating digital products that are visually appealing, easy to use, and provide a smooth user experience. It combines creativity, functionality, and user-centered design principles to improve how users interact with websites, mobile apps, and software.",
    href: ""
  },
  {
    num: "03",
    title:"Logo Design",
    description: "Logo design is the creative process of developing a unique visual symbol or brand mark that represents a company, business, product, or personal brand. A logo helps create a strong first impression and builds brand recognition by communicating identity, values, and professionalism through visual elements.",
    href: ""
  },
  {
    num: "04",
    title:"SEO",
    description: "SEO (Search Engine Optimization) is the process of improving a website’s visibility and ranking on search engines like Google and Bing to attract more organic (non-paid) traffic. It involves optimizing website content, structure, speed, and technical performance so search engines can better understand and rank web pages.",
    href: ""
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
      >
           {services.map((service, index) => {
            return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              {/** top */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold leading-none text-outline text-transparent group-hover:text-sky-400 transition-all duration-500'>
                  {service.num}
                </div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-sky-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-black text-3xl'/>
                </Link>
              </div>
              {/** title */}
              <h2 className='text-[42px] font-bold leading-none text-white  group-hover:text-sky-400  transition-all duration-500'>{service.title}</h2>
              {/** description */}
              <p className='text-white/60'>{service.description}</p>
              {/** border */}
              <div className='border-b border-white/20 w-full'></div>
            </div>
           })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;