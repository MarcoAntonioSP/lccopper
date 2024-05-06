import styles from "./cliente.module.css";

export default function Clientes () {
  return (
    <div className={styles.container}>
    {/* Fornecedor 1 */}
    <section className={styles.section}>
    <h2 className={styles.title}>Nome do Fornecedor 1</h2>
    <p className={styles.paragraph}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    ultricies, enim ac egestas facilisis, ligula est ultricies massa,
    sit amet aliquet erat ligula ac nulla.
    </p>
    {/* Espaço para imagem do fornecedor 1 */}
    <div className={styles.imageContainer}>
    {/* <img src="caminho/para/imagem.jpg" alt="Nome do Fornecedor 1" /> */}
    </div>
    </section>
    
    {/* Seção com destaques do fornecedor 1 */}
    <section className={styles.section}>
    <h3 className={styles.subtitle}>Por que escolher o Fornecedor 1?</h3>
    <div className={styles.grid}>
    <div className={styles.box}>
    <h4>Característica 1</h4>
    <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className={styles.box}>
    <h4>Característica 2</h4>
    <p>Aenean euismod bibendum laoreet.</p>
    </div>
    {/* Adicione mais boxes para outras características */}
    </div>
    </section>
    
    {/* Repita a estrutura para outros fornecedores */}
    {/* ... */}
    
    </div>
    );
    }