'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './section1.module.css';

export default function Section1() {
    const [designValue, setDesignValue] = useState(0);
    const [flexibilityValue, setFlexibilityValue] = useState(0);
    const [responseRateValue, setResponseRateValue] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const countUp = (start, end, setValue) => {
            let current = start;
            const increment = end / 100;
            const interval = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(interval);
                    setValue(end);
                } else {
                    setValue(Math.ceil(current));
                }
            }, 30);
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    countUp(0, 96, setDesignValue);
                    countUp(0, 87, setFlexibilityValue);
                    countUp(0, 94, setResponseRateValue);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: window.innerWidth < 768 ? 0.1 : 0.5,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`${styles.section1} container-fluid`}>
            <div className='row'>
                <div className='col-12 mt-4 text-center'>
                    <h1 className='text-primary fw-bold'>Nossa Missão</h1>
                </div>
                <div className='col-12 mt-4 fw-bold text-center text-primary'>
                    <p className='text-secondary '>
                        Com quase 25 anos de experiência no mercado, a LC Copper é especializada em reposição de solda por resistência,
                        usinagem de materiais ferrosos e não ferrosos, atendendo as principais montadoras de veículos leves e pesados do Brasil.
                        Nosso compromisso com qualidade e eficiência se reflete em soluções completas para soldagem a ponto, projeção, costura e
                        topo a topo, oferecendo produtos e serviços que superam as expectativas dos nossos clientes. Nossas instalações abrangem
                        uma área total de 5000 m², equipadas com alta tecnologia para garantir precisão e inovação em cada projeto.
                    </p>
                </div>
            </div>
            <div className={`container-fluid ${styles.footer}`}>
                <div className='row text-center d-flex justify-content-around mt-5'>
                    <div className="cols3 col-12 col-md-3 text-center position-relative">
                        <Image
                            src='/circle.png'
                            alt="Soldagem de Precisão"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-primary position-absolute top-50 start-50 translate-middle ${styles.customFontSize}`}>
                            {designValue}%
                        </h1>
                        <h2 className='mt-1'>Precisão em Soldagem</h2>
                    </div>
                    <div className="cols3 col-12 col-md-3 text-center position-relative">
                        <Image
                            src='/circle.png'
                            alt="Flexibilidade em Processos"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-primary position-absolute top-50 start-50 translate-middle ${styles.customFontSize}`}>
                            {flexibilityValue}%
                        </h1>
                        <h2 className='mt-1'>Flexibilidade em Processos</h2>
                    </div>
                    <div className="cols3 col-12 col-md-3 text-center position-relative">
                        <Image
                            src='/circle.png'
                            alt="Agilidade no Atendimento"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-primary position-absolute top-50 start-50 translate-middle  ${styles.customFontSize}`}>
                            {responseRateValue}%
                        </h1>
                        <h2 className='mt-1'>Agilidade no Atendimento</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
