import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="navBrand" to="/">
        <h3>amazin</h3>
      </Link>

      <div className="buttons">
        <NavLink
          to={`/category/Pequeño`}
          className={({ isActive }) => (isActive ? "ActiveOption " : "Option ")}
        >
          Pequeño
        </NavLink>
        <NavLink
          to={`/category/Mediano`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mediano
        </NavLink>
        <NavLink
          to={`/category/Grande`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Grande
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
