import { useState, useRef } from 'react';
import styles from './vagas.module.css';


export default function Vagas() {

    const vagasCdt = []

    return (
        <div className={styles.vagastyle}>
            <form action="" className={styles.container}>
                <h1>Cadastrar vaga </h1>
                <input type="text" name="nome" placeholder="nome" />
                <input
                    type="text"
                    name="descricao"
                    placeholder="descricao"
                />
                <input
                    type="text"
                    name="requisitos"
                    placeholder="requisitos"
                />
                <input
                    type="text"
                    name="salario"
                />
                <input
                    type="text"
                    name="localizacao"
                    placeholder="localizacao"
                />
                <button type="button">
                    Cadastrar
                </button>
            </form>

            {/* Iterate over vagasCdt array using .map() */}
            {vagasCdt.map((vagas) => (
                <div key={vagas.id} className={styles.vagacontainer}>
                    <div key={vagas.id} className={styles.vagasview}>
                        <br />
                        <p>nome: {vagas.nome} </p>
                        <p>descricao: {vagas.descricao} </p>
                        <p>requisitos: {vagas.requisitos} </p>
                        <p>salario: {vagas.salario}</p>
                        <p>localizacao: {vagas.localizacao}</p>
                        <br />
                    </div>
                    <div>
                        <button className={styles.buttonTrash} style={{ width: "50px", height: "60px" }}>
                            <img src='./icones/edit.png' style={{ width: "50px", height: "50px", }} alt="" />
                        </button>
                        <button className={styles.buttonTrash} style={{ width: "50px", height: "60px" }}>
                            <img src='./icones/lixeira.png' style={{ width: "50px", height: "50px", }} alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
