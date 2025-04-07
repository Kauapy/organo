import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');


  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        ></CampoTexto>
        <ListaSuspensa 
          label="Time"
          item={props.times}
          obrigatorio={true}
          aoAlterado={valor => setTime(valor)}
         ></ListaSuspensa>
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
