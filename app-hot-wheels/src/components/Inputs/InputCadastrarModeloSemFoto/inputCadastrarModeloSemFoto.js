import React, { useState, useEffect } from "react";

import CarrosService from "../../../services/CarrosService";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputCadastrarModeloSemFoto = () => {
  const carrosService = new CarrosService();

  var formDataModelo = new FormData();

  const handleSubmit = (values) => {
    const data = {
      nomeCompleto: values.nome,
      dataNascimento: values.ano,
    };

    const jsonData = JSON.stringify(data);
    const modelo = new Blob([jsonData], {
      type: "application/json",
    });

    formDataModelo.append("carroVO", modelo);

    carrosService
      .createModeloSemFoto(formDataModelo)
      .then(
        (resp) => alert("Cadastro bem sucedido"),
        window.location.reload(true)
      )
      .catch((error) => console.log("Deu errado", error));
  };
  const validations = yup.object().shape({});

  return (
    <>
      <Formik
        initialValues={{
          nome: "",
          ano: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Form">
          <p>Informações</p>
          <div className="Form_div" id="infoPessoal">
            <div className="Form_Group">
              <Field
                name="nome"
                className="Form_Field"
                placeholder="Nome do carro"
              />
              <ErrorMessage
                component="span"
                name="nome"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="ano" className="Form_Field" placeholder="Ano" />
              <ErrorMessage
                component="span"
                name="ano"
                className="Form_Error"
              />
            </div>

            <div className="Form_div" id="campoButao">
              <button className="Form_Btn" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputCadastrarModeloSemFoto;
