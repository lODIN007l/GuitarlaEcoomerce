import Link from "next/link";
import Layouts from "../components/Layouts";
import Listado from "../components/Listado";
// import styles from '../styles/Home.module.css'

export default function Home({ guitarras }) {
  return (
    <div>
      <Layouts pagina="inicio">
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <Listado guitarras={guitarras} />
        </main>
      </Layouts>
    </div>
  );
}

export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  // // console.log(url);
  // const respuesta = await fetch(url);
  // const guitarras = await respuesta.json();
  // console.log(guitarras);

  //refactor para multiples solictudes
  const urlGuitarra = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCurso = `${process.env.API_URL}/cursos`;
  //destrucion en base a un fetch
  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlCurso),
  ]);
  //destruccion en basea la respuesta
  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
    },
  };
}
