import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './section3.module.css';
import Image from "next/image";

export default function Modelsection () {
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
        <div className="col-md-6 col-12 text-center text-md-left">
          <a href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" className={styles.ctaButton}>
          <button className="btn btn-primary btn-lg mt-4">Clique aqui</button>
          </a>
        </div>
      </div>

    </div>
  );
}
