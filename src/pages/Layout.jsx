import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";
import NoFound from "./NotFound";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="layout">
        <div className="layoutInner">
          <div className="sideBar">
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
                <NavLink
                  to="/pages/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route index element={<Projects />} />
              <Route path="articles" element={<Articles />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </div>
          <div className="onThisPage">On This Page</div>
        </div>
      </div>
    </>
  );
}
