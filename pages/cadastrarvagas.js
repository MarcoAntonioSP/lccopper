"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import api from "../services/api";
import NavBar from "../src/components/navbar/NavBar";
import Bannertop from "../src/components/Bannertop/Bannertop";
import Footer from "../src/components/footer/Footer";
import BannerOneimg from "../src/components/banneronepages/BannerOneimg";

export default function Vagas() {
  const [vagasCdt, setVagasCdt] = useState([]);
  const [editingVaga, setEditingVaga] = useState(null);
  const inputNome = useRef();
  const inputDescricao = useRef();
  const inputRequisitos = useRef();
  const inputSalario = useRef();
  const inputLocalizacao = useRef();

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

  const fetchCreate = async () => {
    const novaVaga = {
      nome: inputNome.current.value,
      descricao: inputDescricao.current.value,
      requisitos: inputRequisitos.current.value,
      salario: inputSalario.current.value,
      localizacao: inputLocalizacao.current.value,
    };

    try {
      await api.post("/vagas", novaVaga);
      console.log("Vaga cadastrada:", novaVaga);
      const response = await api.get("/vagas");
      setVagasCdt(response.data);
    } catch (error) {
      console.error("Error creating vaga:", error);
    }
  };

  const fetchDelete = async (id) => {
    try {
      await api.delete(`/vagas/${id}`);
      console.log("Vaga deletada:", id);
      const response = await api.get("/vagas");
      setVagasCdt(response.data);
    } catch (error) {
      console.error("Error deleting vaga:", error);
    }
  };

  const fetchEdit = async (id) => {
    const vagaAtualizada = {
      nome: inputNome.current.value,
      descricao: inputDescricao.current.value,
      requisitos: inputRequisitos.current.value,
      salario: inputSalario.current.value,
      localizacao: inputLocalizacao.current.value,
    };

    try {
      await api.put(`/vagas/${id}`, vagaAtualizada);
      console.log("Vaga atualizada:", vagaAtualizada);
      const response = await api.get("/vagas");
      setVagasCdt(response.data);
      setEditingVaga(null);
    } catch (error) {
      console.error("Error updating vaga:", error);
    }
  };

  const handleEdit = (vaga) => {
    setEditingVaga(vaga);
    inputNome.current.value = vaga.nome;
    inputDescricao.current.value = vaga.descricao;
    inputRequisitos.current.value = vaga.requisitos;
    inputSalario.current.value = vaga.salario;
    inputLocalizacao.current.value = vaga.localizacao;
  };

  return (
    <div className={styles.vagastyle}>
      <NavBar />
      <BannerOneimg title="Cadastro de Vagas" />
      <form className={`container ${styles.container}`}>
        <h1>{editingVaga ? "Editar vaga" : "Cadastrar vaga"}</h1>
        <input type="text" name="nome" placeholder="Nome" ref={inputNome} />
        <input type="text" name="descricao" placeholder="Descrição" ref={inputDescricao} />
        <input type="text" name="requisitos" placeholder="Requisitos" ref={inputRequisitos} />
        <input type="text" name="salario" placeholder="Salário" ref={inputSalario} />
        <input type="text" name="localizacao" placeholder="Localização" ref={inputLocalizacao} />
        <button className="btn btn-primary" type="button" onClick={editingVaga ? () => fetchEdit(editingVaga.id) : fetchCreate}>
          {editingVaga ? "Salvar" : "Cadastrar"}
        </button>
      </form>

      {vagasCdt.map((vaga) => (
        <div key={vaga.id} className={`vagacontainer ${styles.vagacontainer}`}>
          <div className={styles.vagasview}>
            <br />
            <p>Nome: {vaga.nome}</p>
            <p>Descrição: {vaga.descricao}</p>
            <p>Requisitos: {vaga.requisitos}</p>
            <p>Salário: {vaga.salario}</p>
            <p>Localização: {vaga.localizacao}</p>
            <br />
          </div>
          <div>
            <button className="btn btn-warning" onClick={() => handleEdit(vaga)} style={{ width: "50px", height: "60px" }}>
              <img src="./icones/edit.png" style={{ width: "30px", height: "30px" }} alt="" />
            </button>
            <button className="btn btn-danger" onClick={() => fetchDelete(vaga.id)} style={{ width: "50px", height: "60px" }}>
              <img src="./icones/lixeira.png" style={{ width: "30px", height: "30px" }} alt="" />
            </button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
