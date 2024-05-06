import styles from "./headertop.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.linetop}></div>

      <div className={styles.logoandnav}>
        <div className={styles.logoheader}>
          <a href="/">
            <img src="./images/logoheader.png" alt="logo" />
          </a>
        </div>
        <nav className={`${styles.menu} ${styles.responsiveMenu}`}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="/quemsomos">Quem somos</a>
            </li>
            <li>
              <a href="/login">Trabalhe conosco</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
