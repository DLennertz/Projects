import { Formik, Form, Field } from "formik";
import RaceService from "../../../services/RaceService";
import Swal from "sweetalert2";

const RaceDeleteForm = () => {
  const raceService = new RaceService();
  const initialValues = {
    id: "",
  };

  const handleSubmit = async (values, actions) => {
    const response = await raceService
      .deleteRaceById(values.id)
      .then(() => {
        new Swal({
          title: "",
          text: "Delete feito com sucesso",
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

    actions.setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="ID">ID da Raça</label>
              <Field type="number" name="id" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Remover Raça
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RaceDeleteForm;
