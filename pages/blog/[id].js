import Image from "next/image";
import { formatearFecha } from "../../helpers/formatearFecha";
import Layout from "../../components/Layouts";
const EntradBlog = ({ entrada }) => {
  const { contenido, imagen, resumen, titulo, published_at } = entrada;

  // console.log(entrada);
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article>
          <Image
            src={imagen.url}
            alt={`Imagen de entrada ${titulo}`}
            width={800}
            height={600}
            layout="responsive"
          />
          <div>
            <p>{formatearFecha(published_at)}</p>
            <p>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};
export default EntradBlog;

// export async function getServerSideProps({ query: { id } }) {
//   const url = `http://localhost:1337/blogs/${id}`;
//    const url = `${process.env.API_URL}/blogs/${id}`;
//   //   console.log(url);
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   //   console.log(entrada);
//   return {
//     props: {
//       entrada: entrada,
//     },
//   };
// }

// con staticprops
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  // console.log(url);
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { id: entrada.id.toString() },
  }));
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // const url = `http://localhost:1337/blogs/${id}`;
  const url = `${process.env.API_URL}/blogs/${id}`;
  // console.log(url);
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();
  //   console.log(entrada);
  return {
    props: {
      entrada: entrada,
    },
  };
}
