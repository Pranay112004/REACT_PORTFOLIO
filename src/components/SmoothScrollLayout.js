// src/components/PortfolioLayout.js

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// This component wraps your portfolio pages and sets up the smooth scroll
const PortfolioLayout = ({ children }) => {
  useEffect(() => {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup function to destroy Lenis instance on component unmount
    return () => {
      lenis.destroy();
      // Also remove the ticker listener
      gsap.ticker.remove(lenis.raf);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <>{children}</>;
};

export default PortfolioLayout;
