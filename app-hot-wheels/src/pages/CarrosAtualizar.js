import React from 'react';
import Header from '../components/header/header'
import SubMenu from '../components/SubMenu/SubMenu'
import InputAtualizarCarro from '../components/Inputs/InputAtualizarSemFoto/inputAtualizarCarro'

import './ModeloCadastro.css'
const CarrosAtualizarSemFoto = () => (
    <>
  
      <Header />
      <div id="container">
        <SubMenu/>

        <div className="campo">
               
          <h2>Atualizar Carro</h2>
          <InputAtualizarCarro/> 
        </div>
      </div>
    </>
  
  );
  
  export default CarrosAtualizarSemFoto;