import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpen(false);
            }}
          >
            <div className="flexCenter h-menu" style={getMenuStyle(menuOpen)}>
              <a href="">Residencies</a>
              <a href="">Our Value</a>
              <a href="">Get Started</a>
              <button className="button">
                <a href="">Contact Us</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <BiMenuAltRight />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
