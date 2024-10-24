import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Discosprod() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1}`}>
          Discos para Soldagem por Costura LC Copper: Eficiência e Qualidade em suas Mãos
        </h1>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/discos/disco1.jpg"
            alt="eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2}`}>A LC Copper oferece a você discos para soldagem por costura de alta qualidade, projetados para atender às suas necessidades específicas.</h2>
          <p className={`text-light ${styles.titleShadow}`}>
            Fabricamos discos sob medida ou a partir de desenhos, garantindo a perfeita adequação ao seu processo de soldagem.
          </p>
          <h5 className="text-warning">Por que escolher os discos LC Copper?</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Materiais de Alta Performance:</strong> Trabalhamos com ligas de cobre de excelência, como CUCR, CUCRZR e CUCOBE, que garantem condutividade elétrica superior, resistência ao desgaste e durabilidade excepcional.</li>
            <li><strong>Precisão e Confiabilidade:</strong> Nossos discos são fabricados com rigoroso controle de qualidade, assegurando dimensões precisas e desempenho consistente em suas operações de soldagem.</li>
            <li><strong>Versatilidade:</strong> Atendemos a uma ampla gama de aplicações de soldagem por costura, desde chapas metálicas até a produção de motores elétricos.</li>
            <li><strong>Personalização:</strong> Desenvolvemos discos sob medida para atender às suas necessidades específicas de tamanho, liga e aplicação.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/discos/disco2.jpg"
            alt="eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2}`}>Com a LC Copper, você tem a garantia de:</h2>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li>Produtos de alta qualidade</li>
            <li>Atendimento personalizado</li>
            <li>Soluções sob medida</li>
            <li>Compromisso com a sua satisfação</li>
          </ul>
          <p className={`text-light ${styles.titleShadow}`}>
            Entre em contato conosco hoje mesmo e descubra como os discos para soldagem por costura LC Copper podem elevar a qualidade e a eficiência do seu processo de soldagem!
          </p>
        </div>
      </div>
    </div>
  );
}
