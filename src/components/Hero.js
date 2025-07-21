import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-black flex items-center px-4 xs:px-6 sm:px-8"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600 via-transparent to-transparent opacity-5 pointer-events-none z-0"></div>

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 xs:gap-y-12 lg:gap-y-0 lg:gap-x-8 xs:lg:gap-x-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left order-2 lg:order-1 px-2 xs:px-4 sm:px-0">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 xs:mb-4">
              Hi, I'm{" "}
              <span className="gradient-text font-extrabold">
                Pranay Meshram
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-3">
              Turning Ideas into Full-Stack Web Magic
            </p>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md xs:max-w-lg sm:max-w-xl mx-auto lg:mx-0 mb-4 xs:mb-6">
              I develop full-stack web solutions that are fast, responsive, and
              designed with the user in mind.
            </p>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll("projects")}
                className="px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-base"
              >
                View My Work
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="px-4 xs:px-6 py-2 xs:py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-full hover:bg-gradient-to-r hover:from-purple-700/20 hover:to-cyan-600/20 hover:text-white transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full rounded-full bg-purple-400 blur-3xl opacity-30 animate-pulse"></div>
              </div>

              {/* Ring animation */}
              <div className="absolute inset-0 rounded-full z-0 animate-ping-ring"></div>

              {/* Avatar Image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 xs:p-1 relative z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden animate-float-slow">
                  <img
                    src="/images/PM.jpg"
                    alt="Pranay Meshram"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white text-2xl xs:text-3xl sm:text-4xl font-bold"
                    style={{ display: "none" }}
                  >
                    PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 xs:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
        <button
          onClick={() => handleScroll("about")}
          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl"
          aria-label="Scroll to about section"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
