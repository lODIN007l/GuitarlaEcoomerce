import styles from "../styles/Cursos.module.css";

const Curso = ({ curso }) => {
  console.log(curso);
  const { Titulo, contenido, Imagen } = curso;
  //   console.log(imagen.url);
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{Titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a href="" className={styles.enlace}>
            {" "}
            Mas Informacion
          </a>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 /0.65),
                rgb(0 0 0 /0.7)
              ),
              url(${Imagen.url});
            background-position: 50%;
            background-size: cover;
          }
          @media (min-width: 768px) {
            section {
            }
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
