import React from "react";
//import Header from "./components/Header";
import Garagem from "./Garagem/Garagem";
//import Footer from "./components/Footer";
//import "./styles.css";
import { GlobalStyle } from "./components/GlobalStyle";
import { Estacionamento } from "./Garagem/style";
import FuscaImage from "./img/fusca.jpg";
import KombiImage from "./img/kombi.jpg";
import OpalaImage from "./img/Opala.jpg";
import CorselImage from "./img/Corsel.jpg";
import BrasiliaImage from "./img/brasilia.jpg";



export default function App() {
  const nome = "Raissa";
  const nome2 = "Lili";

  function apresentaGaragem(nome) {
    alert(`Boas vindas a garagem de ${nome}`);
  }



  const carro = {
    modelo: "Fusca",
    cor: "azul",
    ano: 1974,
    flex: "não",
    imagem: FuscaImage
  };

  const carro2 = {
    modelo: "Kombi",
    cor: "verde",
    ano: 1994,
    flex: "não",
    imagem: KombiImage
  };

  const carro3 = {
    modelo: "Opala",
    cor: "amarelo",
    ano: 1972,
    flex: "não",
    imagem: OpalaImage
  };

  const carro4 = {
    modelo: "Corsel",
    cor: "cinza",
    ano: 1964,
    flex: "sim",
    imagem: CorselImage
  };

  const carro5 = {
    modelo: "Brasilia",
    cor: "azul",
    ano: 2000,
    flex: "sim",
    imagem: BrasiliaImage
  };

  return (

    <div className="App">
      <GlobalStyle />
      <Estacionamento>
        <Garagem
          nomeGaragem={nome}
          apresentaGaragem={apresentaGaragem}
          carro1={carro}
          carro2={carro2}
          carro3={carro3}
          carro4={carro4}
        />

        <Garagem
          nomeGaragem={nome2}
          apresentaGaragem={apresentaGaragem}

          carro1={carro3}
          carro2={carro4}
          carro3={carro}
          carro4={carro5}
        />
      </Estacionamento>

    </div>

  );
}
