import carritoicon from "./assets/carritoicon.png";
const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img
        style={{ width: 20, height: 20 }}
        src={carritoicon}
        alt="cart-widget"
      />
      0
    </div>
  );
};

export default CartWidget;
