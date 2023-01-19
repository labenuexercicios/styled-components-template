import styled from "styled-components";

// Quando usa o hover altera a cor do fundo.

export const Botao = styled.button`
border:none;
background-color:orange;
padding: 5px;


:hover{
    background-color: red
}

`
// O styled.main cria uma "main", pd usar qlqr classe
export const GaragemContainer = styled.main`
// background-color: gray;
display: flex;
flex-direction: column;
align-items: center;
gap:1rem;

`

export const Estacionamento = styled.section`
// background-color:green;
display:grid;
grid-template-columns: 1fr 1fr;
gap:2rem;


li{
    list-style:none;
}


`
export const Header = styled.header`
display: flex;
color: white;
justify-content: center;
background-color:orange;
width: 100vw;

`