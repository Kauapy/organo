import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#D9F7E9",
      corPrimaria: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#E8F8FF",
      corPrimaria: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#F0F8E2",
      corPrimaria: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FDE7E8",
      corPrimaria: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#FAE9F5",
      corPrimaria: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFF5D9",
      corPrimaria: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
      corPrimaria: "#FF8A29",
    },
  ]
)


  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor,nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        return {...time, cor: cor, corPrimaria: cor}
      }
      return time;
    }))
  }

  return (
    <div>
      <Banner></Banner>
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      ></Formulario>
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        ></Time>
      ))}
    </div>
  );
}

export default App;
