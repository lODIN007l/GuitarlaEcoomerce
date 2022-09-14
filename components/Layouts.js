import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarLA - ${pagina}`}</title>
        <meta name="descripcion" content="Sitio web de guitarras" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  );
};

Layouts.defaultProps = {
  guitarra: null,
};
export default Layouts;
