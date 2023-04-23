import { useFormik } from "formik";
import PowerService from "../../../services/PowerService";
import Swal from "sweetalert2";

const PowerUpdateForm = () => {
  var formData = new FormData();
  const powerService = new PowerService();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: ""
    },
    onSubmit: (values) => {
      const power = {
        id: values.id,
        name: values.name
      };
      const jsonData = JSON.stringify(power);
      const newpower = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("power", newpower);
      powerService
        .updatePower(formData)
        .then(() => {
          new Swal("", "Update feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Power Update</label>
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

export default PowerUpdateForm;
