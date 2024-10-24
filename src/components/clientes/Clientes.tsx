import styles from "./cliente.module.css";
import Link from "next/link"; // Adicionei o Link do Next.js

export default function Clientes() {
  return (
    <div className={styles.container}>
      {/* Fornecedor 1 */}
      <section className={styles.section}>
        <h2 className={styles.title}>Construindo Parceiras de Sucesso</h2>
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
        <p>Nossos clientes encontraram na LC Copper o parceiro ideal para a construção de seus projetos. Nossa equipe de engenheiros desenvolveu soluções inovadoras e personalizadas para cada cliente, impulsionando o crescimento de suas empresas e elevando os seus padrões de qualidade.</p>
        <br />
        <div className={styles.grid}>
          <div className={styles.box}>
            <img src="/clientesleft.png" alt="Imagem à esquerda" className="img-fluid" />
          </div>
          <div className={styles.box}>
            <img src="/clientesright.png" alt="Imagem à direita" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="text-center mt-5">
        <h3 className="text-primary">Pronto para fazer parte da nossa rede de clientes?</h3>
        <p className="text-muted">Entre em contato e descubra como podemos impulsionar o sucesso do seu projeto com soluções personalizadas e inovadoras.</p>
        
        <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" passHref>
          <button className="btn btn-primary btn-lg mt-3">
            Fale com nossa equipe
          </button>
        </Link>
      </section>
    </div>
  );
}
