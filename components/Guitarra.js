import Image from "next/image";
import Link from "next/link";
const Guitarra = ({ guitarra }) => {
  //   console.log(guitarra);
  const { nombre, descripcion, imagen, precio, url } = guitarra;
  return (
    <div>
      <Image
        layout="responsive"
        src={imagen.url}
        width={600}
        height={800}
        alt="imagen guitarra"
      />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;
