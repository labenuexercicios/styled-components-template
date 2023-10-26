import React from "react";

export default function Carro ( {carro}){
    return(
        <>
        <h2> {carro.modelo}</h2>
            <ul>
         
                <li> Cor: {carro.cor}</li>
                <li> Flex: {carro.flex}</li>
                <li> Ano: {carro.ano}</li>
                
            </ul>
        </>
    )
}