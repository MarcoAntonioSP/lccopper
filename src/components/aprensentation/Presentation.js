import styles from "./presentation.module.css";

export default function Presentation() {
  return (
    <div className={styles.container}>
      <div className={styles.imgleft}>
        <div className={styles.imgson}></div>
      </div>
      <div className={styles.presentation}>
        <h1> História </h1>
        <h2>
          Empresa com quase 25 anos de experiência no ramo de reposição de solda
          por resistência, usinagem de materiais ferrosos e não ferrosos
          principalmente para atender indústria automotiva. Trabalhamos com as
          principais montadoras de veículos leves e pesados do país fornecendo
          todos os tipos de materiais e peças para a soldagem a ponto, projeção,
          costura, e topo a topo .
        </h2>
      </div>
      <div className={styles.linksright}>
        <div className={styles.linksrightson}>
          <h3>
            Tel.: (11) 4676-0398 / 4676-3092 Fax: (11) 4679-7171 Cel: (11)
            94789-5483
          </h3>
        </div>
        <div className={styles.linksrightson}>
          <h3>
            Eduardo Giuliatti Teixeira
            <br />
            Engenheiro Comercial <br />
            eduardo@lccopper.com.br
          </h3>
        </div>
        <div className={styles.linksrightson}>
          <h3>
            Escritório e Fábrica: Rua das Indústrias, 150 – Núcleo Itaim Ferraz
            de Vasconcelos - SP
          </h3>
        </div>
      </div>
    </div>
  );
}
