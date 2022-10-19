import { Garagem } from "./Componentes/Garagem";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}