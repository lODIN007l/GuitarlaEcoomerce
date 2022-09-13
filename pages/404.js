import Link from "next/link";
import Layouts from "../components/Layouts";
import styles from "../styles/NoEncotrado.module.css";
const NoEmcontrado = () => {
  return (
    <Layouts>
      <div className={styles.no_encontrado}>
        {" "}
        <h1 className="heading">Pagina No encotrada</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
    </Layouts>
  );
};

export default NoEmcontrado;
