import { Formik, Form, Field } from "formik";
import UniverseService from "../../../services/UniverseService";
import Swal from "sweetalert2";

const UniverseCreateForm = () => {
  const universeService = new UniverseService();

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await universeService
        .createUniverse(values)
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
              <label htmlFor="Name">Tipo de universo</label>
              <Field type="text" name="name" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Criar Universo
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UniverseCreateForm;
