import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Pinosguiabuchas() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1} ${styles.titleShadow}`}>
          Pinos Guia e Buchas LC Copper: Precisão e Durabilidade para Sua Soldagem
        </h1>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/pinosguiabuchas/pino03.png"
            alt="Pino Guia e Bucha"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            A LC Copper apresenta a solução definitiva para suas necessidades de soldagem por resistência:
          </h2>
          <h5 className="text-warning">Por que escolher Pinos Guia e Buchas da LC Copper?</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Isolamento Superior:</strong> O material possui uma camada isolante integrada, eliminando a passagem de corrente indesejada e garantindo soldas limpas e precisas.</li>
            <li><strong>Resistência ao Desgaste Excepcional:</strong> A dureza garante uma vida útil prolongada, mesmo em aplicações de alta demanda.</li>
            <li><strong>Esqueça a fragilidade da cerâmica:</strong> e as limitações dos revestimentos que descascam.</li>
            <li><strong>Precisão Inigualável:</strong> A estabilidade dimensional permite a fabricação de pinos e buchas com tolerâncias rígidas, garantindo o posicionamento perfeito das peças durante a soldagem.</li>
            <li><strong>Versatilidade:</strong> Disponível em uma ampla variedade de formatos e tamanhos padrão, incluindo M4, M5, M6, M8, M10, M12 e mais.</li>
            <li>Também oferecemos a possibilidade de fabricação sob medida, de acordo com suas necessidades específicas.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/pinosguiabuchas/pino02.webp"
            alt="Pino Guia e Bucha"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            Benefícios para sua operação:
          </h2>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Aumento da Produtividade:</strong> Menos interrupções para troca de pinos e buchas desgastados, resultando em maior eficiência e produção.</li>
            <li><strong>Qualidade Superior das Soldas:</strong> Soldas precisas e livres de defeitos, graças ao posicionamento perfeito das peças e à eliminação de corrente parasita.</li>
            <li><strong>Redução de Custos:</strong> A durabilidade significa menos substituições e menor custo total de propriedade.</li>
            <li><strong>Aplicações Ideais:</strong> Soldagem por projeção, soldagem de porcas e parafusos, soldagem de pinos, indústria automotiva e muito mais!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
