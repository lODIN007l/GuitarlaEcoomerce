import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barraNav}>
          {/* logotipo */}
          <Link href="/">
            <a>
              <Image
                priority="true"
                src="/img/logo.svg"
                alt="Imagen logo"
                width={400}
                height={100}
              />
            </a>
          </Link>

          {/* nav */}
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>$ {guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            height={1200}
            width={500}
            layout="fixed"
            src="/img/header_guitarra.png"
            alt="Imagen guitarras"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
