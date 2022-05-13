import React from "react";

import logo from "./Spottabl.jpg";

import "../App.css";

function Header() {
  return (
    <div class="App">
      <div>
        <img src={logo} class="App-logo" alt="logo" className="iconDetails" />
        <div style={{ paddingLeft: "70px" }}>
          <h4>YOUR SPOTTABLE TEAM</h4>
          <div style={{ marginLeft: "5px", fontSize: "15px" }}>
            Spottabl supports you all throughout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
