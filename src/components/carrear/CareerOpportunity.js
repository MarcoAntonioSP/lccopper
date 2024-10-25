import React from 'react';
import Image from 'next/image';
import styles from './CareerOpportunity.module.css';

const CareerOpportunity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/bannertop.png"
          alt="Metallurgy Industry"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <h2>Oportunidades na Indústria Metalúrgica</h2>
        <p>Faça parte de uma equipe inovadora em uma indústria em constante evolução.</p>
      </div>
    </div>
  );
};

export default CareerOpportunity;
