import styles from "./presentation.module.css";

export default function Presentation() {
  return (
    <div className={styles.container}>
      <div className={styles.imgleft}>
        <div className={styles.imgson}></div>
      </div>
      <div className={styles.presentation}>
        <h1>História</h1>
        <h2>
          Empresa com quase 25 anos de experiência no ramo de reposição de solda
          por resistência, usinagem de materiais ferrosos e não ferrosos
          principalmente para atender indústria automotiva. Trabalhamos com as
          principais montadoras de veículos leves e pesados do país fornecendo
          todos os tipos de materiais e peças para a soldagem a ponto, projeção,
          costura, e topo a topo.
        </h2>
      </div>
      <div className={styles.linksright}>
        <div className={styles.linksrightson}>
          <h3>
            Da matéria-prima ao produto final, a LC Copper fabrica
            porta-eletrodos, pinças, braços para robôs e muito mais, com
            materiais de alta qualidade e designs customizáveis.
          </h3>
        </div>
        <div className={styles.linksrightson}>
          <h3>
            Invista em automação industrial de ponta com a LC Copper! Nossos
            braços para robôs e pinças de solda oferecem precisão milimétrica,
            durabilidade incomparável e tecnologia de resfriamento
          </h3>
        </div>
        <div className={styles.linksrightson}>
          <h3>
            Da consultoria ao desenvolvimento de produtos: LC Copper, seu
            parceiro completo em soldagem e automação. Soluções personalizadas
            para cada desafio: conte com a LC Copper para elevar sua produção a
            um novo patamar.
          </h3>
        </div>
      </div>
    </div>
  );
}
