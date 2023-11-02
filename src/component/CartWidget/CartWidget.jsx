import "./CartWidget.css";
import cart from "../../assets/img/cart.svg";

export default function CartWidget() {
  return (
    <>
      {/* <div className="circulo">
        <img src={cart} alt="" />
        <div className="circulo2">
          <span>0</span>
        </div> */}
        <h1>
          <span className="cantidadProductos">0</span>
        </h1>
      {/* </div> */}
    </>
  );
}
