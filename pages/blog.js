import { useEffect } from "react";
import Layouts from "../components/Layouts";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;
  // console.log(url);
  return (
    <Layouts pagina="blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layouts>
  );
};

export async function getStaticProps() {
  //consulta Api
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  // console.log(entradas);

  return {
    props: {
      entradas: entradas,
    },
  };
}

export default Blog;
