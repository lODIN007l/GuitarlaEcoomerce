import Link from "next/link";
import Layouts from "../components/Layouts";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";
// import styles from '../styles/Home.module.css'

export default function Home({ guitarras, curso, entradas }) {
  return (
    <div>
      <Layouts pagina="inicio" guitarra={guitarras[3]}>
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <Listado guitarras={guitarras} />
        </main>
        <Curso curso={curso} />
        <section className="contenedor">
          <ListadoBlog entradas={entradas} />
        </section>
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
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;
  //destrucion en base a un fetch
  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlCurso),
    fetch(urlBlog),
  ]);
  //destruccion en basea la respuesta
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
