import React from 'react';
import Image from 'next/image';
import { FaThumbsUp } from 'react-icons/fa';
import styles from './section2.module.css'; // Corrigido aqui

const Section2 = () => {
  return (

    <div className="container mt-5">
      <div className="row align-items-center" style={{ minHeight: '550px' }}>
        {/* Lado esquerdo */}
        <div className="col-md-6">
          <h2 className="section-title">Apresentação da LC Copper</h2>
          <h4 className="section-subtitle">História e Inovação</h4>
          <p className="section-text">
            Com uma sólida experiência , a LC Copper se destaca pela sua
            atuação no setor de reposição de solda por resistência. Nosso foco
            é oferecer soluções inovadoras para as montadoras de veículos leves e
            pesados do Brasil, sempre priorizando a qualidade e a eficiência em
            nossos serviços.
          </p>
          <p className="section-text">
            Nossas instalações modernas, que cobrem uma área total de 5000 m²,
            são equipadas com tecnologias de ponta. Trabalhamos com precisão em
            soldagem, costura e projeção, buscando sempre superar as expectativas
            de nossos clientes e garantir resultados excepcionais em cada
            projeto.
          </p>
          <div className="d-flex align-items-center section-highlight">
            <span className="me-2">Incrível</span>
            <FaThumbsUp size={24} />
          </div>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Saiba Mais</button>
            <button className="btn btn-secondary">Nossos Produtos</button>
          </div>
        </div>

        {/* Lado direito */}
        <div className="col-md-6">
          <Image
            src="/quemsomos.jpg" // Substitua pelo caminho da sua imagem
            alt="Descrição da Imagem"
            width={500}
            height={550}
            className="img-fluid rounded shadow-lg mt-2"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Section2;
