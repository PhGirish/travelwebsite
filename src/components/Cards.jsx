import React from "react";
import { CardData } from "../data/carddata";
import "../assets/card.css";

function Cards() {
  return (
    <div className="card-main">
      <div className="card-heading">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="card-dir">
        {CardData.map((data) => (
          <div className="cards">
            <div className="card-img">
              <img src={data.img} alt="" />
            </div>
            <div className="card-desc">
              {" "}
              <h2>{data.name}</h2>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
