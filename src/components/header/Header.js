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
      {/* A div linetop será removida quando a tela for rolada */}
      {!isScrolled && <div className={styles.linetop}></div>}

      <div className={styles.logoandnav}>
        <div className={styles.logoContainer}>
          {/* Exibição condicional do logo ou favicon */}
          {!isScrolled ? (
            <img
              src="./images/logoheader.png"
              alt="logo"
              className={styles.logo}
            />
          ) : (
            <Link href="/">
              <img src="/favicon.ico" alt="logo" className={styles.favicon} />
            </Link>
          )}
        </div>
        <nav className={`${styles.menu} ${styles.responsiveMenu}`}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/quemsomos">Quem Somos</Link>
            </li>
            <li>
              <Link href="/trabalheconosco">Trabalhe Conosco</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className=""></div>
      <a href="https://wa.me/5511940238626?text= Olá, tudo bem?" target="_blank">
        <img src="/whatsAppicone.png" className={styles.whatsicon} alt="" />
      </a>
    </div>
  );
}
