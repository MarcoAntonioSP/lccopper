import styles from "./cliente.module.css";

export default function Clientes() {
  return (
    <div className={styles.container}>
      {/* Fornecedor 1 */}
      <section className={styles.section}>
        <h2 className={styles.title}>LC Copper: Construindo Parceiras de Sucesso</h2>
        <p className={styles.paragraph}>
          Na LC Copper, acreditamos que o sucesso do cliente é o nosso sucesso. Por isso, construímos relações fortes e duradouras com nossos parceiros, oferecendo soluções personalizadas e inovadoras que impulsionam seus negócios.
        </p>
        {/* Espaço para imagem do fornecedor 1 */}
        <div className={styles.imageContainer}>
          {/* <img src="caminho/para/imagem.jpg" alt="Nome do Fornecedor 1" /> */}
        </div>
      </section>

      {/* Seção com destaques do fornecedor 1 */}
      <section className={styles.section}>
        <p> Nossos clientes encotraram na LC Copper o parceiro ideal para a construção de seus projetos. Nossa equipe de engenheiros desenvolveram soluções inovadoras e personalizadas para cada cliente, impulsionando o crescimento de suas empresas e elevando os seus padrões de qualidade.</p><br />
        <div className={styles.grid}>
          <div className={styles.box}>
            <img src="/clientesleft.png" alt="adasdasd" />
          </div>
          <div className={styles.box}>
            <img src="/clientesright.png" alt="adasdasd" />
          </div>
          {/* Adicione mais boxes para outras características */}
        </div>
      </section>

      {/* Repita a estrutura para outros fornecedores */}
      {/* ... */}

    </div>
  );
}