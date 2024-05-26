import styles from "./footerstyle.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const linkContainerStyles = {
    color: "white" /* Cor branca */,
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.menu} ${styles.container}`}>
        <div className={styles.imageContainer}>
        <Image
            src="/logofootersf.png"
            alt="Logo lccopper"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.contatos}>
          <h3>Fernando Ramirez</h3>
          <p>Comercial</p>
          <p>
            (11) 4676-0398
            <br />
            (11) 94023-8626
            <br />
            (11) 99601-6574
          </p>
          <a href="mailto:fernando@lccopper.com.br">fernando@lccopper.com.br</a>
        </div>
      </div>
      <div className={styles.container}>
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
          </a>{""} <br/> <br/>
          <a href="https://lccopper.com">
          www.lccopper.com
          </a>{""}
          <br />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
        </div>
        <div>
          <br/><br/> 
          <h3>Escritório e Fábrica:</h3>
          <p>Rua São João, 200 | Jardim Soeiro</p>
          <p>Ferraz de Vasconcelos - SP</p>
          <p>CEP 08540-200</p>
          <div className={styles.linkContainer}>
            <Link href="/" className={styles.link}>
              Início
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
