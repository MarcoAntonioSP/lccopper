import styles from './navbar.module.css'; 
import Script from 'next/script';

export default function Bannertop() {

  return (
    <div className={styles.HeaderNav}>
      
      {/* Topo da página com WhatsApp e telefone */}
      <div className={styles.top}>
        {/* Exibir este bloco apenas quando não rolou */}
        {!isScrolled && (
          <p>
            <i className="fa fa-whatsapp"></i> Fale por whatsapp: <a href="https://api.whatsapp.com/send?l=pt&phone=5511996016574">(11) 99601-6574</a>
          </p>
        )}
        {!isScrolled && (
          <p>
            <i className="fa fa-phone"></i> Ligue para nós: <a href="tel:551146760398">(11) 4676-0398</a>
          </p>
        )}
      </div>

      {/* Navbar */}
      <nav className={`${styles.nav} navbar navbar-expand-lg navbar-dark bg-transparent text-success ${isScrolled ? styles.scrolledNav : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* Exibir logo ou logo alterado baseado no scroll */}
            {!isScrolled ? (
              <img src="/logo01.png" className="d-block w-100" alt="logo" />
            ) : (
              <img src="/favicon.ico" className="d-block w-100" alt="logo" />
            )}
          </a>
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
                <a className="nav-link" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/quemsomos">Quem somos</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produtos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-primary hover-text-success" href="/produtos">Todos os produtos</a></li>
                  <li><a className="dropdown-item text-primary hover-text-success" href="/bracos">Braços e Pinças</a></li>
                  <li><a className="dropdown-item text-primary" href="/discos">Discos</a></li>
                  <li><a className="dropdown-item text-primary" href="/eletrodos">Eletrodos</a></li>
                  <li><a className="dropdown-item text-primary" href="/pinos">Pinos Guia e Buchas</a></li>
                  <li><a className="dropdown-item text-primary" href="/portaeletrodos">Porta Eletrodos</a></li>
                  <li><a className="dropdown-item text-primary" href="/shunts">Shunts</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trabalheconosco">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Ícone do WhatsApp */}
      <a href="https://wa.me/5511996016574?text= Olá, tudo bem?" target="_blank">
        <img src="/whatsAppicone.png" className={styles.whatsicon} alt="" />
      </a>

      {/* Carregando o script do Bootstrap */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  );
}
