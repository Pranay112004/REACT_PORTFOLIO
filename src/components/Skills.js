import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaTools,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// We flatten the skills into a single array for the carousel
const allSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "Postman", icon: FaTools, color: "text-orange-600" },
];

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      {/* Embedded CSS for the 3D carousel animation */}
      <style>
        {`
          .skills-carousel-container {
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1500px;
            margin-top: 4rem;
            height: 400px; /* Define a height for the carousel area */
          }

          .skills-slider {
            width: 180px; /* Width of a single skill card */
            height: 180px; /* Height of a single skill card */
            position: relative;
            transform-style: preserve-3d;
            animation: autoRun 35s linear infinite;
          }

          .skills-slider:hover {
            animation-play-state: paused;
          }

          @keyframes autoRun {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          
          .skills-slider .item {
            position: absolute;
            inset: 0;
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(450px);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            backface-visibility: hidden;
          }

          .skills-slider .item:hover {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(480px) scale(1.1);
            box-shadow: 0 10px 40px rgba(0, 255, 255, 0.2);
          }
        `}
      </style>

      {/* Aurora Background Effect */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-cyan-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            My Technical Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6">
            A collection of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* 3D Rotating Skills Carousel */}
        <div className="skills-carousel-container">
          <div className="skills-slider">
            {allSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="item"
                style={{
                  "--position": index + 1,
                  "--quantity": allSkills.length,
                }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glarePosition="all"
                >
                  <div className="group relative w-full h-full flex flex-col items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-900/80">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <skill.icon
                      className={`text-5xl sm:text-6xl mb-3 transition-colors duration-300 ${skill.color}`}
                    />
                    <h4 className="text-base sm:text-lg font-medium text-white text-center">
                      {skill.name}
                    </h4>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
