import { useFormik } from "formik";
import EyeService from "../../../services/EyeService.js";
import Swal from "sweetalert2";

const EyeDeleteForm = () => {
  const eyeService = new EyeService();

  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: (values) => {
      const id = values.id;

      eyeService
        .deleteEyeById(id)
        .then(() => {
          new Swal("", "Delete feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Eye Color Delete</label>
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

export default EyeDeleteForm;
