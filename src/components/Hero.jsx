import React from "react";
import "../assets/hero.css";

function Hero(props) {
  return (
    <>
      <img src={props.img} alt="hero-img" className={props.imgCls} />
      <div className="hero-desc">
        <h1 className={props.headingClass}>{props.heading}</h1>
        <p>{props.description}</p>
        <a href="" className={props.btnClass}>
          {props.btn}
        </a>
      </div>
    </>
  );
}

export default Hero;
