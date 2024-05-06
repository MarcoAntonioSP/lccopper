import styles from "./productstyles.module.css";

export default function Discosprod() {
  return (
    <div className={styles.container}>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>
            Discos para Soldagem por Costura LC Copper: Eficiência e Qualidade
            em suas Mãos
          </h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/discos/disco1.jpg" alt="eletrodo" />
          </div>
          <div className={styles.textprod}>
            <h1>
              {" "}
              A LC Copper oferece a você discos para soldagem por costura de
              alta qualidade, projetados para atender às suas necessidades
              específicas. Fabricamos discos sob medida ou a partir de desenhos,
              garantindo a perfeita adequação ao seu processo de soldagem.
            </h1>
            <br />
            <h3>
              {" "}
              Por que escolher os discos LC Copper? <br />• Materiais de Alta
              Performance: Trabalhamos com ligas de cobre de excelência, como
              CUCR, CUCRZR e CUCOBE, que garantem condutividade elétrica
              superior, resistência ao desgaste e durabilidade excepcional.
              <br /> • Precisão e Confiabilidade: Nossos discos são fabricados
              com rigoroso controle de qualidade, assegurando dimensões precisas
              e desempenho consistente em suas operações de soldagem. <br />•
              Versatilidade: Atendemos a uma ampla gama de aplicações de
              soldagem por costura, desde chapas metálicas até a produção de
              motores elétricos. <br /> • Personalização: Desenvolvemos discos
              sob medida para atender às suas necessidades específicas de
              tamanho, liga e aplicação.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.texttop}>
        <div className={styles.title}>
          <h1>Benefícios dos discos para soldagem por costura LC Copper:</h1>
        </div>
        <div className={styles.imgandtext}>
          <div className={styles.imgprod}>
            <img src="/discos/disco2.jpg" alt="eletrodo" />
          </div>
          <div className={styles.textprod}>
            <h1> Com a LC Copper, você tem a garantia de:</h1>
            <br />
            <h3>
              • Produtos de alta qualidade <br />• Atendimento personalizado
              <br /> • Soluções sob medida
              <br /> • Compromisso com a sua satisfação Entre em contato conosco
              hoje mesmo e descubra como os discos para soldagem por costura LC
              Copper podem elevar a qualidade e a eficiência do seu processo de
              soldagem!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
