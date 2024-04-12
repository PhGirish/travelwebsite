import React from "react";

import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import DestinationData from "../components/DestinationData";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="hero-container">
        <Hero
          img="img4.jpg"
          imgCls="hero-img"
          heading="Your Journey Your Story"
          description="Choose Your Favourite Destination"
          btn="Travel Plan"
          btnClass="btn"
        />
      </div>
      <DestinationData />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
