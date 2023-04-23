import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Carros from "./pages/Carros";
import CarrosCadastro from "./pages/CarrosCadastro";
import CarrosEncontrar from "./pages/CarrosEncontrar";
import CarrosListar from "./pages/CarrosListar";
import CarrosAtualizar from "./pages/CarrosAtualizar";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Carros" component={Carros} />
      <Route path="/CadastrarCarros" component={CarrosCadastro} />
      <Route path="/EncontrarCarros" component={CarrosEncontrar} />
      <Route path="/ListarCarros" component={CarrosListar} />
      <Route path="/AtualizarCarros" component={CarrosAtualizar} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
