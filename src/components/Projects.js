import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VJTI SHOP Website",
      description:
        "A full-stack e-commerce platform for students to buy and sell college-related items.",
      technologies: ["HTML", "CSS", "Python", "JavaScript"],
      liveUrl: "https://vjti-web.onrender.com",
    },
    {
      id: 2,
      title: "PRODUCT STORE Website",
      description:
        "A fully functional e-commerce platform with product listing, and cart features built using the MERN stack.",
      technologies: ["React.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://my-buy-sell-web.onrender.com",
    },
    {
      id: 3,
      title: "Chat-GPT Clone",
      description:
        "An AI-powered chatbot interface that mimics the ChatGPT experience with a clean UI and smart responses.",
      technologies: ["MERN Stack", "AI"],
      liveUrl: "https://gpt-clone-s951.onrender.com",
    },
    {
      id: 4,
      title: "YOUTUBE-CLONE",
      description:
        "A full-stack video streaming application that replicates the core functionalities of YouTube.",
      technologies: ["Vite+react", "Tailwind CSS", "React Router"],
      liveUrl: "https://yt-clone-k02s.onrender.com",
    },
    {
      id: 5,
      title: "Rock-Paper-Scissors Game",
      description:
        "A simple rock-paper-scissors game built using React.js and CSS. Play against the computer!",
      technologies: ["React", "CSS", "JavaScript"],
      liveUrl: "https://rps-gamee-zeta.vercel.app",
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      <style>
        {`
          .projects-carousel-container {
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 2500px;
            margin-top: 4rem;
            /* Increased height to accommodate larger cards */
            height: 600px; 
          }

          .projects-slider {
            /* Increased size of the project cards */
            width: 380px; 
            height: 540px;
            position: relative;
            transform-style: preserve-3d;
            animation: project-spin 40s linear infinite;
          }

          .projects-slider:hover {
            animation-play-state: paused;
          }

          @keyframes project-spin {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          
          .project-slider-item {
            position: absolute;
            inset: 0;
            /* Decreased translateZ to make the gap smaller */
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(450px);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            backface-visibility: hidden;
          }

          .project-slider-item:hover {
            /* Adjusted hover effect for the new size */
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(480px) scale(1.05);
            box-shadow: 0 20px 60px rgba(168, 85, 247, 0.25);
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            My Creations
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-6">
            A showcase of my passion for building and creating.
          </p>
        </motion.div>

        <motion.div
          className="projects-carousel-container"
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <div className="projects-slider">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-slider-item"
                style={{
                  "--position": index + 1,
                  "--quantity": projects.length,
                }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glarePosition="all"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg h-full flex flex-col transition-all duration-300 hover:border-purple-500/50">
                    <div className="p-6 flex flex-col h-full">
                      <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
                        <iframe
                          src={project.liveUrl}
                          title={`${project.title} preview`}
                          className="w-full h-full border-0"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white py-2 px-4 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform"
                          >
                            <FaExternalLinkAlt />
                            Live Demo
                          </a>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 h-28 overflow-y-auto">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-700/50 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
