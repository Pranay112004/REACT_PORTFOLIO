import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-6">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
                I'm a passionate{" "}
                <span className="font-semibold text-blue-500">
                  Full Stack Developer
                </span>{" "}
                with experience in creating dynamic, user-friendly web
                applications.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
                My journey in web development started with curiosity and evolved
                into a continuous learning career.
              </p>
              <div className="mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                  What I Do
                </h3>
                <ul className="space-y-3 max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Full-Stack Web Development
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Responsive Design & UI/UX
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Database Design & Management
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700">
                      API Development & Integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2 mb-4 xs:mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/IMG_3301.jpg"
                    alt="About Me"
                    className="w-full h-full object-cover rounded-full"
                  />
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
