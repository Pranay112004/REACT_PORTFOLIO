import React, { useLayoutEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Helper Hook to get element width for the scroller
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

// VelocityText Component for animated background
function VelocityText({ children, baseVelocity = 100, numCopies = 6 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);

  const wrap = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  };

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = Array.from({ length: numCopies }).map((_, i) => (
    <span className="flex-shrink-0" key={i} ref={i === 0 ? copyRef : null}>
      {children}
    </span>
  ));

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap text-center font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white/10"
        style={{ x }}
      >
        {spans}
      </motion.div>
    </div>
  );
}

// Main Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VJTI SHOP Website",
      description:
        "A comprehensive e-commerce platform built for VJTI students and faculty, featuring product listings, shopping cart functionality, and secure payment processing.",
      technologies: ["HTML", "CSS", "Python", "JavaScript"],
      liveUrl: "https://vjti-web.onrender.com",
      fallbackImage: "/images/vjti-shop-placeholder.jpg", // Add fallback images
      accentColor: "text-blue-300",
      buttonColor:
        "from-blue-600/80 to-blue-700/80 hover:from-blue-500/90 hover:to-blue-600/90",
    },
    {
      id: 2,
      title: "PRODUCT STORE Website",
      description:
        "A modern product showcase and store application with dynamic product management, responsive design, and seamless user experience.",
      technologies: ["React.js", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://my-buy-sell-web.onrender.com",
      fallbackImage: "/images/product-store-placeholder.jpg",
      accentColor: "text-green-300",
      buttonColor:
        "from-green-600/80 to-green-700/80 hover:from-green-500/90 hover:to-green-600/90",
    },
    {
      id: 3,
      title: "Chat-GPT Clone",
      description:
        "An intelligent conversational AI application that mimics ChatGPT functionality with real-time chat interface and AI-powered responses.",
      technologies: ["MERN Stack", "AI"],
      liveUrl: "https://gpt-clone-s951.onrender.com",
      fallbackImage: "/images/chat-gpt-placeholder.jpg",
      accentColor: "text-purple-300",
      buttonColor:
        "from-purple-600/80 to-purple-700/80 hover:from-purple-500/90 hover:to-purple-600/90",
    },
    {
      id: 4,
      title: "YOUTUBE-CLONE",
      description:
        "A fully functional YouTube clone with video streaming, search functionality, responsive design, and modern UI/UX elements.",
      technologies: ["Vite+React", "Tailwind CSS", "React Router"],
      liveUrl: "https://yt-clone-k02s.onrender.com",
      fallbackImage: "/images/youtube-clone-placeholder.jpg",
      accentColor: "text-red-300",
      buttonColor:
        "from-red-600/80 to-red-700/80 hover:from-red-500/90 hover:to-red-600/90",
    },
    {
      id: 5,
      title: "Rock-Paper-Scissors Game",
      description:
        "An interactive and engaging Rock-Paper-Scissors game with smooth animations, score tracking, and responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      liveUrl: "https://rps-gamee-zeta.vercel.app",
      fallbackImage: "/images/rps-game-placeholder.jpg",
      accentColor: "text-orange-300",
      buttonColor:
        "from-orange-600/80 to-orange-700/80 hover:from-orange-500/90 hover:to-orange-600/90",
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // Adjusted for earlier trigger
          toggleActions: "play none none none",
        },
      });
      gsap.from(".project-card", {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 90%", // Adjusted for earlier trigger
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-black text-white min-h-[80vh]"
      ref={sectionRef}
    >
      {/* Background Velocity Text */}
      <div className="absolute inset-0 z-0">
        <VelocityText baseVelocity={50}>
          PROJECTS • CREATIONS • PORTFOLIO •
        </VelocityText>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            My Creations
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 italic">
            A showcase of my passion for building and creating.
          </p>
        </div>

        {/* Projects Container */}
        <div
          className="space-y-12 sm:space-y-16 md:space-y-20"
          ref={projectsRef}
        >
          {projects.length ? (
            projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-300 hover:scale-[1.01] ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Preview */}
                <div className="md:w-1/2 relative mb-6 md:mb-0">
                  <Tilt
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    perspective={1000}
                    glareEnable={false}
                  >
                    <div className="aspect-video relative overflow-hidden rounded-xl shadow-2xl shadow-black/50">
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} preview`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 hidden"
                        style={{
                          backgroundImage: `url(${project.fallbackImage})`,
                          backgroundSize: "cover",
                        }}
                      >
                        Preview unavailable
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-md text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform font-semibold border border-white/30 text-sm sm:text-base"
                        >
                          <FaExternalLinkAlt /> Quick Preview
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </div>

                {/* Project Details */}
                <div className="md:w-1/2">
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${project.accentColor} text-shadow-lg`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed italic text-shadow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`bg-transparent ${project.accentColor} text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-current/40 hover:border-current/70 transition-colors backdrop-blur-sm text-shadow`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Link Button */}
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${project.buttonColor} backdrop-blur-md text-white font-semibold py-2 sm:py-3 px-4 sm:px-5 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 border border-white/20 text-sm sm:text-base`}
                    >
                      <FaExternalLinkAlt className="text-xs sm:text-sm" />
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 text-lg">
              No projects found
            </p>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        @media screen and (max-width: 640px) {
          .project-card {
            gap: 4rem;
          }
          .aspect-video {
            aspect-ratio: 16 / 9;
            height: auto;
            min-height: 200px;
          }
        }
        @media screen and (max-width: 768px) {
          .text-4xl {
            font-size: 2rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .mb-16 {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
