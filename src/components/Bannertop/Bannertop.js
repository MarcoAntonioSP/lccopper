import styles from './bannertop.module.css';
import Script from 'next/script';
import Link from 'next/link';

export default function Bannertop() {
  return (
    <div className={styles.HeaderNav}>
      <div id="carouselExampleCaptions" className="carousel slide my-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="home01.png" className="d-block w-100" alt="Qualidade e Inovação em Soluções de Soldagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Qualidade e Inovação em Soluções de <span className='fst-italic break'>Soldagem para a Indústria</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Transforme sua produção com nossas soluções de solda de alta performance. Junte-se aos líderes do setor!
              </p>
              <div className={styles.buttonsbanner}>
                <ul className={styles.listbutton}>
                  <li> 
                    <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-success">Solicite um Orçamento</button>
                    </Link>
                  </li>
                  <li> 
                    <Link href="tel:551146760398" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-phone" style={{ marginLeft: "10px", marginRight: "4px" }}></i>
                      <button type="button" className="btn btn-outline-primary">(11) 4676-0398</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="trabalhe01.jpeg" className="d-block w-100" alt="Qualidade e Inovação em Soluções de Soldagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Experiência de Quase 25 Anos em <span className='fst-italic break'>Reposição de Solda e Usinagem</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Somos o parceiro ideal para sua indústria automotiva. Solicite um orçamento e descubra!
              </p>
              <div className={styles.buttonsbanner}>
                <ul className={styles.listbutton}>
                  <li> 
                    <Link href="/produtos" rel="noopener noreferrer">
                      <button type="button" className="btn btn-lg btn-primary">Conheça Nossas Soluções</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <img src="usinagem01.png" className="d-block w-100" alt="Qualidade e Inovação em Soluções de Soldagem" />
            <div className={styles.textcarousel}>
              <h5 className={styles.textcarouselson}>
                Compromisso Inabalável com a <span className='fst-italic break'>Excelência em Nossos Produtos</span>
              </h5>
              <p className={styles.textcarouselson2}>
                Somos o parceiro ideal para sua indústria automotiva. Solicite um orçamento e descubra!
              </p>
              <div className={styles.buttonsbanner}>
                <ul className={styles.listbutton}>
                  <li> 
                    <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-success">Solicite um Orçamento</button>
                    </Link>
                  </li>
                  <li> 
                    <Link href="tel:551146760398" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-phone" style={{ marginLeft: "10px", marginRight: "4px" }}></i>
                      <button type="button" className="btn btn-outline-primary">(11) 4676-0398</button>
                    </Link>
                  </li>
                </ul>
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
