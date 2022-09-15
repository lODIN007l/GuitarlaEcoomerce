import Image from "next/image";
import Layouts from "../components/Layouts";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito }) => {
  //   console.log(carrito);
  return (
    <Layouts>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  {/* imagen */}
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={producto.imagen}
                      alt="ImagenProducto"
                    />
                  </div>
                  {/* informacion */}
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <p className={styles.cantidad}>{producto.cantidad}</p>
                    <p className={styles.precio}>
                      {" "}
                      $ <span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      {" "}
                      Subtotal : $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layouts>
  );
};

export default Carrito;
