import React from 'react';
import { Building, GraphUp, Gear, Tools, Bezier2, Lightning, Award, People, Envelope } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './companyOverview.module.css';

const CompanyOverview: React.FC = () => {
  return (
    <div className={`${styles.companyOverview} container-fluid py-5`}>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className={`${styles.mainTitle} text-center mb-5`}>
            <Building className={styles.icon} /> LC COPPER METALÚRGICA LTDA.
          </h1>
          <p className={`${styles.subtitle} text-center mb-5`}>Transformando metal em soluções inovadoras há quase 25 anos.</p>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className={`${styles.infoCard} card h-100`}>
                <div className="card-body">
                  <h2 className={`${styles.cardTitle} card-title`}><GraphUp className={styles.icon} /> Excelência em Metalurgia</h2>
                  <p className="card-text">Especializados em ligas de cobre e suas aplicações, oferecemos soluções únicas para desafios complexos na indústria automotiva e além.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className={`${styles.infoCard} card h-100`}>
                <div className="card-body">
                  <h2 className={`${styles.cardTitle} card-title`}><Gear className={styles.icon} /> Tecnologia de Ponta</h2>
                  <ul className="list-unstyled">
                    <li><Tools className={styles.icon} /> Fundição avançada com capacidade de 2 ton/dia</li>
                    <li><Bezier2 className={styles.icon} /> Usinagem de precisão com equipamentos CNC</li>
                    <li><Lightning className={styles.icon} /> Soluções personalizadas em soldagem</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className={`${styles.infoCard} card h-100`}>
                <div className="card-body">
                  <h2 className={`${styles.cardTitle} card-title`}><Award className={styles.icon} /> Compromisso com a Qualidade</h2>
                  <p className="card-text">Nossa busca incessante pela excelência nos levou a implementar rigorosos padrões de qualidade, garantindo produtos que superam as expectativas dos clientes mais exigentes.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className={`${styles.infoCard} card h-100`}>
                <div className="card-body">
                  <h2 className={`${styles.cardTitle} card-title`}><People className={styles.icon} /> Parceria e Inovação</h2>
                  <p className="card-text">Trabalhamos lado a lado com nossos clientes, desenvolvendo soluções inovadoras que impulsionam o crescimento mútuo e estabelecem novos padrões na indústria.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ctaSection} text-center mt-5`}>
            <h2 className={styles.ctaTitle}>Pronto para Elevar seu Projeto ao Próximo Nível?</h2>
            <p className={styles.ctaText}>Nossa expertise em metalurgia, combinada com tecnologia de ponta e compromisso com a qualidade, está à sua disposição. Vamos transformar suas ideias em realidade.</p>
            <a href="/contato" className={`btn btn-lg ${styles.ctaButton}`}>
              <Envelope className={`${styles.icon} me-2`} />
              Entre em Contato Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
