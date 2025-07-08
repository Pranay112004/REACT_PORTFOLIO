import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranay-suresh-meshram-698a6334a",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/Pranay112004",
      icon: FaGithub,
      color: "hover:text-gray-900",
    },
    {
      name: "Twitter",
      url: "#",
      icon: FaTwitter,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_pranay_meshram_11",
      icon: FaInstagram,
      color: "hover:text-pink-600",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About Section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Pranay Meshram</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web
              solutions that make a difference. Always learning, always
              building.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <IconComponent
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(item.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400">
              <div>
                <p className="text-sm sm:text-base font-medium">Email</p>
                <a
                  href="mailto:pranaym820@gmail.com"
                  className="text-xs sm:text-sm hover:text-white transition-colors duration-300 break-all"
                >
                  pranaym820@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium">Phone</p>
                <a
                  href="tel:+919503474561"
                  className="text-xs sm:text-sm hover:text-white transition-colors duration-300"
                >
                  +91 9503474561
                </a>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium">Location</p>
                <p className="text-xs sm:text-sm">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-center">
              <span className="text-xs sm:text-sm">
                &copy; {currentYear} Pranay Meshram. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;
