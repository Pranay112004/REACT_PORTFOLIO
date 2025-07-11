import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import StarBorder from "../components/UI/SplashCursor/StarBorder";

// Injected CSS animations
const globalAnimationsCss = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  70% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse-shadow {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

@keyframes expand-underline {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-in-out forwards;
}
.animate-pop-in {
  animation: pop-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
.animate-expand-underline {
  animation: expand-underline 1s ease-in-out forwards;
}
.group:hover .animate-pulse-shadow-on-hover {
  animation: pulse-shadow 1.2s ease-in-out infinite;
}
`;

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Python", icon: FaPython, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  ];

  useEffect(() => {
    // Inject animation CSS into <head>
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = globalAnimationsCss;
    document.head.appendChild(styleSheet);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      document.head.removeChild(styleSheet);
    };
  }, []);

  const getSkillDescription = (skillName) => {
    const descriptions = {
      HTML5: "",
      CSS3: "",
      JavaScript: "",
      React: "",
      "Node.js": "",
      Python: "",
      MongoDB: "",
      MySQL: "",
      "Express.js": "",
      "Next.js": "",
      Java: "",
      GitHub: "",
      "Tailwind CSS": "",
    };
    return descriptions[skillName] || "";
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      ref={skillsRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block animate-fade-in">
            My Skills
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full ${
                isVisible ? "animate-expand-underline" : ""
              }`}
            ></div>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-6 animate-fade-in">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <StarBorder
                as="button"
                key={skill.name}
                className={`transform transition-transform duration-300 hover:scale-105
                  w-full custom-class ${
                    isVisible ? "animate-pop-in" : "opacity-20"
                  }
                `}
                color="rgba(1, 1, 1, 0.5)"
                speed="8s"
                thickness={1}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : "0s" }}
                aria-label={`${skill.name} skill card`}
              >
                <div className="flex flex-col items-center text-center p-3 xs:p-4 sm:p-6 lg:p-8">
                  <div
                    className={`
                      p-2 xs:p-3 sm:p-4 rounded-full 
                      bg-gradient-to-br from-blue-100 to-green-100 mb-3 xs:mb-4 sm:mb-6
                      transition-all duration-300 
                      group-hover:scale-110 group-hover:from-blue-200 group-hover:to-green-200
                      animate-pulse-shadow-on-hover
                    `}
                    aria-label={`Skill icon for ${skill.name}`}
                  >
                    <Icon
                      className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl ${skill.color}`}
                    />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-slate-100 drop-shadow-md mb-1 xs:mb-2 sm:mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed drop-shadow-sm">
                    {getSkillDescription(skill.name)}
                  </p>
                </div>
              </StarBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
