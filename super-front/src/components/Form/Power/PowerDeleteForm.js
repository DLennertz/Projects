import { useFormik } from "formik";
import PowerService from "../../../services/PowerService";
import Swal from "sweetalert2";

const PowerDeleteForm = () => {
  const powerService = new PowerService();

  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: (values) => {
      const id = values.id;

      powerService
        .deletePowerById(id)
        .then(() => {
          new Swal("", "Delete feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Power Delete</label>
      <input
        id="id"
        name="id"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.id}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PowerDeleteForm;
