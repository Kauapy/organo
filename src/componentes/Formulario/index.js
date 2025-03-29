import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
const Formulariio = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  return (
    <section className="formulario"> 
      <form>
        <h2>Preencha os dados para criar o card dos colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        ></CampoTexto>
        <ListaSuspensa label='Time' item={times}></ListaSuspensa>
      </form>
    </section>
  );
};

export default Formulariio;
