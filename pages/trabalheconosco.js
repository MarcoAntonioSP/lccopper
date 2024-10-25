"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../services/api";
import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import styles from './trabalhe.module.css';
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";
import CareerOpportunity from "../src/components/carrear/CareerOpportunity";

export default function Vagas() {
    const [vagasCdt, setVagasCdt] = useState([]);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        endereco: '',
        vagadeinteresse: '',
        curriculo: null,
    });

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await api.get("/vagas");
                setVagasCdt(response.data);
            } catch (error) {
                console.error("Error fetching vagas:", error);
            }
        };

        fetchVagas();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            curriculo: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        console.log(formData);
    };

    return (
        <div className={styles.vagastyle}>
            <NavBar />
            <BannerOneimg title="Trabalhe Conosco" />
            <h1 style={{ marginBottom: "50px", marginTop: "50px" }}>Vagas Disponíveis</h1>

            <div className={styles.vagasList}>
                {vagasCdt.map((vaga) => (
                    <div key={vaga.id} className={styles.vagaCard}>
                        <h2 className={styles.vagaTitle}>{vaga.nome}</h2>
                        <p className={styles.vagaDescription}>{vaga.descricao}</p>
                        <p className={styles.vagaRequisitos}><strong>Requisitos:</strong> {vaga.requisitos}</p>
                        <p className={styles.vagaSalario}><strong>Salário:</strong> {vaga.salario}</p>
                        <p className={styles.vagaLocalizacao}><strong>Localização:</strong> {vaga.localizacao}</p>
                    </div>
                ))}
            </div>

            <form className={styles.applicationForm} onSubmit={handleSubmit}>
                <h2>Candidatar-se à Vaga</h2>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="endereco"
                    placeholder="Qual vaga você tem interesse"
                    value={formData.vagadeinteresse}
                    onChange={handleInputChange}
                    required
                />
                

                <label htmlFor="curriculo" className={styles.fileLabel}>
                    Enviar Currículo (apenas PDF ou TXT):
                </label>
                <input
                    type="file"
                    name="curriculo"
                    accept=".pdf,.txt"
                    onChange={handleFileChange}
                    required
                    id="curriculo"
                />

                <button type="submit">Enviar Candidatura</button>
            </form>


            <CareerOpportunity />
            <Footer />
        </div>
    );
}
