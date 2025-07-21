import React from "react";
import TextType from "./TextType/TextType.jsx";
import ScrollFloat from "./ScrollFloat/ScrollFloat.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div className="relative inline-block">
            <ScrollFloat
              containerClassName="mb-4"
              textClassName="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center"
            >
              About Me
            </ScrollFloat>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 xs:w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"></div>
          </div>

          <ScrollFloat
            containerClassName="mt-4 xs:mt-6"
            textClassName="text-base xs:text-lg sm:text-xl text-gray-300"
          >
            Get to know me better
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4 xs:space-y-6">
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed px-2 xs:px-4 sm:px-0">
                I'm a passionate{" "}
                <TextType
                  text={[
                    "Full Stack Developer",
                    "Problem Solver",
                    "Tech Enthusiast",
                    "Team Player",
                  ]}
                  typingSpeed={60}
                  deletingSpeed={40}
                  pauseDuration={1600}
                  loop={true}
                  className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-purple-400"
                  cursorClassName="text-purple-400"
                />{" "}
                with experience in creating dynamic, user-friendly web
                applications.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed px-2 xs:px-4 sm:px-0">
                My journey in web development started with curiosity and evolved
                into a continuous learning career.
              </p>

              <div className="mt-4 xs:mt-6 sm:mt-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mb-3 xs:mb-4 text-center lg:text-left">
                  What I Do
                </h3>
                <ul className="space-y-2 xs:space-y-3 max-w-sm xs:max-w-md lg:max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-purple-600 rounded-full mr-2 xs:mr-3 flex-shrink-0"></div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">
                      Full-Stack Web Development
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-cyan-500 rounded-full mr-2 xs:mr-3 flex-shrink-0"></div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">
                      Responsive Design & UI/UX
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-purple-400 rounded-full mr-2 xs:mr-3 flex-shrink-0"></div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">
                      Database Design & Management
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-cyan-400 rounded-full mr-2 xs:mr-3 flex-shrink-0"></div>
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">
                      API Development & Integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 lg:order-2 mb-4 xs:mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 xs:p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/IMG_3301.jpg"
                    alt="About Me"
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
    </section>
  );
};

export default About;
