import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './apstructure.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Apresentation() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""} container-fluid py-5`}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 d-none d-md-block text-center">
          <Image
            className={`${styles.imgleft} img-fluid`}
            src="/trabalhe01.webp"
            alt="Logo lccopper"
            width={600}
            height={800}
          />
        </div>
        <div className="col-md-6 col-12 text-center text-md-left">
          <h4 className="text-warning">Eficiência, Inovação, Resultados</h4>
          <h1 className={`${styles.title} text-primary`}>Soluções Inovadoras em Soldagem e Automação Industrial</h1>
          <h2 className="text-secondary">Produtos de alta qualidade e serviços especializados para otimizar suas operações</h2>
          <p className={`${styles.description} text-muted`}>
            A LC Copper é uma empresa especializada na oferta abrangente de uma
            vasta gama de produtos e serviços voltados para o setor de soldagem e
            automação industrial. Nosso portfólio inclui uma variedade de itens
            essenciais, como Eletrodos, Porta Eletrodos, Braços, Cabos de Solda, Barramentos
            Fixos e Flexíveis, Pinças e Dispositivos para soldagem por resistência e projeção.
          </p>
          <h5 className="text-primary">Clique no botão abaixo e entre em contato com a nossa equipe para conhecer nossas soluções personalizadas!</h5>
          <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" className={styles.ctaButton}>
            <button className="btn btn-primary btn-lg mt-4">Clique aqui</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
