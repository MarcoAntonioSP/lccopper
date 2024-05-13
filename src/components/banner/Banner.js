import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.buttonContainer}>
        <a href="vantagens">
          <button className={`${styles.button} ${styles.button1}`}>
            Nossas Vantagens
          </button>
        </a>
        <a href="nossosclientes">
          <button className={`${styles.button} ${styles.button2}`}>
            Nossos Clientes
          </button>
        </a>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.animatedText}>LC Copper: Precisão e Eficiência para a Automação Industrial.</p>
      </div>
    </div>
  );
}
