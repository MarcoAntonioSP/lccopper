import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap

export default function ProdBanner() {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Catálogo</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <Link href={product.link}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    name: "Eletrodos",
    description: "Eletrodos de alta qualidade para soldagem eficiente.",
    image: "/eletrodos/eletrodo02.png",
    link: "eletrodos",
  },
  {
    name: "Braços e Pinças",
    description:
      "Braços e pinças desenvolvidos para otimizar processos de soldagem.",
    image: "/bracosepincas/braco01.jpg",
    link: "bracos",
  },
    {
    name: "Discos",
    description: "Discos de soldagem para diferentes aplicações industriais.",
    image: "/discos/disco1.png",
    link: "discos",
  },
  {
    name: "Pinos Guia e Buchas",
    description: "Pinos guia e buchas para soldagem precisa e segura.",
    image: "/pinosguiabuchas/pino01.webp",
    link: "pinos",
  },
  {
    name: "Porta Eletrodos",
    description:
      "Porta eletrodos com refrigeração externa para melhor performance.",
    image: "/portaeletrodos/portaeletrodo02.png",
    link: "portaeletrodos",
  },

  {
    name: "Shunts",
    description: "Shunts de precisão para garantir a eficiência da soldagem.",
    image: "/shunts/shunts01.png",
    link: "shunts",
  },
];
