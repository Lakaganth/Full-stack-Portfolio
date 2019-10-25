import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import HeadLogo from "../../assets/svg/headlogo.svg";
import "./HeaderNav.scss";
import NavDropdown from "./NavDropdown";

const HeaderNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%, 0 ,0) scale(0.7)`
  });
  const menuAnimation1 = useSpring({
    transform: isNavOpen
      ? `translateY(2px) rotate(45deg)`
      : ` translateY(0px) rotate(0deg)`
  });
  const menuAnimation2 = useSpring({
    transform: isNavOpen
      ? `translateY(-12px) rotate(135deg)`
      : ` translateY(0px) rotate(0deg)`
  });

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src={HeadLogo} alt="LakaGanth" />
        </Link>
      </div>

      <div
        onClick={() => setNavOpen(!isNavOpen)}
        className="menu-burger-container"
      >
        <animated.div style={menuAnimation1} className="top-bun"></animated.div>
        <animated.div
          style={menuAnimation2}
          className="bottom-bun"
        ></animated.div>
      </div>
      <NavDropdown style={navAnimation}></NavDropdown>
    </div>
  );
};

export default HeaderNav;
