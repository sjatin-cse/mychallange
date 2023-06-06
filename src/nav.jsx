import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li style={{ float: "left" }}>
          <a href="#">
            <h1 id="logo">YourChallange</h1>
          </a>
        </li>

        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#download">Download</a>
        </li>
        <li>
          <a class="Product" href="#news">
            Product
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
