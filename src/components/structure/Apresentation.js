import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./ApStructure.module.css";

export default function ApresentationStructure() {
  // Usamos o hook useInView para monitorar se o componente está na viewport
  const { ref, inView } = useInView({
    threshold: 0.5, // Considera o componente visível quando 50% da sua área estiver visível
  });

  const [animate, setAnimate] = useState(false);

  // Sempre que o componente entrar ou sair da viewport, reiniciamos a animação
  useEffect(() => {
    if (inView) {
      setAnimate(true); // Quando entrar na viewport, iniciar animação
    } else {
      setAnimate(false); // Quando sair da viewport, deixar o componente invisível
    }
  }, [inView]); // Executa sempre que o estado de visibilidade mudar

  return (
    <div
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""}`}
    >
      <h1 className={styles.title}>A EMPRESA</h1>
      <p className={styles.description}>
        A LC Copper é uma empresa especializada na oferta abrangente de uma
        vasta gama de produtos e serviços voltados para o setor de soldagem e
        automação industrial. Nosso portfólio inclui uma variedade de itens
        essenciais, como Eletrodos, Porta Eletrodos, Braços, Cabos de Solda,
        Barramentos Fixos e Flexíveis, Pinças e Dispositivos para soldagem por
        resistência e projeção. Além de fornecer produtos de alta qualidade,
        também oferecemos serviços de consultoria, nacionalização de peças de
        Robô e desenvolvimento de produtos. Com um compromisso inabalável
        com a excelência e a inovação, buscamos constantemente atender às
        necessidades em constante evolução de nossos clientes, garantindo
        soluções eficazes e sob medida para cada desafio. A LC Copper está
        pronta para ser sua parceira confiável no avanço e na otimização de suas
        operações industriais.
      </p>
    </div>
  );
}
