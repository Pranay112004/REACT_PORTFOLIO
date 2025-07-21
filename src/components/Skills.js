import React, { useState, useEffect, useRef } from "react";
import StarBorder from "./StarBorder/StarBorder.jsx";
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
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(139, 92, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
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

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
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
.animate-float {
  animation: float 4s ease-in-out infinite;
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
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Postman", icon: FaTools, color: "text-orange-600" },
  ];

  useEffect(() => {
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

  return (
    <section
      id="skills"
      className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-black"
      ref={skillsRef}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 relative inline-block animate-fade-in-up">
            My Skills
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full ${
                isVisible ? "animate-expand-underline" : ""
              }`}
            ></div>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-200 mt-4 xs:mt-6 animate-fade-in-up">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-float">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <StarBorder
                key={skill.name}
                className={`transform transition-transform duration-300 hover:scale-105 w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[240px] md:max-w-[260px] ${
                  isVisible ? "animate-pop-in" : "opacity-100"
                }`}
                color="rgba(139, 92, 246, 0.5)"
                speed="8s"
                thickness={1}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : "0s" }}
                aria-label={`${skill.name} skill card`}
              >
                <div className="flex flex-col items-center text-center p-2 xs:p-3 sm:p-4 lg:p-6">
                  <div
                    className={`
                      p-1 xs:p-2 sm:p-3 lg:p-4 rounded-full 
                      bg-gradient-to-br from-gray-800 to-gray-900 mb-2 xs:mb-3 sm:mb-4
                      transition-all duration-300 
                      group-hover:scale-110 group-hover:from-purple-600 group-hover:to-cyan-500
                      animate-pulse-shadow-on-hover
                    `}
                    aria-label={`Skill icon for ${skill.name}`}
                  >
                    <Icon
                      className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${skill.color}`}
                    />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white drop-shadow-md mb-1 xs:mb-2 sm:mb-3">
                    {skill.name}
                  </h3>
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
