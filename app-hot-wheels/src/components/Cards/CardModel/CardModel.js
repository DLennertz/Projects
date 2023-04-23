import React from "react";
import "./CardModel.css";

const CardModel = (props) => {
  console.log(props.props)
  return (
    <div className="card">
      <div className="card__body">
        <h2 className="cardNome">{props.props.carroNome}</h2>
        <img
          className="cardFoto"
          src={`${props.props.carroFoto}`}
        />

        <div className="cardInfo">
          <div className="cardInfoBox">
            <p>ID {props.props.carroID}</p>
            <p>Ano {props.props.carroAno}</p>
            <p>Cor {props.props.carroCor}</p>
          </div>
        </div>
        <button className="card__btn">Mais detalhes</button>
      </div>
    </div>
  );
};
export default CardModel;
