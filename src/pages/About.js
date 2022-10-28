import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about">
        <Navbar />

        <div className="about-content">
          <div className="about-image">
          </div>

          <div className="about-info">
            <h2>About</h2>
            <h2>About</h2>
            <p>
              Altschool Second Assignment
            </p>
          </div>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
    </div>
  );
};

export default About;
