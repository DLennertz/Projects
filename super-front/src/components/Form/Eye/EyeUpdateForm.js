import { Formik, Form, Field } from "formik";
import EyeService from "../../../services/EyeService.js";
import Swal from "sweetalert2";

const EyeUpdateForm = () => {
  const eyeService = new EyeService();

  const initialValues = {
    id: "",
    name: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await eyeService
        .updateEye(values)
        .then(() => {
          new Swal({
            title: "",
            text: "Update feito com sucesso",
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
      console.error("Erro ao fazer a solicitação PUT:", error);
    }
    actions.setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="Id">Id do Olho</label>
              <Field type="number" name="id" />
            </div>

            <div>
              <label htmlFor="Name">Nome do Olho</label>
              <Field type="text" name="name" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Atualizar Olho
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EyeUpdateForm;
