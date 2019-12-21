import React from "react";

import Tilt from "react-parallax-tilt";

import "./LogoParallax.scss";

const LogoMobileParallax = () => {
  return (
    <div className="parallax-page-container">
      <div className="parallax-container">
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={false}
          glareMaxOpacity={0.2}
          scale={1.02}
          gyroscope={true}
        >
          <div className="inner-element">
            <div className="laka-face"></div>
          </div>
        </Tilt>
      </div>
      <div className="heading-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="175"
          viewBox="0 0 176 175"
        >
          <g id="Group_17" data-name="Group 17" transform="translate(-33 -551)">
            <text
              id="Lakshmi_Mohan"
              data-name="Lakshmi
Mohan"
              transform="translate(33 589)"
              fill="#fff"
              font-size="39"
              font-family="Montserrat-SemiBold, Montserrat"
              font-weight="600"
            >
              <tspan x="0" y="0">
                Lakshmi
              </tspan>
              <tspan x="0" y="48">
                Mohan
              </tspan>
            </text>
            <text
              id="web_dev"
              data-name="web dev"
              transform="translate(86 719)"
              fill="#fff"
              font-size="28"
              font-family="Montserrat-SemiBold, Montserrat"
              font-weight="600"
            >
              <tspan x="0" y="0">
                web{" "}
              </tspan>
              <tspan y="0" fill="#8fff0f">
                dev
              </tspan>
            </text>
            <text
              id="full_stack"
              data-name="full stack"
              transform="translate(86 685)"
              fill="#fff"
              font-size="26"
              font-family="Montserrat-Medium, Montserrat"
              font-weight="500"
            >
              <tspan x="0" y="0">
                Full stack
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="scroll"></div>
    </div>
  );
};

export default LogoMobileParallax;
