import styles from "./structure.module.css";

export default function Structure() {
  return (
    <div className={styles.structure}>
      <div className={styles.sontwo}>
        <div className={styles.sontwoboxshadow}>
        <div className={`${styles.sontree} ${styles.imag1}`}></div>
          <div className={styles.sontreemidle}>Área total</div>
          <div className={styles.sontree}>
            <h4>• Área Total: 5000 m² <br/>
                • Área Construida: 2000 m²
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.sontwo}>
        <div className={styles.sontwoboxshadow}>
        <div className={`${styles.sontree} ${styles.imag2}`}></div>
          <div className={styles.sontreemidle}>Fundição</div>
          <div className={styles.sontree}>
            • Trefilação até Ø2” <br/>
            • Moldagem<br/>
            • Fundição (2 ton/dia)</div>
        </div>
      </div>
      <div className={styles.sontwo}>
        <div className={styles.sontwoboxshadow}>
          <div className={`${styles.sontree} ${styles.imag3}`}>
          </div>
          <div className={styles.sontreemidle}>Usinagem</div>
          <div className={styles.sontree}>
          • Tornos CNC <br/>
          • Centros de Usinagem <br/>
          • Tornos Mecânico<br/>
          • Fresadoras Ferramenteira<br/>
          • Entre outros
          </div>
        </div>
      </div>
    </div>
  );
}
