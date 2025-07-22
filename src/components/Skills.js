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

// Categorized skills for better organization
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
      { name: "Postman", icon: FaTools, color: "text-orange-600" },
    ],
  },
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1], // A nice bouncy ease
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden"
      ref={ref}
    >
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

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-purple-500 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={skillVariants}>
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.2}
                      glarePosition="all"
                    >
                      <div className="group relative w-full h-32 sm:h-36 flex flex-col items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-900/80">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <skill.icon
                          className={`text-4xl sm:text-5xl mb-3 transition-colors duration-300 ${skill.color}`}
                        />
                        <h4 className="text-sm sm:text-base font-medium text-white text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
