import styles from "./banner.module.css";
import Link from "next/link"; // Import Link from next/link

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.buttonContainer}>
        <Link href="/vantagens"> {/* Use Link for internal routing */}
          <button className={`${styles.button} ${styles.button1}`}>
            Nossas Vantagens
          </button>
        </Link>
        <Link href="/nossosclientes"> {/* Use Link for internal routing */}
          <button className={`${styles.button} ${styles.button2}`}>
            Nossos Clientes
          </button>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.animatedText}>LC Copper: Precisão e Eficiência para a Automação Industrial.</p>
      </div>
    </div>
  );
}
