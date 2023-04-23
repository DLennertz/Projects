import { useFormik } from "formik";
import EyeService from "../../../services/EyeService.js";
import Swal from "sweetalert2";

const EyeUpdateForm = () => {
  var formData = new FormData();
  const eyeService = new EyeService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const eye = {
        id: values.id,
        name: values.name
      };
      const jsonData = JSON.stringify(eye);
      const newEye = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("eyeColor", newEye);
      eyeService
        .updateEye(formData)
        .then(() => {
          new Swal("", "Update feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Eye Color Update</label>
      <input
        id="id"
        name="id"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.id}
        placeholder="ID"
      />
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EyeUpdateForm;
