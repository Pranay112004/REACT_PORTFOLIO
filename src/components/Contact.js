import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    setSubmissionStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      console.log("Form data submitted:", formData);
      setSubmissionStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 5000); // Hide status after 5 seconds
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      value: "pranaym820@gmail.com",
      link: "mailto:pranaym820@gmail.com",
    },
    { icon: FaPhone, value: "+91 9503474561", link: "tel:+919503474561" },
    { icon: FaMapMarkerAlt, value: "Mumbai, Maharashtra", link: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: {
      borderColor: "rgba(168, 85, 247, 1)",
      boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.3)",
    },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
      ref={ref}
    >
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 -translate-x-1/3 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-3000"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Have a question or a project in mind? Let's talk.
          </p>
        </motion.div>

        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000}>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Left Side: Info */}
            <div className="p-8 lg:p-12 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-gray-400 mt-2">
                  Find me through any of these channels.
                </p>
              </motion.div>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 group"
                    variants={itemVariants}
                  >
                    <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:border-purple-500 transition-colors">
                      <item.icon className="text-purple-400 text-xl" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.value}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 lg:p-12">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none`}
                    placeholder="John Doe"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none`}
                    placeholder="john.doe@example.com"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full bg-white/5 border ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none`}
                    placeholder="Your message here..."
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg disabled:opacity-50"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.div>
              </motion.form>
              <AnimatePresence>
                {submissionStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                    className={`mt-4 p-3 rounded-lg flex items-center gap-3 text-sm ${
                      submissionStatus === "success"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {submissionStatus === "success" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaExclamationCircle />
                    )}
                    {submissionStatus === "success"
                      ? "Message sent successfully! I'll be in touch."
                      : "An error occurred. Please try again."}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Contact;
