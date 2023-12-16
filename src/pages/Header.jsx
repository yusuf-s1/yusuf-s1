import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FcReading } from "react-icons/fc";
import { PiMoonThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

export default function Header({ handleClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="headerInner">
          <div className="logo">
            <button
              className="iconButton openMenu"
              onClick={() => setIsMenuOpen(true)}
            >
              <RxHamburgerMenu />
            </button>
            <Link to="/">
              <IconContext.Provider
                value={{ className: "logo-icon", size: "3em" }}
              >
                <div>
                  <FcReading />
                </div>
              </IconContext.Provider>
            </Link>
            <span className="logo-name">Yusuf Solmaz</span>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/pages/">Projeler</Link>
              </li>
              <li>
                <Link to="/pages/articles">Yazılar</Link>
              </li>
              <li>
                <Link to="/pages/contact">İletişim</Link>
              </li>
            </ul>
            <div className="iconButtons">
              <Tooltip title="Koyu Mod">
                <button className="iconButton" onClick={handleClick}>
                  <PiMoonThin />
                </button>
              </Tooltip>
              <Tooltip title="Github">
                <a
                  className="iconButton"
                  href="https://github.com/yusuf-s1"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </Tooltip>
              <Tooltip title="İngilizce">
                <button className="iconButton">
                  <HiLanguage />
                </button>
              </Tooltip>
            </div>
          </nav>
        </div>
      </header>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menuInner">
          <button
            className="iconButton closeMenu"
            onClick={() => setIsMenuOpen(false)}
          >
            <AiOutlineArrowLeft />
          </button>
          <ul>
            <li>
              <NavLink to="/pages/" onClick={() => setIsMenuOpen(false)}>
                Projeler
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/articles"
                onClick={() => setIsMenuOpen(false)}
              >
                Yazılar
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/contact" onClick={() => setIsMenuOpen(false)}>
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
