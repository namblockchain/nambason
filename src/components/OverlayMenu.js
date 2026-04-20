import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLogin, updateOverlay } from "../redux/dataSlice";
import { NavLink } from "react-router-dom";

const OverlayMenu = () => {
  const dispatch = useDispatch();
  const { overlay } = useSelector((state) => state.dataSlice);
  const handleClickClose = () => {
    dispatch(updateOverlay(false));
  };

  // ⚠️ Lock scroll when overlay is shown
  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  const { login } = useSelector((state) => state.dataSlice);
  useEffect(() => {
    dispatch(updateLogin(localStorage.getItem("login")));
  }, [dispatch]);

  return (
    <>
      {overlay && (
        <div className="overlay" onClick={handleClickClose}>
          <div className="close">
            <i className="fa-solid fa-xmark" onClick={handleClickClose}></i>
          </div>
          <ul>
            <li onClick={handleClickClose}>
              <NavLink to={"/portfolio"}>Real Estate</NavLink>
            </li>
            {/* <li onClick={handleClickClose}>
              <NavLink to={"/blog"}>Phân Tích</NavLink>
            </li> */}
            <li onClick={handleClickClose}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>

            {login && (
              <>
                <li>
                  <NavLink to={"/information"} onClick={() => {}}>
                    Information
                  </NavLink>
                </li>
                <li onClick={handleClickClose}>
                  <NavLink
                    to={"/"}
                    onClick={() => {
                      localStorage.removeItem("login");
                      dispatch(updateLogin(false));
                    }}
                  >
                    Log out
                  </NavLink>
                </li>
              </>
            )}

            <li className="iconContact">
              <a
                href="https://www.facebook.com/NamiHome.Official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/@namihomesaigon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="mailto:namsaigonbason@gmail.com"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+84903052135">
                <i className="fa-solid fa-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default OverlayMenu;
