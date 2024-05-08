import styles from "./quemsomos.module.css";

export default function QuemSomos() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}> Estrutura organizacional</h2>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Missão</h3>
        <p className={styles.paragraph}>
          Manufaturar produtos que atendam com prontidão e até superar as
          necessidades dos mais complexos processos de nossos parceiros.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Visão</h3>
        <p className={styles.paragraph}>
          Ser reconhecida pelas partes interessadas como uma Organização cujo
          desempenho seja digno de um fornecedor eficiente, eficaz e efetivo.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Valores</h3>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h4>Bom Nome</h4>
            <p>Conduzir nossos negócios com ética, legalidade e excelência.</p>
          </div>
          <div className={styles.box}>
            <h4>O Cliente</h4>
            <p>
              Ouvir, responder e valorizar nossos clientes, garantindo a
              qualidade de produtos e serviços.
            </p>
          </div>
          <div className={styles.box}>
            <h4>Os Funcionários</h4>
            <p>
              Tratar com dignidade, respeito e recompensar de forma justa,
              estimulando o desenvolvimento através de orientação e treinamento.
            </p>
          </div>
          <div className={styles.box}>
            <h4>Nossos Acionistas</h4>
            <p>
              Garantir valorização através de rendimentos lucrativos e
              sustentáveis, sendo o fabricante com menor custo no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Seções para Política da Qualidade, Objetivos da Qualidade e Direção */}
      {/* ... código similar às seções anteriores ... */}
    </div>
  );
}
