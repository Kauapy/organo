import { IoIosCloseCircle } from "react-icons/io";
import "./Colaborador.css";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiCursorClick } from "react-icons/pi";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, id, aoFavoritar, favorito, corPrimaria }) => {
  
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="colaborador" style={{ backgroundColor: corDeFundo }}>
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <FaHeart {...propsFavorito} color="#ff0000"/>
          ) : (
            <CiHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;