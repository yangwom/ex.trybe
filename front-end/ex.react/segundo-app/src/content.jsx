import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];
function Renderizar({ conteudo, status, bloco }) {
  return ( <div key={conteudo} className="card">
  <h4>{`O conteudo é: ${conteudo}`}</h4>
  <p>{`status: ${status}`}</p>
  <p>{`bloco: ${bloco}`}</p>
</div>
)
}




class Content extends React.Component {
  render() {
    return <h1>{conteudos.map((conteudo) => Renderizar(conteudo))}</h1>;
  }
}

export default Content;
