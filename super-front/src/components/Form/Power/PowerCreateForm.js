import { useFormik } from "formik";
import PowerService from "../../../services/PowerService";
import Swal from "sweetalert2";

const PowerCreateForm = () => {
  var formData = new FormData();
  const powerService = new PowerService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const power = {
        name: values.name
      };
      const jsonData = JSON.stringify(power);
      const newPower = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("power", newPower);
      powerService
        .createPower(formData)
        .then(() => {
          new Swal("", "Cadastro feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Power Create</label>
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

export default PowerCreateForm;
