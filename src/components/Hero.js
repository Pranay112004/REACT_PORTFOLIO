import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-black flex items-center px-4 xs:px-6"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left order-2 lg:order-1 px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text font-extrabold">
                Pranay Meshram
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-3">
              Turning Ideas into Full-Stack Web Magic
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              I develop full-stack web solutions that are fast, responsive, and
              designed with the user in mind.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll("projects")}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                View My Work
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-96 3xl:h-96">
              {/* Glowing ring */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full rounded-full bg-blue-400 blur-3xl opacity-30 animate-pulse"></div>
              </div>

              {/* Ring animation */}
              <div className="absolute inset-0 rounded-full z-0 animate-ping-ring"></div>

              {/* Avatar Image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1 relative z-10">
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
                    className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-4xl font-bold"
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
        <button
          onClick={() => handleScroll("about")}
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <FaChevronDown size={44} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
