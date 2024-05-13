import Image from "next/image";
import Link from "next/link";
import styles from "./contato.module.css";

export default function Contato() {
  const linkContainerStyles = {
    color: "white" /* Cor branca */,
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entre em Contato</h2>
      <div className={styles.contatoContainer}>
        <div className={styles.contatoItem}>
          <div className={styles.imageContainer}>
            <Image
              src="/logofootersf.png"
              alt="Logo lccopper"
              width={200}
              height={50}
            />
          </div>
          <div>
            <h3>Fernando Ramirez</h3>
            <p>Comercial</p>
            <p>
              (11) 4676-0398
              <br />
              (11) 94023-8626
              <br />
              (11) 99601-6574
            </p>
            <a href="mailto:fernando@lccopper.com.br">
              fernando@lccopper.com.br
            </a>
          </div>
        </div>
        <div className={styles.contatoItem}>
          <div className={styles.imageContainer}>
            <Image
              src="/logofootersf.png"
              alt="Logo lccopper"
              width={200}
              height={50}
            />
          </div>
          <div>
            <h3>Eduardo Giuliatti</h3>
            <p>Engenheiro Comercial</p>
            <p>
              (11) 4676-0398
              <br />
              (11) 94487-0665
            </p>
            <a href="mailto:eduardo@lccopper.com.br">
              eduardo@lccopper.com.br
            </a>{" "}
            <br />
            <a
              href="http://www.lccopper.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.lccopper.com.br
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contatoItem}>
        <div>
          <br />
          <br />
          <h3>Escritório e Fábrica:</h3>
          <p>Rua São João, 200 | Jardim Soeiro</p>
          <p>Ferraz de Vasconcelos - SP</p>
          <p>CEP 08540-200</p>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Nome
          </label>
          <input
            type="text"
            id="name"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.formLabel}>
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Mensagem
          </label>
          <textarea
            id="message"
            className={styles.formInput}
            rows="4"
            required
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Enviar
        </button>
      </form>
    </div>
  );
}
