import styles from "./footerstyle.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <h3>Contato</h3>
        <p>
          <strong>Escritório e Fábrica:</strong>
          <br />
          Rua São João, 200 | Jardim Soeiro
          <br />
          Ferraz de Vasconcelos - SP
          <br />
          CEP 08540-200
          <br />
        </p>
      </div>
      <div className={styles.contatphone}>
        <p>
          📞 Tel.: (11) 4676-0398 / 4676-3092 - <br />
          📞 Fax: (11) 4679-7171 - Cel: (11) 94789-5483
          <br />
          👷 Engenheiro Comercial: Eduardo Giuliatti Teixeira
          <br />
          📧E-mail:{" "}
          <a href="fernando@lccopper.com.br">fernando@lccopper.com.br</a>
          <br />
          🔗Nosso site:
          <a href="http://www.lccopper.com.br">http://www.lccopper.com.br</a>
        </p>
        <br /> <br /> <br />
        <a href="/" className={styles.link}>
          Início
        </a>
      </div>
    </footer>
  );
};

export default Footer;
