import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./presentation.module.css";

export default function Presentation() {
  const { ref, inView } = useInView({ threshold: 0.09 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  return (
    <div ref={ref} className={`${styles.serviceBgArea} ${animate ? styles.visible : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className={styles.title}>
            <h2>NOSSOS SERVIÇOS</h2>
            <h3>Conforto e Qualidade em Soldagem</h3>
            <h1>LC Copper Metalúrgica</h1>
          </div>
        </div>

        {/* Service Area */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-wrench"></i>
                <h3>Reposição de Solda</h3>
                <p>
                  Com quase 25 anos de experiência, oferecemos soluções de solda por resistência
                  para a indústria automotiva, garantindo qualidade e eficiência.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-gear-fill"></i>
                <h3>Usinagem de Materiais</h3>
                <p>
                  Trabalhamos com materiais ferrosos e não ferrosos, atendendo as demandas
                  das principais montadoras do país.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-robot"></i>
                <h3>Automação Industrial</h3>
                <p>
                  Nossos braços para robôs e pinças de solda oferecem precisão milimétrica e
                  durabilidade incomparável.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-file-earmark-person"></i>
                <h3>Consultoria Técnica</h3>
                <p>
                  Oferecemos consultoria especializada para otimizar seus processos de soldagem
                  e automação.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-tools"></i>
                <h3>Manutenção de Equipamentos</h3>
                <p>
                  Realizamos manutenção preventiva e corretiva, assegurando a longevidade e
                  desempenho dos seus equipamentos.
                </p>
              </div>
            </div>
          </div>

          {/* Serviço 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className={styles.serviceItem}>
              <div className={styles.textBox}>
                <i className="bi bi-box"></i>
                <h3>Fornecimento de Materiais</h3>
                <p>
                  Da matéria-prima ao produto final, garantimos o fornecimento de materiais de
                  alta qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.callToAction}>
          <a href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" className={styles.ctaButton}>
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
}
