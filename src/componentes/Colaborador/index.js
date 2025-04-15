import { IoIosCloseCircle } from "react-icons/io";
import "./Colaborador.css";
const Colaborador = ({nome, imagem, cargo, cordeFundo, aoDeletar}) => {
  return (
    <div className="colaborador">
      <IoIosCloseCircle className="deletar" onClick={aoDeletar}/>
      <div className="cabecalho" style={{ backgroundColor: cordeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
