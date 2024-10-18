import styles from './headernav.module.css';
import Script from 'next/script';

export default function HeaderNav() {
  return (
    <div className={styles.HeaderNav}>
      <div>
        <div className={styles.top}>
          <p>
            <i className="fa fa-whatsapp"></i> Fale por whatsapp: <a href="https://api.whatsapp.com/send?l=pt&phone=5511 996016574">(11) 99601-6574</a>
          </p>
          <p>
            <i className="fa fa-phone"></i> Ligue para nós: <a href="tel:5511 996016574">(11) 99601-6574</a>
          </p>
        </div>
      </div>

      <nav className={`${styles.nav} navbar navbar-expand-lg navbar-dark bg-transparent text-success`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo01.png" className="d-block w-100" alt="logo" />
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
                <a className="nav-link" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>
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
                  <li><a className="dropdown-item text-primary hover-text-success" href="#">Eletrodos</a></li>
                  <li><a className="dropdown-item text-primary" href="#">Porta Eletrodos</a></li>
                  <li><a className="dropdown-item text-primary" href="#">Pinos Guia e Buchas</a></li>
                  <li><a className="dropdown-item text-primary" href="#">Braços e Pinças</a></li>
                  <li><a className="dropdown-item text-primary" href="#">Discos</a></li>
                  <li><a className="dropdown-item text-primary" href="#">Shunts</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleCaptions" className="carousel slide my-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="home01.png" className="d-block w-100" alt="Qualidade e Inovação em Soluções de Soldagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Qualidade e Inovação em Soluções de <span className='fst-italic'>Soldagem para a Indústria</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Transforme sua produção com nossas soluções de solda de alta performance. Junte-se aos líderes do setor!
              </p>
              <div className={styles.buttonsbanner}>
                <ul className={styles.listbutton}>
                  <li> <a className={styles.textcarouselson3} href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-success">Solicite um Orçamento</button></a></li>
                  <li> <a className={styles.textcarouselson4} href="tel:551146760398" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone" style={{ marginLeft: "10px", marginRight: "4px" }}></i><button type="button" class="btn btn-outline-primary">(11) 4676-0398</button></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/trabalhe01.jpeg" className="d-block w-100" alt="Experiência de Quase 25 Anos em Reposição de Solda e Usinagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Experiência de Quase 25 Anos em <span className='fst-italic'>Reposição de Solda e Usinagem</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Somos o parceiro ideal para sua indústria automotiva. Solicite um orçamento e descubra!
              </p>
              <div className={styles.slider_btn}>
                <a className={styles.witr_btn} href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">Conheça Nossas Soluções</a>
                <a className={styles.witr_btn} href="tel:5511996016574" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"></i> (11) 99601-6574</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/trabalhe01.jpeg" className="d-block w-100" alt="Experiência de Quase 25 Anos em Reposição de Solda e Usinagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
              Compromisso Inabalável com a <span className='fst-italic'>Excelência em Nossos Produtos</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Somos o parceiro ideal para sua indústria automotiva. Solicite um orçamento e descubra!
              </p>
              <div className={styles.slider_btn}>
                <a className={styles.witr_btn} href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">Conheça Nossas Soluções</a>
                <a className={styles.witr_btn} href="tel:5511996016574" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"></i> (11) 99601-6574</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/usinagem01.png" className="d-block w-100" alt="Compromisso Inabalável com a Excelência em Nossos Produtos" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Compromisso Inabalável com a <span className='fst-italic'>Excelência em Nossos Produtos</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Nossas soluções garantem soldagens precisas e duráveis. Entre em contato e eleve sua produção ao próximo nível!
              </p>
              <div className={styles.slider_btn}>
                <a className={styles.witr_btn} href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                <a className={styles.witr_btn} href="tel:5511996016574" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"></i> (11) 99601-6574</a>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  );
}
