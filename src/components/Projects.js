import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const globalAnimationsCss = `
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

.animate-fade-in {
  animation: fade-in 0.8s ease-in-out forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
`;

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "VJTI SHOP Website",
      description:
        "A full-stack e-commerce platform with HTML, CSS, JS, and Python. VJTI Shop is a web-based e-commerce platform designed to serve the students of Veermata Jijabai Technological Institute (VJTI). The platform allows users to browse and purchase Notes, Books, lost items, and can sell college-related items.",
      technologies: ["HTML", "CSS", "Python", "JavaScript"],
      liveUrl: "https://vjti-web.onrender.com",
    },
    {
      id: 2,
      title: "PRODUCT STORE Website",
      description:
        "A fully functional e-commerce platform with product listing, and cart features built using the MERN stack.",
      technologies: ["React.js", "Tailwind CSS", "MongoDB", "Express.js"],
      liveUrl: "https://my-buy-sell-web.onrender.com",
    },
    {
      id: 3,
      title: "Chat-GPT Clone",
      description:
        "An AI-powered chatbot interface that provides real-time answers and assistance. Built with React and Python, it mimics the ChatGPT experience with a clean UI and smart responses.",
      technologies: ["MERN Stack"],
      liveUrl: "https://gpt-clone-s951.onrender.com",
    },
    {
      id: 4,
      title: "Railway Customer Support Chatbot",
      description:
        "The Railway Chatbot is an AI-powered conversational interface designed to assist users with common railway-related queries. It provides quick, real-time answers about train schedules, ticket booking procedures, platform information, train running status, and other frequently asked questions. Built using React.js for the frontend and powered by a structured dataset (CSV).",
      technologies: ["React", "CSS", "Python", "AI/ML"],
      liveUrl: "https://new-railway-customersupport.vercel.app",
    },
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
      { threshold: 0.1 }
    );

    const currentRef = projectsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-black"
      ref={projectsRef}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16 animate-fade-in">
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 relative inline-block"
            aria-label="My Projects Section"
          >
            My Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 xs:w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"></div>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-200 mt-4 xs:mt-6">
            Some of my recent work, currently in progress.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`space-y-8 xs:space-y-12 sm:space-y-16 ${
            isVisible ? "animate-float" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Preview */}
                <div className="relative h-32 xs:h-40 sm:h-48 md:h-56 lg:h-auto bg-gray-900 overflow-hidden group">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} preview`}
                    className="w-full h-full border-0 transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    onError={() =>
                      console.error(
                        `Failed to load iframe for ${project.title}`
                      )
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-cyan-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 xs:p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt
                        size={16}
                        className="xs:size-20 sm:size-24"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 xs:p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 xs:mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  <div className="mb-4 xs:mb-6 sm:mb-8">
                    <h4 className="text-2xs xs:text-xs sm:text-sm font-semibold text-gray-200 mb-2 xs:mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1 xs:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 xs:px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-2xs xs:text-xs sm:text-sm md:text-base"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="inline mr-1 xs:mr-2 text-xs xs:text-sm sm:text-base" />
                      View Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 xs:mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="px-4 xs:px-6 py-2 xs:py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-base">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 opacity-90 px-2 xs:px-4 sm:px-0">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-gray-800 text-gray-200 font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base"
              aria-label="Scroll to contact section"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
