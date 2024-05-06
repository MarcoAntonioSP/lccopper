import styles from "./productstyles.module.css";

export default function Bracos() {
  return (
    <div className={styles.container}>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>
            Braços para Robô e Pinças de Solda LC Copper:
            <br /> Precisão e Durabilidade para Automação Industrial
          </h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/bracosepincas/braco01.jpg" alt="braco de robo" />
          </div>
          <div className={styles.textprod}>
            <h1>
              {" "}
              A LC Copper oferece soluções completas em braços para robô e
              pinças de solda, atendendo às demandas do setor automotivo e
              outras indústrias com tecnologia de ponta e qualidade superior.
              <br />
            </h1>
            <br />
            <h3>
              • Nossos diferenciais: Fabricação completa: Desde a fundição e
              usinagem dos braços até a montagem das pinças, com cilindros e
              ferramentais, garantimos o controle total do processo produtivo.
              <br />
              • Materiais de alta performance: Utilizamos alumínio, CUCR, CUNIBE
              e outras ligas especiais, selecionadas para oferecer a máxima
              resistência, durabilidade e condutividade.
              <br />• Bancada de testes exclusiva: Nossos produtos passam por
              rigorosos testes de qualidade e segurança, assegurando o
              desempenho e a confiabilidade em suas aplicações. <br />• Modelos
              customizáveis:“c” e tipo “x”), adaptando-nos às suas necessidades
              específicas.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>Benefícios dos nossos braços para robô e pinças de solda:</h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/bracosepincas/braco02.png" alt="eletrodo" />
          </div>
          <div className={styles.textprod}>
            <h1> Precisão milimétrica:</h1>
            <br />
            <h3>
              Garanta soldas perfeitas com a rigidez e estabilidade dos nossos
              braços, permitindo o posicionamento exato do eletrodo.
              <br />
              • Durabilidade incomparável: Os materiais de alta resistência e o
              acabamento de excelência proporcionam uma longa vida útil, mesmo
              sob condições exigentes. <br />
              • Eficiência energética: A alta condutividade elétrica otimiza o
              fluxo de corrente, reduzindo o consumo de energia e aumentando a
              produtividade.
              <br />• Adaptabilidade total: Com diferentes tipos de eletrodos e
              designs flexíveis, nossos braços se adaptam a diversas aplicações
              e materiais.
              <br />• Resfriamento otimizado: Alguns modelos contam com sistema
              de resfriamento a água, evitando superaquecimento e garantindo a
              operação contínua.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
