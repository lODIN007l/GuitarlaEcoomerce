import Image from "next/image";
import Layouts from "../../components/Layouts";
import styles from "../../styles/Guitarra.module.css";
import { useState } from "react";

const Producto = ({ guitarra, agregarCarrito }) => {
  const { descripcion, imagen, nombre, precio, id } = guitarra[0];
  const [cantidad, setCantidad] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cantidad);
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }
    // agregar al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(guitarraSeleccionada);
    e.preventDefault();
  };

  return (
    <Layouts pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          src={imagen.url}
          width={180}
          height={350}
          alt="imagen guitarra"
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{`$ ${precio}`}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad :</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccion --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default Producto;

export async function getServerSideProps({ query: { url } }) {
  // console.log(url);
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  // console.log(guitarra);
  return {
    props: {
      guitarra,
    },
  };
}
