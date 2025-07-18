"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Full-stack developer with a Master's in Information Technology from the University of Waikato. I specialize in building responsive, user-friendly web applications with modern technologies across the entire stack.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Achanya Suresh Puthiyottil",
      icon: <FaEnvelope className="text-accent" />,
    },
    {
      fieldName: "Phone",
      fieldValue: "(+64) 22 522 2920",
      icon: <FaPhone className="text-accent" />,
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
      icon: <span className="text-accent">+</span>,
    },
    {
      fieldName: "Github",
      fieldValue: "achanyasuresh",
      icon: <FaGithub className="text-accent" />,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
      icon: <span className="text-accent">🌏</span>,
    },
    {
      fieldName: "Email",
      fieldValue: "achnyapsuresh96@gmail.com",
      icon: <FaEnvelope className="text-accent" />,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
      icon: <span className="text-accent">✓</span>,
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
      icon: <span className="text-accent">🗣️</span>,
    },
  ],
};

// experience data
const experience = {
  title: "Professional Journey",
  description:
    "My diverse experience spans from freelance development to corporate roles, delivering high-quality solutions across various domains.",
  items: [
    {
  company: "REALMEDGE High Performance Computing",
  position: "Freelance Full-Stack Developer",
  duration: "May 2025 - Present",
  location: "Hamilton, New Zealand",
  projects: [
    {
      client: "Salt Mango Tree Restaurant (Auckland & Hamilton)",
      description: "Restaurant management POS system",
      highlights: [
        "Built custom Web application with Next.js, Firebase, and Stripe integration",
        "Developed role-specific dashboards (admin, kitchen, counter staff)",
        "Implemented real-time order tracking and analytics",
        "Created inventory management and reporting features",
        "Integrated with payment processing and receipt generation"
      ],
      technologies: ["Next.js", "Firebase", "Stripe", "Tailwind CSS", "Cloud Functions","Material UI"]
    },
    {
      client: "Fabuloso Event Makers (Hamilton)",
      description: "Event management platform",
      highlights: [
        "Developed full-stack event management solution",
        "Implemented email/SMS notifications for new enquiries",
        "Built secure admin dashboard for event management",
        "Created public event registration with shareable URLs",
        "Designed responsive UI with seamless user experience"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Twilio API", "Material UI"]
    }
  ],
    },
    {
      company: "Whakatohea Māori Trust Board",
      position: "Mobile App Developer Intern",
      duration: "Nov 2024 - Feb 2025",
      location: "Opotiki, New Zealand",
      highlights: [
        "Developed Māori language learning app with React Native",
        "Integrated Supabase for backend services",
        "Participated in agile development cycles"
      ],
      technologies: ["React Native", "Supabase", "Expo", "Bootstrap", "Typescript"]
    },
    {
      company: "SayOne Technologies",
      position: "Software Engineer L2",
      location: "Kerala, India",
      duration: "Jan 2022 - May 2024",
      highlights: [
        "Developed responsive web applications with React and Redux stack",
        "Developed Application form scratch and integrated APIs",
        "Created dynamic dashboards of comparing banking in US banks",
        "Implemented testing with Jest and Enzyme",
      ],
      technologies: ["React", "Redux", "HTML", "CSS", "Javascript"]
    },
    {
      company: "UL Technology Solutions Pvt Ltd",
      position: "Developer Analyst",
      location: "Kerala, India",
      duration: "Oct 2019 - Jan 2022",
      highlights: [
        "Developed responsive web applications with React and Redux",
        "Part of a team of creating an application for Automatic number plate recoginition system",
        "Developed an application using Node js and MongoDB"
      ],
      technologies: ["React","Redux", "Python", "Django", "Node.js", "MongoDB"]
    }
  ]
};

// education data
const education = {
  title: "Education & Achievements",
  description: "My academic journey and notable accomplishments in the field of technology.",
  items: [
    {
      institution: "University of Waikato",
      degree: "Master of Information Technology",
      duration: "2024 - 2025",
      honors: "First-Class Honours",
      achievements: [
        "Research & Enterprise Study Award",
        "Vice Chancellor's International Excellence Scholar"
      ]
    },
    {
      institution: "Kerala Technological University",
      degree: "Master of Computer Application",
      duration: "2019",
    },
    {
      institution: "University of Calicut",
      degree: "Bachelor of Computer Application",
      duration: "2016",
    }
  ]
};

// skills data
const skills = {
  title: "Technical Expertise",
  description: "My comprehensive skill set across various technologies and domains.",
  categories: [
    {
      name: "Frontend Development",
      skills: [
        { icon: <FaReact className="text-blue-400" />, name: "React", level: 90 },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js", level: 85 },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", level: 95 },
        { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript", level: 85 },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", level: 95 },
        { icon: <FaCss3 className="text-blue-500" />, name: "CSS3", level: 90 },
        { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", level: 80 },
        { icon: <span className="text-purple-500">.NET</span>, name: ".NET", level: 70 },
        { icon: <span className="text-blue-600">Pg</span>, name: "PostgreSQL", level: 80 },
        { icon: <span className="text-green-600">Mg</span>, name: "MongoDB", level: 75 },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase", level: 85 }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { icon: <FaGithub className="text-white" />, name: "GitHub", level: 90 },
        { icon: <span className="text-orange-500">Dk</span>, name: "Docker", level: 70 },
        { icon: <span className="text-yellow-500">AWS</span>, name: "AWS", level: 65 },
        { icon: <span className="text-black dark:text-white">Vc</span>, name: "Vercel", level: 85 }
      ]
    }
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-screen flex items-center justify-center py-12 xl:py-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-12"
        >
          {/* Tab List - Left Side */}
          <TabsList className="flex flex-row xl:flex-col w-full xl:w-64 mx-auto xl:mx-0 gap-2 p-2 bg-gray-800/50 rounded-xl backdrop-blur-sm">
            {["experience", "education", "skills", "about"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 xl:flex-none px-4 py-3 rounded-lg data-[state=active]:bg-accent/20 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all hover:bg-gray-700/50"
              >
                <span className="capitalize">{tab}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content - Right Side */}
          <div className="flex-1 min-h-[70vh]">
            {/* Experience Tab */}
           <TabsContent value="experience" className="w-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                {experience.title}
              </h3>
              <p className="max-w-2xl text-gray-300">
                {experience.description}
              </p>
            </div>
            
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                {experience.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-accent/40 transition-all shadow-lg"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{item.position}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <p className="text-gray-300">{item.company}</p>
                            {item.location && (
                              <span className="text-xs text-gray-400">{item.location}</span>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-accent font-mono">{item.duration}</span>
                      </div>
                      
                      {/* Render client projects if they exist */}
                      {item.projects ? (
                        <div className="space-y-4">
                          {item.projects.map((project, pIndex) => (
                            <div key={pIndex} className="pl-4 border-l-2 border-accent/30">
                              <h4 className="font-medium text-white/90">{project.client}</h4>
                              <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                              <ul className="space-y-1">
                                {project.highlights.map((highlight, hIndex) => (
                                  <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                    <span className="text-accent mt-1.5">•</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {project.technologies.map((tech, tIndex) => (
                                  <span 
                                    key={tIndex}
                                    className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                          {/* General highlights for the position */}
                          {item.generalHighlights && (
                            <div className="mt-4">
                              <ul className="space-y-1">
                                {item.generalHighlights.map((highlight, hIndex) => (
                                  <li key={`general-${hIndex}`} className="flex items-start gap-2 text-sm text-gray-300">
                                    <span className="text-accent mt-1.5">•</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Regular experience item without client projects */
                        <>
                          <div className="mt-2">
                            <ul className="space-y-2">
                              {item.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                                  <span className="text-accent mt-1.5">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {item.technologies && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.technologies.map((tech, tIndex) => (
                                <span 
                                  key={tIndex}
                                  className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                      </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                    {education.title}
                  </h3>
                  <p className="max-w-2xl text-gray-300">
                    {education.description}
                  </p>
                </div>
                
                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-1 gap-6">
                    {education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-accent/40 transition-all shadow-lg"
                      >
                        <div className="flex flex-col md:flex-row md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="w-2 h-2 rounded-full bg-accent"></span>
                              <p className="text-gray-300">{item.institution}</p>
                            </div>
                            {item.honors && (
                              <div className="mt-1 text-sm text-accent">{item.honors}</div>
                            )}
                          </div>
                          <span className="text-sm text-accent font-mono">{item.duration}</span>
                        </div>
                        
                        {item.achievements && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-400 mb-1">Achievements:</h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, aIndex) => (
                                <li key={aIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                  <span className="text-accent mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                    {skills.title}
                  </h3>
                  <p className="max-w-2xl text-gray-300">
                    {skills.description}
                  </p>
                </div>
                
                <div className="space-y-8">
                  {skills.categories.map((category, catIndex) => (
                    <motion.div
                      key={catIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-4">{category.name}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (catIndex + skillIndex) * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-accent/40 transition-all shadow-md flex flex-col items-center gap-3"
                          >
                            <div className="text-4xl">
                              {skill.icon}
                            </div>
                            <div className="text-center w-full">
                              <p className="font-medium text-white">{skill.name}</p>
                              <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                                <div 
                                  className="bg-accent h-1.5 rounded-full" 
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">{skill.level}%</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                    {about.title}
                  </h3>
                  <p className="max-w-2xl text-gray-300">
                    {about.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Info */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {about.info.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                        >
                          <div className="text-accent">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{item.fieldName}</p>
                            <p className="font-medium text-white">{item.fieldValue}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Professional Summary */}
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
                      <div className="space-y-4">
                        <p className="text-gray-300">
                          Full-stack developer with expertise in modern JavaScript frameworks and cloud technologies.
                          Passionate about building performant, accessible applications with clean code and intuitive UX.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href="https://github.com/achanyasuresh" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                          >
                            <FaGithub className="text-xl" />
                            <span>GitHub</span>
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/achanyasureshputhiyottil/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white"
                          >
                            <FaLinkedin className="text-xl" />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Strengths */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {[
                          "Clean Code Architecture",
                          "UI/UX Focus",
                          "Problem Solving",
                          "Agile Development",
                          "Team Collaboration",
                          "Continuous Learning"
                        ].map((strength, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="text-accent">✓</span>
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;