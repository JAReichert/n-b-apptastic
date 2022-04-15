import React, { useState } from "react";
import "./Navbar2.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar2({ navbarLinks }) {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <nav className="navbar">
      <span className="navbarLogo">N-B-Apptastic!</span>

      {menuClicked ? (
        <FiMenu size={25} className="navbarMenu" onClick={toggleMenuClick} />
      ) : (
        <FiX size={25} className="navbarMenu" onClick={toggleMenuClick} />
      )}
      <ul
        className={menuClicked ? "navbarList" : "navbarList navbarList--active"}
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbarItem" key={item.title}>
              <a className="navbarLinks" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
