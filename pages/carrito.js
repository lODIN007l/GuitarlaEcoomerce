import Layouts from "../components/Layouts";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito }) => {
  //   console.log(carrito);
  return (
    <Layouts>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layouts>
  );
};

export default Carrito;
