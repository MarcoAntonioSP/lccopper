import styles from "./trabalhe.module.css";

export default function TrabalheConosco() {
  return (
    <div className={styles.container}>
      {/* Box de Vagas */}
      <section className={styles.vagas}>
        <h2 className={styles.title}>Vagas Abertas</h2>
        <div className={styles.vagasBox}>
          {/* Exemplo de Vaga */}
          <div className={styles.vaga}>
            <h3 className={styles.vagaTitle}>
              Sem vagas no momento
            </h3>
            <p className={styles.vagaDescription}>
              
            </p>
            <ul className={styles.vagaRequirements}>
              <li>
                
              </li>
              <li>

              </li>
              <li>
                
              </li>
            </ul>
          </div>
          {/* Adicione mais vagas aqui */}
        </div>
      </section>

      {/* Formulário de Candidatura */}
      <section className={styles.form}>
        <h2
          className={`${styles.title2} ${styles.title}`}
        >
          Envie seu currículo para uma das vagas acima
        </h2>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="curriculo">Currículo:</label>
            <textarea
              id="curriculo"
              name="curriculo"
              className={styles.formTextarea}
              placeholder="Cole seu currículo aqui"
              required
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Enviar Candidatura
          </button>
        </form>
      </section>
    </div>
  );
}