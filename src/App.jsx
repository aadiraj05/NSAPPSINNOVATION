import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Spline";
import AboutUs from "./Components/AboutUs";
// import Content from "./Components/Content";
import TestimonialCarousel from "./Components/Testimonial";
import Footer from "./Components/Footer";
import SplashScreen from "./Components/SplashScreen";


import About from "./Components/About";
import Contact from "./Components/Contact"; // ✅ Import Contact
import Team from "./Components/Team";
import GetInTouchSection from "./Components/GetInTouchSection";
import ContactUs from "./Components/ContactUs";
import ServicesSection from "./Components/ServicesSection";
import Projects from "./Components/ProjectSection";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Navbar hideLogo={false} />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs />
                  <ServicesSection />
                  <Projects />
                  {/* <Content /> */}
                 
                  <Team />
                  <GetInTouchSection /> 
                  <ContactUs />
                  <TestimonialCarousel />
                  <Footer />
                </>
              }
            />

           
           

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* ✅ Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
