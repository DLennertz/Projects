import { useFormik } from "formik";
import EyeService from "../../../services/EyeService.js";
import Swal from "sweetalert2";

const EyeCreateForm = () => {
  var formData = new FormData();
  const eyeService = new EyeService();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      const eye = {
        name: values.name,
      };
      const jsonData = JSON.stringify(eye);
      const newEye = new Blob([jsonData], {
        type: "application/json",
      });

      formData.append("eyeColor", newEye);
      eyeService
        .createEye(formData)
        .then(() => {
          new Swal("", "Cadastro feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Eye Color Create</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EyeCreateForm;
