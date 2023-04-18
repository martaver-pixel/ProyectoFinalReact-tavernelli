import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <h3 className="navBrand">amazin</h3>
      </Link>

      <div className="navButtons">
        <NavLink
          to={`/category/Pequeños`}
          className={({ isActive }) => (isActive ? "ActiveOption " : "Option ")}
        >
          Pequeño
        </NavLink>
        <NavLink
          to={`/category/Medianos`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mediano
        </NavLink>
        <NavLink
          to={`/category/Grandes`}
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
