"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Modern web apps using React, Next.js, Node.js, and MongoDB. I focus on performance, scalability, and clean code.",
    href: "/work",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform apps built with React Native & Expo. Clean design, fast performance, and native experience.",
    href: "/work",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Interfaces crafted with Figma & Adobe XD. Accessibility, user-first flows, and brand consistency are key.",
    href: "/work",
  },
  {
    num: "04",
    title: "Cloud & DevOps",
    description:
      "CI/CD workflows and deployments using Firebase, AWS, and Vercel. Infrastructure that's fast, secure, and scalable.",
    href: "/work",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white" id="services">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl hover:bg-white/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-accent">{service.num}</span>
                <Link
                  href={service.href}
                  className="text-accent bg-white/5 p-3 rounded-full border border-white/10 hover:bg-accent hover:text-white transition-all"
                >
                  <BsArrowRight className="text-xl" />
                </Link>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-all">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js", "Next.js", "Node.js", "TypeScript",
              "React Native", "MongoDB", "Firebase", "Tailwind CSS",
              "Git", "AWS", "Figma", "Jest", "GraphQL", "Python"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white hover:bg-accent hover:text-white transition-all backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
