import { Carro } from "../Carro/Carro";
import { Botao, Estacionamento, GaragemContainer, Header } from "./style";

export function Garagem(props) {
  return (

      <GaragemContainer>
      <Header>
      <h1>Garagem da {props.nome}</h1>
      </Header>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>
      <Estacionamento>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </Estacionamento>
      </GaragemContainer>

  );
}
