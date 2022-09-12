import { useEffect } from "react";
import Layouts from "../components/Layouts";
import Entrada from "../components/Entrada";
const Blog = ({ entradas }) => {
  return (
    <Layouts pagina="blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layouts>
  );
};

export async function getServerSideProps() {
  //consulta Api
  const url = "http://localhost:1337/blogs";
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
