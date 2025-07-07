import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VJTI SHOP Website',
      description: 'A full-stack e-commerce platform with HTML, CSS, JS, and Python. VJTI Shop is a web-based e-commerce platform designed to serve the students of Veermata Jijabai Technological Institute (VJTI). The platform allows users to browse and purchase Notes, Books, lost items, and can sell college related items.',
      technologies: ['HTML', 'CSS', 'Python', 'JavaScript'],
      liveUrl: 'https://vjti-web.onrender.com'
    },
    {
      id: 2,
      title: 'Railway Customer Support Chatbot',
      description: 'The Railway Chatbot is an AI-powered conversational interface designed to assist users with common railway-related queries. It provides quick, real-time answers about train schedules, ticket booking procedures, platform information, train running status, and other frequently asked questions. Built using React.js for the frontend and powered by a structured dataset (CSV).',
      technologies: ['React', 'CSS', 'Python', 'AI/ML'],
      liveUrl: 'https://new-railway-customersupport.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            My Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-6">Some of my recent work and I am working on it..</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Preview */}
                <div className="relative h-40 xs:h-48 sm:h-64 md:h-72 lg:h-auto bg-gray-100 overflow-hidden group">
                  {/* Live Website Preview using iframe */}
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} preview`}
                    className="w-full h-full border-0 transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-green-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt size={20} className="sm:text-2xl" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 xs:p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 xs:mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg leading-relaxed mb-4 xs:mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs sm:text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="mr-2 text-sm" />
                      View Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90 px-4 sm:px-0">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
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
