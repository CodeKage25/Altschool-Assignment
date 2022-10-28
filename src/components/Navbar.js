import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">

      <div className="nav-links">
        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#FF3A40" : "",
          })}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink className="link"
        style={({ isActive }) => ({
          color: isActive ? "#FF3A40" : "",
        })}
        to="/about"
        >
          About
        </NavLink>

        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#FF3A40" : "",
          })}
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
