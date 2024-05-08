import styles from "./headertop.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.linetop}></div>

      <div className={styles.logoandnav}>
        {!isScrolled && (
          <div className={styles.logoheader}>
            <a href="/">
              <img src="./images/logoheader.png" alt="logo" />
            </a>
          </div>
        )}
        <nav className={`${styles.menu} ${styles.responsiveMenu}`}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <a href="/contato">Contato</a>
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
