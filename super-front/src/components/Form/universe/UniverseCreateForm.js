import { useFormik } from "formik";
import UniverseService from "../../../services/UniverseService";
import Swal from "sweetalert2";

const UniverseCreateForm = () => {
  var formData = new FormData();
  const universeService = new UniverseService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const universe = {
        name: values.name
      };
      const jsonData = JSON.stringify(universe);
      const newUniverse = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("universe", newUniverse);
      universeService
        .createUniverse(formData)
        .then(() => {
          new Swal("", "Cadastro feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Universe Create</label>
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

export default UniverseCreateForm;
