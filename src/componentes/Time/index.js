import "./Time.css";
import Colaborador from "../Colaborador";
const Time = (props, aoDeletar) => {
  const css = { backgroundColor: props.corSecundaria };
  const tituloEstilo = { borderColor: props.corPrimaria };

  return (
    (props.colaboradores.length) > 0 && <section className="time" style={css}>
      <h3 style={tituloEstilo}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={props.nome}
              aoDeletar={(aoDeletar) =>{
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Time;
