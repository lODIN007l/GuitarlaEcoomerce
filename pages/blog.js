import { useEffect } from "react";
import Layouts from "../components/Layouts";
const Blog = () => {
  //consulta Api
  useEffect(() => {
    const consultarApi = async () => {
      const url = "http://localhost:1337/blogs";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
    };
    consultarApi();
  }, []);

  return (
    <Layouts pagina="blog">
      <h1>Desde Blog</h1>
    </Layouts>
  );
};

export default Blog;
