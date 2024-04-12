import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../data/menuitems";
import "../assets/navbar.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Navbody">
      <div className="nav">
        <h2>Triipp</h2>
        <ul className="nav-list">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.cName} onClick={scrollToTop}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
