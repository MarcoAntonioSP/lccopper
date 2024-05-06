import styles from "./productstyles.module.css";

export default function Eletrodos() {
  return (
    <div className={styles.container}>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>
            Eletrodos de Solda por Resistência: A Solução para Alta
            Produtividade e Baixo Custo
          </h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/eletrodos/eletrodo02.png" alt="eletrodo" />
          </div>
          <div className={styles.textprod}>
            <h1>
              {" "}
              Nossos eletrodos de solda por resistência são projetados com ligas
              de alta resistência ao desgaste, garantindo maior durabilidade e
              vida útil prolongada.
            </h1>
            <br />
            <h3>
              Benefícios:
              <br />• Maior Vida Útil: Nossos eletrodos resistem a temperaturas
              extremas, reduzindo a deformação e a necessidade de dressagem,
              minimizando o tempo de inatividade e aumentando a produtividade.
              <br /> • Maior Produtividade: A resistência aprimorada à
              deformação permite intervalos mais longos entre as dressagens,
              reduzindo o tempo de inatividade e aumentando a eficiência da
              linha de produção.
              <br /> • Redução de Custos: A vida útil prolongada dos eletrodos
              reduz a frequência de substituições, economizando custos de
              manutenção e melhorando a qualidade da solda, o que pode levar à
              redução da corrente de solda e economia de energia.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>
            Fabricados com precisão, eles são ideais para aplicações de alta
            produção em solda por ponto, projeção e costura.
          </h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/eletrodos/eletrodo03.jpg" alt="eletrodo" />
          </div>
          <div className={styles.textprod}>
            <h1> Beneficios:</h1>
            <br />
            <h3>
              • Maior Vida Útil: Nossos eletrodos resistem a temperaturas
              extremas, reduzindo a deformação e a necessidade de dressagem,
              minimizando o tempo de inatividade e aumentando a produtividade.
              <br /> • Maior Produtividade: A resistência aprimorada à
              deformação permite intervalos mais longos entre as dressagens,
              reduzindo o tempo de inatividade e aumentando a eficiência da
              linha de produção.
              <br /> • Redução de Custos: A vida útil prolongada dos eletrodos
              reduz a frequência de substituições, economizando custos de
              manutenção e melhorando a qualidade da solda, o que pode levar à
              redução da corrente de solda e economia de energia.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
