import { Formik, Form, Field } from "formik";
import HairService from "../../../services/HairService";
import Swal from "sweetalert2";

const HairCreateForm = () => {
  const hairService = new HairService();

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await hairService
        .createHair(values)
        .then(() => {
          new Swal({
            title: "",
            text: "Cadastro feito com sucesso",
            icon: "success",
            buttons: ["NO", "YES"],
          }).then(function (isConfirm) {
            if (isConfirm) {
              window.location.reload();
            } else {
            }
          });
        })
        .catch((error) => new Swal("", error, "error"));
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao fazer a solicitação POST:", error);
    }
    actions.setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="Name">Nome do Cabelo</label>
              <Field type="text" name="name" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Criar Cabelo
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HairCreateForm;
