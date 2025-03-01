import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix avatar"
      />
      <div className="nav-content">
        <a href="">Home</a>
        <a href="">TV shows</a>
        <a href="">Movies</a>
        <a href="">Originals</a>
        <a href="">Recently Added</a>
        <a href="">Portfolio</a>
      </div>
    </div>
  );
}

export default NavBar;
