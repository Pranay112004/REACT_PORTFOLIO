import React from 'react';
import { FaUser } from 'react-icons/fa';
import Lightning from './Lightning';
import './Lightning.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 lightning-background">
      <Lightning hue={200} xOffset={-1.5} speed={0.7} intensity={0.25} size={1.8} />
      <Lightning hue={300} xOffset={1.5} speed={0.5} intensity={0.2} size={2.2} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 mt-6">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="font-semibold text-blue-400">Full Stack Developer</span> with experience in creating dynamic, 
                user-friendly web applications. I love turning complex problems into simple, 
                beautiful designs.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started with curiosity and has evolved into 
                a career where I continuously learn and adapt to new technologies and trends.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Responsive Design & UI/UX</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Database Design & Management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">API Development & Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Main circle */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <FaUser className="text-8xl text-gray-300" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-yellow-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
