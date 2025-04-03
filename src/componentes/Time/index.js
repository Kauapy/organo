import "./Time.css";
const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const tituloEstilo = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={css}>
      <h3 style={tituloEstilo}>{props.nome}</h3>
    </section>
  );
};

export default Time;
