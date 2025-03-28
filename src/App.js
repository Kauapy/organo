import React from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
function App() {
  return (
    <div>
      <Banner></Banner>
      <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></ CampoTexto>
    </div>
  );
}

export default App;
