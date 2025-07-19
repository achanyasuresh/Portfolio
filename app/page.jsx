"use client";
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import Work from "./work/page";
import Resume from "./resume/page";
import Contact from "./contact/page";

const Home = () => {
  const handleDownloadCV = () => {
    try {
       const resumeUrl = '/resume.pdf';
    const fallbackUrl = 'https://raw.githubusercontent.com/achanyasuresh/Portfolio/master/public/resume.pdf';
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Achanya_Suresh_Resume.pdf";
       link.onerror = () => {
      window.open(fallbackUrl, '_blank');
    };
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        <div className="container mx-auto h-full px-4 py-16">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
            {/* Text Section */}
            <motion.div
              className="text-center xl:text-left max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-base text-cyan-400 font-mono tracking-widest">FULL STACK DEVELOPER</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
                Hello, I am <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Achanya Suresh Puthiyottil
                </span>
              </h1>
              <p className="mb-10 text-gray-300 text-lg leading-relaxed">
                I build intuitive digital products with modern technologies. Dedicated to crafting scalable, maintainable, and elegant solutions that improve user experience.
              </p>

              {/* Button + Socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
                  </Button>
                </motion.div>

                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/achanyasuresh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    aria-label="GitHub"
                    whileHover={{ y: -5 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/achanyasureshputhiyottil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    aria-label="LinkedIn"
                    whileHover={{ y: -5 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="mailto:achanyapsuresh96@gmail.com"
                    className="w-12 h-12 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    aria-label="Email"
                    whileHover={{ y: -5 }}
                  >
                    <FiMail />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10">
                <Photo />
              </div>
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>

        <Stats />

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-cyan-400/30 pb-4">
            Featured Projects
          </h2>
          <Work />
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-cyan-400/30 pb-4">
            My Experience & Background
          </h2>
          <Resume />
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-cyan-400/30 pb-4">
            Get in Touch
          </h2>
          <Contact />
        </div>
      </section>

      <footer className="bg-[#0f172a] border-t border-[#1e293b] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Achanya Suresh</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/achanyasuresh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/achanyasureshputhiyottil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:achanyapsuresh96@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiMail className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Achanya Suresh Puthiyottil. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
