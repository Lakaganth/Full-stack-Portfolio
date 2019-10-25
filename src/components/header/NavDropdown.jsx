import React from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";

import "./HeaderNav.scss";

const NavDropdown = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </animated.div>
  );
};

export default NavDropdown;
