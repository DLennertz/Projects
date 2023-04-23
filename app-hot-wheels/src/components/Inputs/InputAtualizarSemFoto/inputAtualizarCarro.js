import React, { useState, useEffect } from "react";

import CarrosService from "../../../services/CarrosService";
import CorService from "../../../services/CorService";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputAtualizarCarro = () => {
  const carrosService = new CarrosService();
  const corService = new CorService();
  const [cor, setCor] = useState([]);

  useEffect(() => {
    corService.getCor().then((cores) => setCor(cores));
  }, []);

  var formDataModelo = new FormData();

  const handleSubmit = (values) => {
    const data = {
      carroID: values.id,
      carroNome: values.nome,
      carroAno: values.ano,
      carroFoto: values.foto,
      carroCor: values.cor,
    };

    const jsonData = JSON.stringify(data);
    const carro = new Blob([jsonData], {
      type: "application/json",
    });

    formDataModelo.append("carroVO", carro);

    carrosService
      .updateModelo(formDataModelo)
      .then(
        (resp) => alert("Atualização bem sucedido"),
        window.location.reload(true)
      )
      .catch((error) => console.log("Deu errado", error));
  };
  const validations = yup.object().shape({});

  return (
    <>
      <Formik
        initialValues={{
          id: "",
          nome: "",
          ano: "",
          cor: "",
          foto: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Form">
          <p>Informações</p>
          <div className="Form_div" id="id">
            <div className="Form_Group">
              <Field name="id" className="Form_Field" placeholder="ID" />
              <ErrorMessage component="span" name="id" className="Form_Error" />
            </div>
          </div>
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
              <Field
                component="select"
                name="cor"
                className="Form_Field"
                placeholder="Cor"
              >
                <option value="">--Escolha uma cor--</option>
                {cor.map((item) => (
                  <option value={item.corNome}>{item.corNome}</option>
                ))}
              </Field>
              <ErrorMessage
                component="span"
                name="country"
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
            <div className="Form_Group">
              <Field
                name="foto"
                className="Form_Field"
                placeholder="Path foto"
              />
              <ErrorMessage
                component="span"
                name="foto"
                className="Form_Error"
              />
            </div>

            <button className="Form_Btn" type="submit">
              Atualizar
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputAtualizarCarro;
