import React from "react";
import styles from "./prodbanner.module.css";
import Image from "next/image";

export default function ProdBanner() {
  return (
    <h1 className={styles.catalogTitle}>
      Catálogo
      <div className={styles.containerprod}>
        <div className={styles.productbox}>
          <a href="/eletrodos">
            {" "}
            <Image
              src="/eletrodos/eletrodo02.png"
              alt="Product 1"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <div className={styles.productInfo}>
            <h3>Eletrodos</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <a href="portaeletrodos">
            {" "}
            <Image
              src="/portaeletrodos/portaeletrodo02.jpg"
              alt="Product 2"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <div className={styles.productInfo}>
            <h3>Porta Eletrodos</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <a href="pinos">
            {" "}
            <Image
              src="/pinosguiabuchas/pino01.webp"
              alt="Product 3"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <div className={styles.productInfo}>
            <h3>Pinos Guia e Buchas</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <a href="bracos">
            {" "}
            <Image
              src="/bracosepincas/braco01.jpg"
              alt="Product 4"
              layout="fill"
              objectFit="cover"
            />
          </a>
          <div className={styles.productInfo}>
            <h3>Braços e Pinças</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <a href="discos">
            {""}
            <Image
              src="/discos/disco1.jpg"
              alt="Product 5"
              layout="fill"
              objectFit="cover"
            />
            {""}
          </a>
          <div className={styles.productInfo}>
            <h3>Discos</h3>
            <p></p>
          </div>
        </div>
        <div className={styles.productbox}>
          <a href="shunts">
            {" "}
            <Image
              src="/shunts/shunts02.webp"
              alt="Product 6"
              layout="fill"
              objectFit="cover"
            />{" "}
          </a>
          <div className={styles.productInfo}>
            <h3>Shunts</h3>
            <p></p>
          </div>
        </div>
      </div>
    </h1>
  );
}
