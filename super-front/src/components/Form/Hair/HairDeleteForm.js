import { useFormik } from "formik";
import HairService from "../../../services/HairService";
import Swal from "sweetalert2";

const HairDeleteForm = () => {
  const hairService = new HairService();

  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: (values) => {
      const id = values.id;

      hairService
        .deteleHairById(id)
        .then(() => {
          new Swal("", "Delete feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Hair Color Delete</label>
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

export default HairDeleteForm;
