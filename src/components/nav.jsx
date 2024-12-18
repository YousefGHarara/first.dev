import "../assets/mobileScreen.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-page">
      <h2 className="logo">
        <NavLink to={"/"}>Logo</NavLink>
      </h2>
      <ul className="list">
        <li>
          <NavLink className={"nav-link"} to={"/html"}>
            Html
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to={"/css"}>
            Css
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to={"/javascript"}>
            JAVASCRIPT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
