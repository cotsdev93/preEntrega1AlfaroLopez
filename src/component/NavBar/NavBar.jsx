import "./NavBar.module.css";
import logo from "../../assets/img/logo.png";
import List from "../ItemListContainer/ItemListContainer"
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <List miProp="Hola, bienvenido" />
      <CartWidget />
    </nav>
  );
}
