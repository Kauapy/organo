import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
const Formulario = (props, cadastrarTime) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');


  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
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
          obrigatorio
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
          valor={time}
          aoAlterado={valor => setTime(valor)}
         ></ListaSuspensa>
        <Botao>Criar card</Botao>
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault()
        props.cadastrarTime({nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do Time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        ></CampoTexto>
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
    
  );
};

export default Formulario;
