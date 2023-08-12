import React from "react";
import "./navbar.css";
import logo from "../../assdests/logo.png";

function Navbar() {
  return (
    <div className="Navbar fixed-navbar">
      <img src={logo} alt="" width="80" />
      <div className="button">
        <button>Book Now</button>
        <span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
