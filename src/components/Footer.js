import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranay-suresh-meshram-698a6334a",
      icon: FaLinkedin,
    },
    { name: "GitHub", url: "https://github.com/Pranay112004", icon: FaGithub },
    { name: "Twitter", url: "#", icon: FaTwitter },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_pranay_meshram_11",
      icon: FaInstagram,
    },
  ];

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  const currentYear = new Date().getFullYear();

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      id="footer"
      className="relative bg-black text-white pt-16 pb-8 overflow-hidden"
      ref={ref}
    >
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute top-0 right-0 translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* About Section */}
          <motion.div
            className="space-y-4 md:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white">Pranay Meshram</h3>
            <p className="text-gray-400">
              Full Stack Developer crafting digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, y: -2, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:pranaym820@gmail.com"
                  className="hover:text-purple-400"
                >
                  pranaym820@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919503474561" className="hover:text-purple-400">
                  +91 9503474561
                </a>
              </li>
              <li>Mumbai, Maharashtra</li>
              <li>Sahas Ramteke - SMS INTEGRATION</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>© {currentYear} Pranay Meshram. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
