import React from "react";

import Hero from "../components/Hero";
import ContactUs from "../components/ContactUS";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <div className="hero-container">
        <Hero
          img="img1.jpg"
          imgCls="hero-aboutimg"
          heading="Contact Us"
          headingClass="about-h"
        />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
