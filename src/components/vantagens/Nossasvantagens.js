import styles from "./vant.module.css";

export default function Nossasvantagens() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>
          LC Copper Metalúrgica Eireli: Sua Parceira em Soluções de Soldagem por
          Resistência
        </h2>
        <p className={styles.paragraph}>
          Com quase 25 anos de experiência no mercado, a LC Copper se destaca
          como líder no fornecimento de peças e soluções para soldagem por
          resistência. Atendemos às principais montadoras de veículos leves e
          pesados do país, oferecendo uma ampla gama de produtos e serviços que
          garantem alta qualidade, eficiência e durabilidade.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subtitle}>Por que escolher a LC Copper?</h3>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h4>Experiência e Conhecimento</h4>
            <p>Quase 25 anos dedicados à soldagem por resistência.</p>
          </div>
          <div className={styles.box}>
            <h4>Infraestrutura Completa</h4>
            <p>Instalações modernas com 5000 m² de área total.</p>
          </div>
          <div className={styles.box}>
            <h4>Materiais de Alta Performance</h4>
            <p>Melhores ligas de cobre para máxima resistência.</p>
          </div>
          {/* Adicione mais boxes para os outros itens da lista */}
        </div>
      </section>

      {/* Seção para a lista de produtos */}
      <section className={styles.section}>
        <h3 className={styles.subtitle}>Linha Completa de Produtos</h3>
        <ul className={styles.productList}>
          <li>Barras cilíndricas e forjadas</li>
          <li>Pinças de Solda</li>
          <li>Porta eletrodos</li>
          <li>Discos</li>
          <li>Braços de robo</li>
          <li>Shunts</li>
          {/* ... adicionar o resto da lista de produtos ... */}
        </ul>
      </section>

      {/* Seções para Engenharia de Ponta, Qualidade Assegurada, etc. */}
      {/* ... código similar às seções anteriores ... */}

      <section className={styles.section}>
        <p>
          A LC Copper é a escolha ideal para quem busca soluções em soldagem por
          resistência com:
        </p>
        <ul className={styles.benefitsList}>
          <li>Precisão e Durabilidade</li>
          <li>Eficiência Energética</li>
          <li>Alta Produtividade</li>
          <li>Baixo Custo</li>
        </ul>
      </section>

      <section className={styles.section}>
        <p>Entre em contato conosco e descubra como podemos ajudar!</p>
        <p>
          Visite nosso site:{" "}
          <a href="http://www.lccopper.com/">http://www.lccopper.com</a>
        </p>
        {/* ... informações de contato ... */}
      </section>
    </div>
  );
}
