function Estudante(props) {
  return (
    <div>
      <ul>
        <li>nome: {props.nome}</li>
        <li>idade: {props.idade}</li>
        <li>corDaRoupa:{props.corDaRoupa}</li>
        <li>criadoPor:{props.criadoPor}</li>
      </ul>
    </div>
  );
}

export default Estudante;
