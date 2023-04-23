import { useFormik } from "formik";
import HairService from "../../../services/HairService";
import Swal from "sweetalert2";

const HairCreateForm = () => {
  var formData = new FormData();
  const hairService = new HairService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const hair = {
        name: values.name
      };
      const jsonData = JSON.stringify(hair);
      const newHair = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("hairColor", newHair);
      hairService
        .createHair(formData)
        .then(() => {
          new Swal("", "Cadastro feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Hair Color Create</label>
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

export default HairCreateForm;
