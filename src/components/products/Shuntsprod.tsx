import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import styles from "./productstyles.module.css"; // Importa estilos personalizados

export default function Shuntsprod() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-5">
        <h1 className={`display-4 text-primary ${styles.titleH1} ${styles.titleShadow}`}>
          Shunts de Alta Performance da LC Copper: Conexões Flexíveis e Eficientes
        </h1>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/shunts/shunts01.png"
            alt="Shunt de Alta Performance"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            A LC Copper oferece shunts de alta qualidade, fabricados sob medida para atender às suas necessidades específicas.
          </h2>
          <h5 className="text-warning">Por que escolher os Shunts da LC Copper?</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Fabricação Personalizada:</strong> Desenvolvemos shunts, barramentos flexíveis e fixos de acordo com as suas especificações, garantindo a compatibilidade perfeita com o seu projeto.</li>
            <li><strong>Materiais de Primeira Linha:</strong> Utilizamos Cobre Eletrolítico (CUEL) de alta condutividade, minimizando as perdas de energia e maximizando a eficiência.</li>
            <li><strong>Tecnologia Avançada:</strong> Aplicamos técnicas de fabricação de ponta, como soldagem por difusão de polímero, para garantir a durabilidade e a qualidade dos nossos produtos.</li>
            <li><strong>Flexibilidade e Resistência:</strong> Nossos shunts laminados são flexíveis o suficiente para absorver vibrações e movimentos, ao mesmo tempo em que oferecem excelente resistência mecânica.</li>
          </ul>
        </div>
      </div>

      <div className={`row align-items-center ${styles.texttop}`}>
        <div className="col-md-6 mb-4">
          <img
            src="/shunts/shunts02.png"
            alt="Shunt de Alta Performance"
            className={`img-fluid rounded ${styles.imgprod}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-white ${styles.titleH2} ${styles.titleShadow}`}>
            Seja para o setor automotivo, siderúrgico ou qualquer outra aplicação que demande conexões elétricas eficientes e confiáveis, nossos shunts garantem o desempenho ideal.
          </h2>
          <h5 className="text-warning">Aplicações Diversas: Ideais para:</h5>
          <ul className={`text-light ${styles.titleShadow}`}>
            <li><strong>Soldagem por resistência:</strong> Conexões flexíveis e eficientes para máquinas de solda.</li>
            <li><strong>Usinas de energia:</strong> Distribuição de energia com mínima perda.</li>
            <li><strong>Transformadores e Geradores:</strong> Conexões confiáveis para equipamentos de alta potência.</li>
            <li><strong>Comutadores:</strong> Operação segura e estável.</li>
            <li><strong>Além dos shunts:</strong> 
              <ul>
                <li><strong>Barramentos flexíveis:</strong> Adaptáveis a diferentes configurações e espaços.</li>
                <li><strong>Barramentos fixos usinados:</strong> Projetados para aplicações que exigem rigidez e precisão.</li>
              </ul>
            </li>
          </ul>
          <h5 className="text-light">Entre em contato conosco hoje mesmo para discutir suas necessidades e obter um orçamento personalizado. A LC Copper tem a solução ideal para suas conexões elétricas!</h5>
        </div>
      </div>
    </div>
  );
}
