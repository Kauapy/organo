import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#D9F7E9",
      corPrimaria: "#57C278",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#E8F8FF",
      corPrimaria: "#82CFFA",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#F0F8E2",
      corPrimaria: "#A6D157",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FDE7E8",
      corPrimaria: "#E06B69",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#FAE9F5",
      corPrimaria: "#DB6EBF",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFF5D9",
      corPrimaria: "#FFBA05",
      favrito: false,
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
      corPrimaria: "#FF8A29",
      favrito: false,
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador]);
  };

  function deletarColaborador(colaboradorId) {
    setColaboradores(
      colaboradores.filter((colaborador) => {
        return (
          colaborador.id !== colaboradorId &&
          colaborador.nome !== colaboradorId &&
          colaborador.uuidv4 !== colaboradorId
        );
      })
    );
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          return { ...time, cor: cor, corPrimaria: cor };
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([
      ...times,
      { ...novoTime, id: uuidv4(), corPrimaria: novoTime.cor },
    ]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map (colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div>
      <Banner></Banner>
      <Formulario
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      ></Formulario>
      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        ></Time>
      ))}
    </div>
  );
}

export default App;
