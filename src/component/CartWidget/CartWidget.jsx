import "./CartWidget.css";
import cart from "../../assets/img/cart.svg";

export default function CartWidget() {
  return (
    <>
      <div className="circulo">
        <img src={cart} alt="" />
        <div className="circulo2">
          <span>0</span>
        </div>
      </div>
    </>
  );
}
