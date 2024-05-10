import styles from "./contato.module.css";

export default function Contato() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contato</h2>
        <div className={styles.info}>
          <p className={styles.paragraph}>
            <strong>Escritório e Fábrica:</strong>
            <br />
            Rua São João, 200 | Jardim Soeiro
            <br />
            Ferraz de Vasconcelos - SP
            <br />
            CEP 08540-200
          </p>
          <p className={styles.paragraph}>
            <strong>Telefone:</strong> (11) 4676-0398 / 4676-3092
            <br />
            <strong>Fax:</strong> (11) 4679-7171
            <br />
            <strong>Celular:</strong> (11) 94789-5483
          </p>
          <p className={styles.paragraph}>
            <strong>Engenheiro Comercial:</strong> Eduardo Giuliatti Teixeira
          </p>
          <p className={styles.paragraph}>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:fernando@lccopper.com.br">
              fernando@lccopper.com.br
            </a>
            <br />
            <strong>Site:</strong>{" "}
            <a href="http://www.lccopper.com.br">www.lccopper.com.br</a>
          </p>
        </div>
      </section>

      {/* Seção de contato */}
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
