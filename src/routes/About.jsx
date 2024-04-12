import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div className="hero-container">
      <Hero
        img="img3.jpg"
        imgCls="hero-aboutimg"
        heading="About Us"
        headingClass="about-h"
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
