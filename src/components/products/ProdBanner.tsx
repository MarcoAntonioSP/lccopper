import React from "react";
import styles from "./prodbanner.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProdBanner() {
  return (
    <h1 className={styles.catalogTitle}>
      Catálogo
      <div className={styles.containerprod}>
        <div className={styles.productbox}>
          <Link href="eletrodos">
            <img src="/eletrodos/eletrodo02.png" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Eletrodos</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <Link href="portaeletrodos">
            <img src="/portaeletrodos/portaeletrodo02.png" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Porta Eletrodos</h3>
            <p></p>
          </div>
        </div>  
        <div className={styles.productbox}>
          <Link href="pinos">
            <img src="/pinosguiabuchas/pino01.webp" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Pinos Guia e Buchas</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <Link href="bracos">
            <img src="/bracosepincas/braco01.jpg" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Braços e Pinças</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <Link href="discos">
            <img src="/discos/disco1.jpg" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Discos</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <Link href="shunts">
            <img src="/shunts/shunts01.png" alt="logo" className={styles.favicon} />
          </Link>
          <div className={styles.productInfo}>
            <h3>Shunts</h3>
            <p></p>
          </div>
        </div>
      </div>
    </h1>
  );
}
