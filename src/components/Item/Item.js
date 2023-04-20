import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h1 className="ItemHeader">{name}</h1>
      </header>
      <picture>
        <img
          src={img}
          style={{ width: 300, height: 300 }}
          alt={name}
          className="ItemImg"
        />
      </picture>
      <section>
        <p className="Info">Precio: {price} galletitas</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
