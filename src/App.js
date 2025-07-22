import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/UI/SplashCursor/SplashCursor";

function App() {
  return (
    // The parent div is great for global styling
    <div className="App">
      <SplashCursor />
      <Navbar />

      {/* Wrap the main sections in a <main> tag */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
