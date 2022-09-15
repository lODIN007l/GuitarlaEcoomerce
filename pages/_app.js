import "../styles/normalize.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  // const initialState = () => JSON.parse(localStorage.getItem("carrito")) || [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialState = [];
  const [carrito, setCarrito] = useState(initialState);

  // VERIFICAR SI YA EXISTE
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito"));
    if (carritoLS) {
      setCarrito(carritoLS);
    }
  }, []);

  //PERMANECER EN MEMORIA
  useEffect(() => {
    if (carrito !== initialState) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito, initialState]);

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
      // si no existe y es nuevo aqui -->
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
