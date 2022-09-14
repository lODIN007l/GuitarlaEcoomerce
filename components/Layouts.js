import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarLA - ${pagina}`}</title>
        <meta name="descripcion" content="Sitio web de guitarras" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
