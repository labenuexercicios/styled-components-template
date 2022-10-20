import { Carro } from "../Carro/Carro";
import { 
  BotaoGaragem, 
  ContainerGaragem, 
  Estacionamento } from "./style"; // posso usar , dentro do {} no lugar de abrir outra linha



export function Garagem(props) {
  return (
    <ContainerGaragem>    
      <h1>Garagem da {props.nome}</h1>
      <BotaoGaragem onClick={props.mensagemAprentacao}>Mensagem</BotaoGaragem>
       <Estacionamento>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} />
       </Estacionamento>
    </ContainerGaragem>
  );
}
