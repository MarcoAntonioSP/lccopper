import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Portaeletrodo() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1} ${styles.titleShadow}`}>
          Porta Eletrodos LC Copper:
        </h1>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/portaeletrodos/portaeletrodo03.png"
            alt="Porta Eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            Desempenho e Durabilidade para sua Soldagem
          </h2>
          <h5 className="text-warning">Otimize sua produção com os Porta Eletrodos LC Copper:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Fabricados com ligas de cobre de alta qualidade:</strong> como CUCR, CUCRZR e CUCOBE, garantindo excelente condutividade elétrica e térmica, assegurando soldas consistentes e de alta qualidade.</li>
            <li><strong>Alta resistência ao desgaste:</strong> prolongando a vida útil do porta eletrodo, mesmo sob uso intensivo.</li>
            <li><strong>Compatibilidade:</strong> disponíveis em modelos para atender às necessidades de solda ponto e projeção, com opções para porcas M6, M8, M10 e M12.</li>
            <li><strong>Design robusto:</strong> garantindo rigidez e força para suportar as demandas da soldagem industrial.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/portaeletrodos/portaeletrodo02.png"
            alt="Porta Eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            PRODUTO DE EXTREMA QUALIDADE!
          </h2>
          <h5 className="text-warning">Benefícios dos Porta Eletrodos LC Copper:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Maior produtividade:</strong> menos paradas para troca de porta eletrodos desgastados.</li>
            <li><strong>Soldas de alta qualidade:</strong> condutividade superior para resultados consistentes.</li>
            <li><strong>Redução de custos:</strong> maior vida útil do produto, minimizando a necessidade de substituições.</li>
            <li><strong>Versatilidade:</strong> opções para diferentes tipos de solda e tamanhos de porcas. Se você busca porta eletrodos confiáveis e de alta performance para a indústria automotiva, siderúrgica ou qualquer outra aplicação de soldagem, a LC Copper tem a solução ideal.</li>
            <li>Entre em contato conosco e descubra como os Porta Eletrodos LC Copper podem elevar a qualidade e eficiência da sua produção!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
