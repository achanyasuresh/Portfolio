"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Fabuloso Event Management",
    description: "Comprehensive platform for event planning with real-time notifications and admin dashboards.",
    stack: ["React", "Node.js", "MongoDB", "Firebase", "Twilio API", "Tailwind CSS"],
    image: "/Portfolio/assets/work/1.png",
    live: "https://www.fabuloso.co.nz",
    github: "https://github.com/achanyasuresh/Fabulousoevent"
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Salt Mango Tree Web Application",
    description: "Restaurant management system with real-time order tracking and analytics.",
    stack: ["Next.js", "Firebase", "Stripe API", "Tailwind CSS", "Cloud Functions"],
    image: "/Portfolio/assets/work/3.png",
    live: "https://www.saltmangotree.co.nz/",
    github: "https://github.com/achanyasuresh/"
  },
  {
    num: "03",
    category: "Mobile App",
    title: "Māori Language Game",
    description: "Educational app for preserving Te Reo Māori with interactive learning.",
    stack: ["React Native", "Supabase", "Expo", "TypeScript"],
    image: "/Portfolio/assets/work/4.jpg",
    live: "",
    github: "https://github.com/achanyasuresh/Maori-game"
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Food Ordering Application",
    description: "A food ordering application with payment integration.",
    stack: ["React.js", "HTML", "CSS","Node js", "MongoDB", "Express",],
    image: "/Portfolio/assets/work/5.png",
    live: "",
    github: "https://github.com/achanyasuresh/FoodDelivery"
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
      id="work"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Project Info - Left Side */}
          <div className="w-full xl:w-[45%] flex flex-col order-2 xl:order-none">
            <div className="flex flex-col gap-8 xl:gap-10">
              {/* Project Number */}
              <div className="text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <span className="text-lg text-accent capitalize">
                  {project.category} Project
                </span>
              </div>

              {/* Project Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg text-white mb-3">Tech Stack:</h3>
                <ul className="flex flex-wrap gap-3">
                  {project.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-3 py-1.5 bg-gray-800/50 rounded-full text-accent border border-gray-700 text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700/50 my-2"></div>

              {/* Project Links */}
              <div className="flex items-center gap-6">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white group">
                          <span>View Live</span>
                          <FiExternalLink className="text-lg group-hover:text-accent transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white group">
                        <BsGithub className="text-lg group-hover:text-accent transition-colors" />
                        <span>View Code</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Slider - Right Side */}
          <div className="w-full xl:w-[55%] mb-12 xl:mb-0">
            <Swiper
              modules={[]}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              onSlideChange={handleSlideChange}
              loop={false}
              speed={300}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] xl:h-full relative bg-black flex items-center justify-center">
                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={800}
                      height={500}
                      className="object-contain max-h-full max-w-full"
                      quality={100}
                      priority
                      unoptimized 
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-8 left-8 z-20">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.category} Project</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider Navigation Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-4 absolute right-8 bottom-8 z-20"
                btnStyles="bg-accent hover:bg-accent-hover text-white text-xl w-12 h-12 flex justify-center items-center transition-all rounded-full shadow-md"
                onNextClick={() => swiperRef.current?.slideNext()}
                onPrevClick={() => swiperRef.current?.slidePrev()}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
