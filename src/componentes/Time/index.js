import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {

  const tituloEstilo = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor || "#FFFFFF", 0.5) }}
      >
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
          value={props.cor}
          type="color"
          className="input-cor"
        ></input>
        <h3 style={tituloEstilo}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                aoFavoritar={props.aoFavoritar} 
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                time={props.nome}
                aoDeletar={props.aoDeletar}
                id={colaborador.id || colaborador.nome}
                favorito={colaborador.favorito}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;