import React from "react";
import Carro from "../components/Carro/Carro";
import { Botao } from "./style";
import { GaragemContainer } from "./style";
import { ImgCarro } from "../components/Carro/styled";
import FuscaImage from "../img/fusca.jpg"; 
import KombiImage from "../img/kombi.jpg"; 


export default function Garagem(props) {
    return (
        <>
            <GaragemContainer>
                <h1> Garagem de {props.nomeGaragem}</h1>

                <Botao onClick={() => props.apresentaGaragem(props.nomeGaragem)}>Apresentar Garagem </Botao>
              
                <img src={props.carro1.imagem} alt={props.carro1.modelo} style={{ width: '100px', height: 'auto' }} />
                <Carro carro={props.carro1} />
               
                <img src={props.carro2.imagem} alt={props.carro1.modelo} style={{ width: '100px', height: 'auto' }}/>
                <Carro carro={props.carro2} />

                <img src={props.carro3.imagem} alt={props.carro1.modelo} style={{ width: '100px', height: 'auto' }} />
                <Carro carro={props.carro3} />

                <img src={props.carro4.imagem} alt={props.carro1.modelo} style={{ width: '100px', height: 'auto' }} />
                <Carro carro={props.carro4} />

            </GaragemContainer>
        </>

    );
}