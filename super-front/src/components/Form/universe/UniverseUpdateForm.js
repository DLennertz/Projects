import { useFormik } from "formik";
import UniverseService from "../../../services/UniverseService";
import Swal from "sweetalert2";

const UniverseUpdateForm = () => {
  var formData = new FormData();
  const universeService = new UniverseService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const universe = {
        id: values.id,
        name: values.name
      };
      const jsonData = JSON.stringify(universe);
      const newUniverse = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("universe", newUniverse);
      universeService
        .updateUniverse(formData)
        .then(() => {
          new Swal("", "Update feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Universe Update</label>
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

export default UniverseUpdateForm;
