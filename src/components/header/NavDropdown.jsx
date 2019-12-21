import React from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";

import "./HeaderNav.scss";

const NavDropdown = ({ style, navOpen }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <NavLink to="/" onClick={() => navOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/projects" onClick={() => navOpen(false)}>
        Projects
      </NavLink>
      <NavLink to="/about" onClick={() => navOpen(false)}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={() => navOpen(false)}>
        Contact
      </NavLink>
    </animated.div>
  );
};

export default NavDropdown;
