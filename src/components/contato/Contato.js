import styles from "./contato.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Contato() {
  const linkContainerStyles = {
    color: "white" /* Cor branca */,
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3 className={styles.subtitle}>Envie uma mensagem</h3>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" rows="5" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
