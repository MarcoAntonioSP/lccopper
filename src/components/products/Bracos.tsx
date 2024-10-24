import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Bracos() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1} ${styles.titleShadow}`}>
          Braços para Robô e Pinças de Solda LC Copper
        </h1>
        <p className={`lead text-white ${styles.titleShadow}`}>
          Precisão e Durabilidade para Automação Industrial
        </p>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/bracosepincas/braco01.jpg"
            alt="Braço de Robô"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>Soluções completas em braços para robô</h2>
          <p className={`text-light ${styles.titleShadow}`}>
            A LC Copper oferece soluções completas em braços para robô e pinças de solda, atendendo às demandas do setor automotivo e outras indústrias com tecnologia de ponta e qualidade superior.
          </p>
          <h5 className="text-warning">Nossos diferenciais:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Fabricação completa:</strong> Desde a fundição e usinagem dos braços até a montagem das pinças, garantimos o controle total do processo produtivo.</li>
            <li><strong>Materiais de alta performance:</strong> Utilizamos ligas especiais selecionadas para oferecer a máxima resistência e durabilidade.</li>
            <li><strong>Bancada de testes exclusiva:</strong> Rigorosos testes de qualidade e segurança asseguram o desempenho e a confiabilidade em suas aplicações.</li>
            <li><strong>Modelos customizáveis:</strong> Adaptamos nossos produtos às suas necessidades específicas.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 order-md-2 mb-4">
          <img
            src="/bracosepincas/braco02.png"
            alt="Braço de Robô"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>Benefícios dos nossos braços para robô</h2>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Precisão milimétrica:</strong> Garantia de soldas perfeitas com a rigidez e estabilidade dos nossos braços.</li>
            <li><strong>Durabilidade incomparável:</strong> Longa vida útil mesmo sob condições exigentes.</li>
            <li><strong>Eficiência energética:</strong> Alta condutividade elétrica que otimiza o fluxo de corrente.</li>
            <li><strong>Adaptabilidade total:</strong> Diferentes tipos de eletrodos e designs flexíveis para diversas aplicações.</li>
            <li><strong>Resfriamento otimizado:</strong> Modelos com sistema de resfriamento a água, evitando superaquecimento.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
