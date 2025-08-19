import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOverlay } from "../redux/dataSlice";
import { NavLink } from "react-router-dom";

const TopMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleClickOpenMenu = () => {
    dispatch(updateOverlay(true));
  };

  const [showMenu, setShowMenu] = useState(data);

  useEffect(() => {
    if (!data) {
      const handleScroll = () => {
        setShowMenu(window.scrollY > 60);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id="topMenu" style={{ height: showMenu ? "80px" : 0 }}>
      <div className="bar" onClick={handleClickOpenMenu}>
        <i className="fa-solid fa-bars"></i>
        Menu
      </div>
      <div className="brandName">
        <NavLink to={"/"}>
          {/* <h1>NAM</h1> */}
          <img src=".././img/iconMenuB.png" alt="" />
          <p>invest - realty</p>
        </NavLink>
      </div>
      <div className="iconContact">
        <a
          href="https://www.facebook.com/NamiHome.Official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com/@namihomesaigon" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="mailto:namihome.saigon@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="tel:+84903052135">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
