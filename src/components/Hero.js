import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

// NOTE: The complex animation components have been removed for simplicity.

// Component for the 3D Interactive Avatar
const InteractiveAvatar = () => {
  const avatarRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    setStyle({
      transform: `rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
    });
  };

  return (
    <div
      ref={avatarRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="flex justify-center lg:justify-end order-1 lg:order-2"
    >
      <div
        className="relative w-36 h-36 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto aspect-square transition-transform duration-300 ease-out"
        style={style}
      >
        {/* Glowing aura */}
        <div className="absolute inset-0 z-0 rounded-full bg-purple-500/40 blur-3xl animate-pulse-slow opacity-60"></div>

        {/* Avatar Image */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-1 relative z-10">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
            <img
              src="/images/PM.jpg"
              alt="Pranay Meshram"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-black flex items-center px-4 xs:px-6 sm:px-8"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent opacity-40 pointer-events-none z-0"></div>
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
          {/* Left Content - Restored to original structure */}
          <div className="text-center lg:text-left animate-slide-in-left order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 xs:mb-4">
              Hi, I'm{" "}
              <span className="relative inline-block">
                {/* Radial glow effect behind the name */}
                <div className="absolute -inset-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent opacity-20 blur-xl pointer-events-none z-0"></div>
                {/* The gradient text itself */}
                <span className="relative z-10 animated-gradient-text font-extrabold">
                  Pranay Meshram
                </span>
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-3">
              Turning Ideas into Full-Stack Web Magic
            </p>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              I develop full-stack web solutions that are fast, responsive, and
              designed with the user in mind.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll("projects")}
                className="btn-shine px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base"
              >
                View My Work
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="btn-shine-secondary px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-full hover:text-white text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Image */}
          <InteractiveAvatar />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
        <button
          onClick={() => handleScroll("about")}
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <FaChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
