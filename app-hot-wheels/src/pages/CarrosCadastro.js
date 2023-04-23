import React from "react";
import Header from "../components/header/header";
import SubMenu from "../components/SubMenu/SubMenu";
import InputCadastrarModeloSemFoto from "../components/Inputs/InputCadastrarModeloSemFoto/inputCadastrarModeloSemFoto";

import "./ModeloCadastro.css";
const CarrosCadastro = () => (
  <>
    <Header />
    <div id="container">
      <SubMenu />

      <div className="campo">
        <h2>Cadastrar Novo Carro</h2>
        <InputCadastrarModeloSemFoto />
      </div>
    </div>
  </>
);

export default CarrosCadastro;
