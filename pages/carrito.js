import Image from "next/image";
import Layouts from "../components/Layouts";
import styles from "../styles/Carrito.module.css";
import { useEffect, useState } from "react";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);
  // calculo de carrito
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  //   console.log(carrito);
  return (
    <Layouts>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
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
                    <div className={styles.cantidad}>
                      <p>Cantidad :</p>
                      <select
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
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
                  <button
                    type="button"
                    onClick={() => eliminarProducto(producto.id)}
                    className={styles.eliminar}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        {/* subtotal */}
        <div className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          {total > 0 ? (
            <>
              <p>Resumen del pedido</p>
              <p>Total a pagar : ${total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layouts>
  );
};

export default Carrito;
