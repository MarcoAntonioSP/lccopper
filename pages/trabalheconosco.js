// Add "use client" at the top to mark this as a Client Component
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Vagas() {
  const [vagasCdt, setVagasCdt] = useState([]);

  useEffect(() => {
    // Assuming you want to fetch vagas data from the API
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

  return (
    <div className={styles.vagastyle}>
      <form action="" className={styles.container}>
        <h1>Cadastrar vaga</h1>
        <input type="text" name="nome" placeholder="nome" />
        <input type="text" name="descricao" placeholder="descricao" />
        <input type="text" name="requisitos" placeholder="requisitos" />
        <input type="text" name="salario" />
        <input type="text" name="localizacao" placeholder="localizacao" />
        <button type="button">Cadastrar</button>
      </form>

      {/* Iterate over vagasCdt array using .map() */}
      {vagasCdt.map((vagas) => (
        <div key={vagas.id} className={styles.vagacontainer}>
          <div key={vagas.id} className={styles.vagasview}>
            <br />
            <p>nome: {vagas.nome}</p>
            <p>descricao: {vagas.descricao}</p>
            <p>requisitos: {vagas.requisitos}</p>
            <p>salario: {vagas.salario}</p>
            <p>localizacao: {vagas.localizacao}</p>
            <br />
          </div>
          <div>
            <button className={styles.buttonTrash} style={{ width: "50px", height: "60px" }}>
              <img src="./icones/edit.png" style={{ width: "50px", height: "50px" }} alt="" />
            </button>
            <button className={styles.buttonTrash} style={{ width: "50px", height: "60px" }}>
              <img src="./icones/lixeira.png" style={{ width: "50px", height: "50px" }} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
