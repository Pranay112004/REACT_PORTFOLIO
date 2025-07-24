import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your icons.
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaDocker,
  FaGitAlt,
  FaCube,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiSocketdotio,
  SiCplusplus,
  SiSolidity,
  SiIpfs,
  SiPostman,
  SiIntellijidea,
  SiRemix,
  SiVercel,
  SiRailway,
  SiRender,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

// Helper component for the animated background text
function VelocityText({ text, baseVelocity = -2, className }) {
  const content = Array(5).fill(`${text} • `).join("");

  return (
    <div className="parallax-container overflow-hidden whitespace-nowrap">
      <motion.div
        // RESPONSIVE CHANGE: Adjusted background text size for smaller screens
        className={`flex whitespace-nowrap text-4xl md:text-5xl font-bold uppercase ${className}`}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <span>{content}</span>
        <span>{content}</span>
      </motion.div>
    </div>
  );
}

// Main Skills Component
const Skills = () => {
  // Define all your skills with a category
  const techSkills = [
    // Frontend
    {
      name: "ReactJS",
      icon: FaReact,
      category: "Frontend",
      color: "text-cyan-400",
    },
    {
      name: "JavaScript",
      icon: FaJsSquare,
      category: "Frontend",
      color: "text-yellow-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "Frontend",
      color: "text-white",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      category: "Frontend",
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      category: "Frontend",
      color: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Frontend",
      color: "text-cyan-500",
    },
    // Backend
    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "Backend",
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      category: "Backend",
      color: "text-gray-400",
    },
    { name: "Java", icon: FaJava, category: "Backend", color: "text-red-500" },
    {
      name: "Python",
      icon: FaPython,
      category: "Backend",
      color: "text-blue-400",
    },
    // Database
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "Database",
      color: "text-green-500",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      category: "Database",
      color: "text-blue-600",
    },
    // Tools
    {
      name: "Git",
      icon: FaGitAlt,
      category: "Tools",
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      category: "Tools",
      color: "text-gray-300",
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "Tools",
      color: "text-orange-500",
    },
    { name: "Vercel", icon: SiVercel, category: "Tools", color: "text-white" },
    {
      name: "Railway",
      icon: SiRailway,
      category: "Tools",
      color: "text-purple-400",
    },
    {
      name: "Render",
      icon: SiRender,
      category: "Tools",
      color: "text-cyan-400",
    },
  ];

  const filters = ["All", "Frontend", "Backend", "Database", "Tools"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(techSkills);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredSkills(techSkills);
    } else {
      setFilteredSkills(
        techSkills.filter((skill) => skill.category === activeFilter)
      );
    }
  }, [activeFilter, techSkills]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-black text-white py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-[0.03] flex flex-col justify-center gap-8">
        <VelocityText text="Scalable" baseVelocity={-1} />
        <VelocityText text="Responsive" baseVelocity={1.5} />
        <VelocityText text="Interactive" baseVelocity={-1.2} />
        <VelocityText text="Secure" baseVelocity={1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Tech Stack</h2>
        <p className="text-gray-400 text-center text-lg mb-12">
          I constantly learn and adapt to new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 w-full"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                {/* RESPONSIVE CHANGE: Adjusted icon size */}
                <skill.icon className={`text-4xl sm:text-5xl ${skill.color}`} />
                <p className="text-center font-medium text-xs sm:text-sm">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-12 text-gray-500">
          Total Technologies: {techSkills.length}
        </p>
      </div>
    </section>
  );
};

export default Skills;
