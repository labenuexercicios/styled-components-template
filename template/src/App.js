import  {Garagem}  from "./componentes/Garagem/Garagem";
import { GlobalStyle} from "./componentes/GlobalStyle/GlobalStyle";


export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}