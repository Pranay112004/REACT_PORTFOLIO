import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG Logo Component with animations
const Logo = ({ onClick }) => (
  <button
    onClick={onClick}
    className="focus:outline-none"
    aria-label="Go to Home section"
  >
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M22 0L44 22L22 44L0 22L22 0Z" fill="url(#logoGradient)" />
      <path d="M22 6L38 22L22 38L6 22L22 6Z" fill="black" fillOpacity="0.2" />
      <path
        d="M22 11L33 22L22 33L11 22L22 11Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  </button>
);

// Custom Animated Hamburger/Close Icon
const MenuToggle = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="relative w-8 h-8 text-white focus:outline-none z-50"
  >
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="absolute w-8 h-0.5 bg-white"
      style={{ top: "8px" }}
    />
    <motion.div
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      className="absolute w-8 h-0.5 bg-white"
      style={{ top: "16px" }}
    />
    <motion.div
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="absolute w-8 h-0.5 bg-white"
      style={{ top: "24px" }}
    />
  </button>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-lg border-b border-white/20 shadow-xl"
            : //? "bg-gray-900/95 backdrop-blur-md shadow-lg"
              "bg-black/20 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo onClick={() => handleNavClick("home")} />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <DesktopNavItem key={item} onClick={() => handleNavClick(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </DesktopNavItem>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MenuToggle
                isOpen={isMenuOpen}
                toggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pt-24 px-8"
            >
              <ul className="flex flex-col items-center space-y-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Custom Nav Item with Spotlight Effect
const DesktopNavItem = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative px-5 py-2 text-lg text-white font-medium transition-colors duration-300 rounded-md"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: mousePos.y,
              left: mousePos.x,
              x: "-50%",
              y: "-50%",
              width: "150px",
              height: "150px",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0) 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Navbar;
