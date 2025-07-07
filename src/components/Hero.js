import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
const Hero = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-900 via-teal-800 to-green-700 flex items-center hero-pattern">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 leading-tight">
              Hi, I'm <span className="gradient-text font-extrabold">Pranay Meshram</span>
            </h1>
            
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-gray-200 mb-2 xs:mb-3 sm:mb-4 font-medium px-2 sm:px-0">
              Turning Ideas into Full-Stack Web Magic
            </p>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-300 mb-4 xs:mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              I develop full-stack web solutions that are fast, responsive, and designed with the user in mind.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start px-2 xs:px-4 sm:px-0">
              <button
                onClick={() => handleScroll('projects')}
                className="px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group text-xs xs:text-sm sm:text-base"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => handleScroll('contact')}
                className="px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right order-1 lg:order-2 mb-4 xs:mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-96 3xl:h-96 rounded-full bg-gradient-to-br from-blue-400 to-green-400 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/PM.jpg" 
                    alt="Pranay Meshram" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold" style={{display: 'none'}}>
                    PM
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => handleScroll('about')}
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
