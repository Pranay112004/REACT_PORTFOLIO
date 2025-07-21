import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ScrollFloat from "./ScrollFloat/ScrollFloat.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log("Form data submitted:", formData);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "pranaym820@gmail.com",
      link: "mailto:pranaym820@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9503474561",
      link: "tel:+919503474561",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Mumbai, Maharashtra",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollFloat
            containerClassName="mb-4"
            textClassName="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block"
            animationDuration={0.8}
            scrollStart="top bottom+=20%"
            scrollEnd="bottom bottom-=10%"
            stagger={0.02}
          >
            Get In Touch
          </ScrollFloat>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <ScrollFloat
                textClassName="text-2xl font-bold text-gray-900 mb-4"
                animationDuration={0.6}
                scrollStart="top bottom+=20%"
                scrollEnd="bottom bottom-=10%"
                stagger={0.015}
              >
                Let's Connect
              </ScrollFloat>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-5 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 group"
                    aria-label={`${item.title}: ${item.value}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white text-xl" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-base text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-gray-50 border-2 ${
                    errors.name ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 text-base`}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-gray-50 border-2 ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 text-base`}
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 ${
                    errors.message ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-300 resize-y text-gray-900 placeholder-gray-400 text-base`}
                  placeholder="Tell me about your project or just say hello!"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-200 text-base disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Submit contact form"
              >
                <FaPaperPlane className="mr-2 text-sm" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-gray-900 shadow-xl max-w-3xl mx-auto">
            <ScrollFloat
              textClassName="text-2xl sm:text-3xl font-bold mb-4"
              animationDuration={2}
              scrollStart="top bottom+=20%"
              scrollEnd="bottom bottom-=10%"
              stagger={0.015}
            >
              Ready to Start a Project?
            </ScrollFloat>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 px-4 sm:px-0">
              Let's discuss how we can bring your ideas to life with modern web
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:pranaym820@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 text-base"
                aria-label="Email me directly"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+919503474561"
                className="px-8 py-3 border-2 border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 text-base"
                aria-label="Call me now"
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
