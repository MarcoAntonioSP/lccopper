import Link from 'next/link';
import styles from './banneroneimg.module.css';

export default function BannerOneimg({ title }) {
    return (
        <div className={styles.banneroneimg}>
            <h3>{title}</h3>
            <div>
                <Link href="/">Inicio</Link> 
            </div>
        </div>
    );
}
