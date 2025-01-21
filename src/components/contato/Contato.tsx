"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Importa o componente Image do Next.js

const apiUrl = "https://backendnodemailer.vercel.app";
const endpointUrl = `${apiUrl}/send`;

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  success: boolean;
  message: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [captchaQuestion, setCaptchaQuestion] = useState<string | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

  useEffect(() => {
    const loadCaptcha = () => {
      try {
        const questionsEnv = process.env.NEXT_PUBLIC_CAPTCHA_QUESTIONS || "[]";
        const answersEnv = process.env.NEXT_PUBLIC_CAPTCHA_ANSWERS || "[]";
        const questions: string[] = JSON.parse(questionsEnv);
        const answers: string[] = JSON.parse(answersEnv);

        if (questions.length > 0 && questions.length === answers.length) {
          const randomIndex = Math.floor(Math.random() * questions.length);
          setCaptchaQuestion(questions[randomIndex]);
          setCorrectAnswer(answers[randomIndex]);
        } else {
          console.error(
            "Erro: O número de perguntas e respostas do CAPTCHA não coincide ou está vazio."
          );
        }
      } catch (error) {
        console.error(
          "Erro ao carregar as perguntas e respostas do CAPTCHA:",
          error
        );
      }
    };

    loadCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (captchaAnswer.trim() !== correctAnswer) {
      setFormStatus({
        success: false,
        message: "Resposta do CAPTCHA incorreta. Tente novamente.",
      });
      return;
    }

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      setFormStatus({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setCaptchaAnswer("");
    } catch (error) {
      setFormStatus({
        success: false,
        message: `Erro ao submeter o formulário: ${error.message}`,
      });
    }
  };

  return (
    <div className="container">
      <div className="card bg-light p-4">
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2rem", fontWeight: "600" }}
        >
          Entre em contato conosco
        </h2>
        <p className="text-center mb-4">
          Estamos aqui para oferecer soluções personalizadas para seu projeto.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>
              Resolva: {captchaQuestion || "Carregando..."}
              <input
                type="text"
                value={captchaAnswer}
                onChange={handleCaptchaChange}
                disabled={!captchaQuestion}
                className="form-control"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={!captchaQuestion}
            className="btn btn-primary w-100"
          >
            Enviar mensagem
          </button>
        </form>
        {formStatus && (
          <div
            className="text-center mt-3"
            style={{ color: formStatus.success ? "green" : "red" }}
          >
            {formStatus.message}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-center">Entre em Contato</h2>

        <p className="text-center">Fernando Ramirez</p>
        <p className="text-center">Comercial</p>
        <p className="text-center">
          <strong>Telefones:</strong> <br />
          (11) 4676-0398 <br />
          (11) 94023-8626 <br />
          (11) 99601-6574 
        </p>
        <p className="text-center">
          <strong>E-mail:</strong> <br />
          fernando@lccopper.com
        </p>
        <p className="text-center">
          <strong>Escritório e Fábrica:</strong> <br />
          Rua São João, 200 | Jardim Soeiro <br />
          Ferraz de Vasconcelos - SP <br />
          CEP 08540-200
        </p>
      </div>
    </div>
  );
}
