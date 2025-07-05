import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pranay-suresh-meshram-698a6334a',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Pranay112004',
      icon: FaGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: FaTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_pranay_meshram_11',
      icon: FaInstagram,
      color: 'hover:text-pink-600'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pranay Meshram</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:pranaym820@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  pranaym820@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:+919503474561"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 9503474561
                </a>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Pranay Meshram. All rights reserved.</span>
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
