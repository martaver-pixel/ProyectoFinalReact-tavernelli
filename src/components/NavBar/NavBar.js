import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h3 className="navBrand">amazin</h3>
      <div>
        <button className="navButtons">Celulares</button>
        <button className="navButtons">Tablets</button>
        <button className="navButtons">Notebooks</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
