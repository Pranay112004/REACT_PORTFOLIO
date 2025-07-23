import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { FaCode, FaPalette, FaDatabase, FaLink } from "react-icons/fa";

// A Framer Motion powered typing effect
const TypingEffect = ({ texts, speed = 80, delay = 2000 }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className="text-purple-400">
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-full bg-purple-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const whatIDo = [
    { icon: FaCode, text: "Full-Stack Web Development" },
    { icon: FaPalette, text: "Responsive Design & UI/UX" },
    { icon: FaDatabase, text: "Database Design & Management" },
    { icon: FaLink, text: "API Development & Integration" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-black text-white overflow-hidden"
      ref={ref}
    >
      <style>
        {`
          html, body {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Aurora Background */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-3000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-400">
            A little bit about my journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Side: Image */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            variants={imageVariants}
          >
            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} perspective={1000}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 to-cyan-400 animate-pulse">
                <div className="w-full h-full bg-gray-900 rounded-full p-2">
                  <img
                    src="/images/IMG_3301.jpg"
                    alt="Pranay Meshram"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = "/images/IMG_3301.jpg";
                    }}
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:col-span-3 space-y-8">
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate{" "}
              <TypingEffect
                texts={[
                  "Full Stack Developer.",
                  "Problem Solver.",
                  "Tech Enthusiast.",
                  "Team Player.",
                ]}
              />{" "}
              With experience in creating dynamic, user-friendly web
              applications.
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              My journey in web development started with curiosity and has
              evolved into a career of continuous learning and creation.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-4">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatIDo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <item.icon className="text-cyan-400 text-xl flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
