import { useFormik } from "formik";
import HairService from "../../../services/HairService";
import Swal from "sweetalert2";

const HairUpdateForm = () => {
  var formDataHair = new FormData();
  const hairService = new HairService();

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      const hair = {
        id: values.id,
        name: values.name
      };
      const jsonData = JSON.stringify(hair);
      const newHair = new Blob([jsonData], {
        type: "application/json"
      });

      formDataHair.append("hairColor", newHair);
      hairService
        .updateHair(formDataHair)
        .then(() => {
          new Swal("", "Update feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Hair Color Update</label>
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

export default HairUpdateForm;
