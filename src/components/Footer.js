import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  return (
    <footer>
      <ul>
        <li onClick={handleToTop}>
          <NavLink to={"/portfolio"}>Real Estate</NavLink>
        </li>
        {/* <li onClick={handleToTop}>
          <NavLink to={"/blog"}>Phân Tích</NavLink>
        </li> */}
        <li onClick={handleToTop}>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <p>Copyright 2025 © NAM BA SON</p>
    </footer>
  );
};

export default Footer;
