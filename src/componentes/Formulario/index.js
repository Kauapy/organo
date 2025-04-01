import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]


  const aoSalvar = (event) =>{
    event.preventDefault()
    console.log("Form foi submetido");
    
  }

  return (
    <section className="formulario"> 
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        ></CampoTexto>
        <ListaSuspensa label='Time' item={times}></ListaSuspensa>
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
