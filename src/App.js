import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#D9F7E9",
      corPrimaria: "#57C278",
    },
    {
      nome: "Front-End",
      cor: "#E8F8FF",
      corPrimaria: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#F0F8E2",
      corPrimaria: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#FDE7E8",
      corPrimaria: "#E06B69",
    },
    {
      nome: "UX e Design",
      cor: "#FAE9F5",
      corPrimaria: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFF5D9",
      corPrimaria: "#FFBA05",
    },
    {
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
    console.log("Deletando Colaborador");
    
  }

  function mudarCorDoTime(cor,nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        return {...time, cor: cor}
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
