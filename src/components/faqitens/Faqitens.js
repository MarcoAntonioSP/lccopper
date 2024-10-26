import styles from './faq.module.css';
import Image from 'next/image';

export default function Faqitens () {
    return (
        <div className={styles.faqContainer}>
            <div className={`${styles.questions} shadow-lg my-4 p-3 rounded`}>
                <div className="text-center">
                    <h3 className="fadeIn">Perguntas Frequentes</h3>
                </div>
                <div className="row justify-content-around align-items-center">
                    <div className="col-8 col-md-5 text-center">
                        <Image 
                            src="/historia02.webp" 
                            className={`${styles.customImgFaq} img-responsive`}
                            alt="Imagem de uma linha de montagem"
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="my-2 col-12 col-md-7 text-center">
                        <div className="accordion" id="accordionExample">
                            {[
                                {
                                    question: "Qual a experiência da empresa no setor?",
                                    answer: "Com quase 25 anos de experiência, somos especializados em reposição de solda por resistência e usinagem de materiais, atendendo principalmente a indústria automotiva."
                                },
                                {
                                    question: "Quais produtos vocês oferecem?",
                                    answer: "Oferecemos uma ampla gama de produtos, incluindo pinças de solda, consumíveis para solda a ponto, eletrodos e cabos bipolares e unipolares."
                                },
                                {
                                    question: "Como posso entrar em contato com a empresa?",
                                    answer: "Você pode entrar em contato através do telefone (11) 4676-0398 ou pelo email eduardo@lccopper.com.br."
                                },
                                {
                                    question: "Vocês possuem certificação de qualidade?",
                                    answer: "Sim, estamos em processo de implementação da ISO 9000 para garantir a qualidade e a melhoria contínua de nossos processos."
                                },
                                {
                                    question: "Quais ligas vocês processam?",
                                    answer: "Processamos diversas ligas, incluindo Cobre Cromo, Cobre Níquel Berílio e Cobre Cobalto Berílio."
                                }
                            ].map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header">
                                        <button 
                                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                                            type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target={`#collapse${index + 1}`} 
                                            aria-expanded={index === 0} 
                                            aria-controls={`collapse${index + 1}`}
                                        >
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div 
                                        id={`collapse${index + 1}`} 
                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className={styles.accordionBody}>
                                            <strong>{item.answer}</strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
