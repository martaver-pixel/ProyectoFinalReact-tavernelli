import React from "react";
import carritoicon from "./assets/carritoicon.png";
import "./assets/carritoicon.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="cartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img
        style={{ width: 20, height: 20 }}
        src={carritoicon}
        alt="cart-widget"
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
