import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li></li>
          <li class="link">
            <a href="#">About me</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a class="contactme" href="#">
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
