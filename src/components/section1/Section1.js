'use client'; // Esta linha deve estar no topo

import { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import styles from './section1.module.css';

export default function Section1() {
    useEffect(() => {
        // Verifica se o ScrollReveal está disponível
        if (typeof window !== 'undefined' && window.scrollReveal) {
            const scrollReveal = window.scrollReveal();
            scrollReveal.reveal('.container', { duration: 5000 });
            scrollReveal.reveal('.container-fluid', { duration: 5000 });
            scrollReveal.reveal('.row', { duration: 5000 });
            scrollReveal.reveal('.cols3', { duration: 5000 });
        }
    }, []);

    return (
        <div
            className={`${styles.section1} container-fluid`}
            style={{ backgroundImage: `url('/bannersec1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='row'>
                <div className='col-12 mt-4 text-center'>
                    <h1>Our Object</h1>
                </div>
                <div className='col-4'></div>
                <div className='col-5 mt-4' style={{ marginBottom: '-120px', marginLeft: '-70px' }}>
                    <p style={{ width: "40vw" }}>
                        lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor, lorem
                        ipsum dolor sit amet, consectetur adip non pro id el metus et sapien
                        null null. Lorem ipsum dolor sit amet null et sapien null. Lorem ipsum
                        dolor sit amet null et sapien null. Lorem ipsum dolor sit amet null et
                        sapien null. Lorem Lore mam
                    </p>
                </div>
                <div className='col-3'></div>
            </div>
            <div className={`container-fluid ${styles.footer}`}>
                <div className='row text-center d-flex justify-content-around mt-5'>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle ${styles.customFontSize}`}>
                            91%
                        </h1>
                        <h2 className='mt-4'>Design</h2>
                    </div>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle`}>
                            87%
                        </h1>
                        <h2 className='mt-4'>Flexibility</h2>
                    </div>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle`}>
                            97%
                        </h1>
                        <h2 className='mt-4'>Response Rate</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
