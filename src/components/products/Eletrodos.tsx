import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Eletrodos() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1} ${styles.titleShadow}`}>
          Eletrodos de Solda por Resistência: A Solução para Alta Produtividade e Baixo Custo
        </h1>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/eletrodos/eletrodo02.png"
            alt="eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            Nossos eletrodos de solda por resistência são projetados com ligas de alta resistência ao desgaste, garantindo maior durabilidade e vida útil prolongada.
          </h2>
          <h5 className="text-warning">Benefícios:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Maior Vida Útil:</strong> Nossos eletrodos resistem a temperaturas extremas, reduzindo a deformação e a necessidade de dressagem, minimizando o tempo de inatividade e aumentando a produtividade.</li>
            <li><strong>Maior Produtividade:</strong> A resistência aprimorada à deformação permite intervalos mais longos entre as dressagens, reduzindo o tempo de inatividade e aumentando a eficiência da linha de produção.</li>
            <li><strong>Redução de Custos:</strong> A vida útil prolongada dos eletrodos reduz a frequência de substituições, economizando custos de manutenção e melhorando a qualidade da solda, o que pode levar à redução da corrente de solda e economia de energia.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/eletrodos/eletrodo03.jpg"
            alt="eletrodo"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            Fabricados com precisão, eles são ideais para aplicações de alta produção em solda por ponto, projeção e costura.
          </h2>
          <h5 className="text-warning">Benefícios:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Maior Vida Útil:</strong> Nossos eletrodos resistem a temperaturas extremas, reduzindo a deformação e a necessidade de dressagem, minimizando o tempo de inatividade e aumentando a produtividade.</li>
            <li><strong>Maior Produtividade:</strong> A resistência aprimorada à deformação permite intervalos mais longos entre as dressagens, reduzindo o tempo de inatividade e aumentando a eficiência da linha de produção.</li>
            <li><strong>Redução de Custos:</strong> A vida útil prolongada dos eletrodos reduz a frequência de substituições, economizando custos de manutenção e melhorando a qualidade da solda, o que pode levar à redução da corrente de solda e economia de energia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
