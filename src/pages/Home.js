import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";



const Home = () => {


  

  return (
    <div className="wrapper">
      <div className="home">
        <Navbar />
        <div className="info-home">
        
          <h4>Altschool Frontend  Assignment 2 </h4>
          <p>
          Begining of Altschool Assignment
          </p>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
      </div>
  );
};

export default Home;
