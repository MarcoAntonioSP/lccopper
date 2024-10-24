import styles from './navbar.module.css';
import Script from 'next/script';
import { useState, useEffect } from "react";
import Link from 'next/link'; // Import Link

export default function Bannertop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Verifica se rolou para baixo
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.HeaderNav} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Classe 'invisible' vai esconder o elemento ao rolar */}
      <div className={`${styles.top} ${isScrolled ? styles.invisible : ''}`}>
        <p>
          <i className="fa fa-whatsapp"></i> Fale por whatsapp: <a href="https://api.whatsapp.com/send?l=pt&phone=5511996016574">(11) 99601-6574</a>
        </p>
        <p>
          <i className="fa fa-phone"></i> Ligue para nós: <a href="tel:551146760398">(11) 4676-0398</a>
        </p>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-dark bg-white text-success ${isScrolled ? 'scrolled-navbar' : ''}`}>
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <img src="/logo01.png" className="d-block w-100" alt="logo" />
          </Link>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ marginLeft: "20%" }}>
              <li className="nav-item">
                <Link href="/" className="nav-link text-dark">Início</Link>
              </li>
              <li className="nav-item">
                <Link href="/quemsomos" className="nav-link text-dark">Quem Somos</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produtos
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-primary hover-text-success" href="/produtos">Todos os produtos</Link></li>
                  <li><Link className="dropdown-item text-primary hover-text-success" href="/bracos">Braços e Pinças</Link></li>
                  <li><Link className="dropdown-item text-primary" href="/discos">Discos</Link></li>
                  <li><Link className="dropdown-item text-primary" href="/eletrodos">Eletrodos</Link></li>
                  <li><Link className="dropdown-item text-primary" href="/pinos">Pinos Guia e Buchas</Link></li>
                  <li><Link className="dropdown-item text-primary" href="/portaeletrodos">Porta Eletrodos</Link></li>
                  <li><Link className="dropdown-item text-primary" href="/shunts">Shunts</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/contato" className="nav-link text-dark">Contato</Link>
              </li>
              <li className="nav-item">
                <Link href="/trabalheconosco" className="nav-link text-dark">Trabalhe Conosco</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <a href="https://wa.me/5511996016574?text= Olá, tudo bem?" target="_blank" rel="noopener noreferrer">
        <img src="/whatsAppicone.png" className={styles.whatsicon} alt="" />
      </a>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  );
}
