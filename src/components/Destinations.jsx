import React from "react";
import "../assets/destination.css";

function Destinations(props) {
  return (
    <>
      <div className="dest-main">
        <div className={props.class}>
          <div>
            {" "}
            <h2>{props.place}</h2>
            <p>{props.desc}</p>
          </div>

          <img className={props.imgCN} src={props.img1} alt="placeimg" />
          <img className={props.imgCN2} src={props.img2} alt="placeimg" />
        </div>
      </div>
    </>
  );
}

export default Destinations;
