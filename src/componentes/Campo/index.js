import "./Campo.css";

const Campo = ({ label, placeholder, valor, aoAlterado, obrigatorio, type = 'text' }) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={type}
      ></input>
    </div>
  );
};

export default Campo;