import "../styles/normalize.css";
import "../styles/globals.css";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  const agregarCarrito = (producto) => {
    // en caso que ya este
    // este solo devuelve verdadero o falso
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
        // aqui actualizamos en base al producto encontrado
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
          // en caso de querer acumular los articulos
          // articulo.cantidad = producto.cantidad + articulo.cantidad;
          // console.log(articulo);
        }
        return articulo;
      });
      console.log(carritoActualizado);
      // actualizamos en el set
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };
  return (
    <Component
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      {...pageProps}
    />
  );
}

export default MyApp;
