import Link from "next/link";
import Layouts from "../components/Layouts";
import Listado from "../components/Listado";
//
//
const Tienda = ({ guitarras }) => {
  // console.log(guitarras);
  return (
    <Layouts pagina="tienda">
      <main>
        <h1 className="heading">Nuestra Coleccion </h1>
        <Listado guitarras={guitarras} />
      </main>
    </Layouts>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  // console.log(url);
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();
  // console.log(guitarras);
  return {
    props: {
      guitarras,
    },
  };
}
