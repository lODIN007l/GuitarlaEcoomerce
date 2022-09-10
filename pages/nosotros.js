import Image from "next/image";
import Layouts from "../components/Layouts";
import styles from "../styles/Nosotros.module.css";
const Nosotros = () => {
  return (
    <Layouts pagina="nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          {/* imagen */}
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Nosotros imagen"
          />
          {/* parrafo */}
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptatem dicta debitis quas nulla commodi, adipisci
              odio architecto, ipsam illo a, nesciunt cum! Maiores, aliquid
              accusantium? Non perspiciatis distinctio cumque!
            </p>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default Nosotros;
