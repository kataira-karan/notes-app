import React from "react";
import "../LandingPage/LandingPage.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" class="logo">
        Take A Note
      </Link>
      <ul class="nav-list">
        <li>
          <Link to="/addnote">Add Notes</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
