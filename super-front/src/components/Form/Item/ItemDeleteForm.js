import { useFormik } from "formik";
import ItemService from "../../../services/ItemService";
import Swal from "sweetalert2";

const ItemDeleteForm = () => {
  const itemService = new ItemService();

  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: (values) => {
      const id = values.id;

      itemService
        .deleteItemById(id)
        .then(() => {
          new Swal("", "Delete feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Item Delete</label>
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

export default ItemDeleteForm;
