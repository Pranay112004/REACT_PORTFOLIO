import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
// import Lightning from './Lightning'; // Removed Lightning import
// import './Lightning.css'; // Removed Lightning CSS import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // Replaced alert with a console log for better user experience in a web app
    console.log('Form data submitted:', formData);
    // In a real application, you might show a success message in a modal or toast
    alert('Thank you for your message! I\'ll get back to you soon.'); // Keeping alert as per previous code, but typically would use a custom modal.
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'pranaym820@gmail.com',
      link: 'mailto:pranaym820@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9503474561',
      link: 'tel:+919503474561'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Mumbai, Maharashtra',
      link: '#'
    }
  ];

  return (
    // Changed background to white and added relative positioning for Lightning
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Container for Lightning components, positioned absolutely and behind content */}
      {/* Removed Lightning components */}
      {/* <div className="absolute inset-0 z-0">
        <Lightning hue={250} xOffset={-1.8} speed={0.6} intensity={0.3} size={1.6} />
        <Lightning hue={180} xOffset={1.8} speed={0.9} intensity={0.25} size={2.0} />
      </div> */}

      {/* Main content container, positioned relatively and above the lightning */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Adjusted text color for white background */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Get In Touch
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-700 mt-6">Let's work together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Adjusted text colors */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    // Adjusted background, border, and hover colors for white background
                    className="flex items-center p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:bg-gray-100 transition-colors duration-300 transform hover:translate-x-2"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <IconComponent className="text-white text-xl" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      {item.link !== '#' ? (
                        <a
                          href={item.link}
                          className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form - Adjusted input styles and text colors */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  // Adjusted input background, border, and text colors
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  // Adjusted input background, border, and text colors
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  // Adjusted textarea background, border, and text colors
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-vertical text-gray-900 placeholder-gray-500"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action - Adjusted background and text colors */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gray-100 rounded-2xl p-8 text-gray-900 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can bring your ideas to life with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:pranaym820@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+919503474561"
                className="px-8 py-4 border-2 border-gray-400 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-300"
              >
                Call Me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
