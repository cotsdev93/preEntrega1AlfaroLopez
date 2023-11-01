import "./ItemListContainer.module.css"
export default function ItemListContainer(props) {
  return (
    <div>
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Pinturas</a></li>
            <li><a href="">Fotos</a></li>
        </ul>
        <div>
          <p>{props.miProp}</p>
        </div>
    </div>
  )
}
