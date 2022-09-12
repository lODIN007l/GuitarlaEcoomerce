import { useRouter } from "next/router";

const EntradBlog = ({ entrada }) => {
  console.log(entrada);
  return (
    <div>
      <h1>Desde entrada blog</h1>{" "}
    </div>
  );
};
export default EntradBlog;

// export async function getServerSideProps({ query: { id } }) {
//   const url = `http://localhost:1337/blogs/${id}`;
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
  const url = "http://localhost:1337/blogs";
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
  const url = `http://localhost:1337/blogs/${id}`;
  //   console.log(url);
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();
  //   console.log(entrada);
  return {
    props: {
      entrada: entrada,
    },
  };
}
