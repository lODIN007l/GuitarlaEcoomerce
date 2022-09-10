import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barraNav}>
          {/* logotipo */}
          <Link href="/">
            <Image
              src="/img/logo.svg"
              alt="Imagen logo"
              width={400}
              height={100}
            />
          </Link>

          {/* nav */}
          <nav className={styles.navegacion}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <Link href="/">
              <a>Tienda</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
