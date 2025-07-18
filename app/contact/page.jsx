"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Phone",
      value: "(+64) 22 522 2920",
      link: "tel:+64225222920"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "achanyapsuresh96@gmail.com",
      link: "mailto:achanyapsuresh96@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Hamilton, New Zealand"
    },
    {
      icon: <FaGithub className="text-xl" />,
      title: "GitHub",
      value: "github.com/achanyasuresh",
      link: "https://github.com/achanyasuresh"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/achanyasuresh",
      link: "https://linkedin.com/in/achanyasureshputhiyottil"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-accent">Contact Me</h2>
        <p className="text-white/80 mb-12 text-lg">
          Feel free to reach out through any of these channels
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#27272c] rounded-lg p-6 hover:bg-[#33333a] transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/20 text-accent">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-white/80">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;