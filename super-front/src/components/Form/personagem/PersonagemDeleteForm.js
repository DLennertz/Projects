import { useFormik } from "formik";
import PersonagemService from "../../../services/PersonagemService";
import Swal from "sweetalert2";

const PersonagemDeleteForm = () => {
  const personagemService = new PersonagemService();

  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: (values) => {
      const id = values.id;

      personagemService
        .deletePersonagemById(id)
        .then(() => {
          new Swal("", "Delete feito com sucesso", "success");
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Personagem Delete</label>
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

export default PersonagemDeleteForm;
