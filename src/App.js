import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PortfolioBanner from "./PortfolioBanner.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/UI/SplashCursor/SplashCursor";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioBanner />} />
          <Route
            path="/portfolio"
            element={
              <>
                <SplashCursor />
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
