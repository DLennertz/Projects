import { useState } from "react";
import { useFormik } from "formik";
import ItemService from "../../../services/ItemService";
import Swal from "sweetalert2";

const ItemCreateForm = () => {
  var formData = new FormData();
  const itemService = new ItemService();

  const [listPower, setListPower] = useState([]);
  const [name, setName] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleAddPower() {
    const newList = listPower.concat({ name });
    setListPower(newList);
  }

  function handleRemovePower(name) {
    const newList = listPower.filter(function (power) {
      return power.name !== name;
    });
    setListPower(newList);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      power: []
    },

    onSubmit: (values) => {
      const item = {
        name: values.name,
        power: listPower
      };

      const jsonData = JSON.stringify(item);
      const newItem = new Blob([jsonData], {
        type: "application/json"
      });

      formData.append("item", newItem);

      itemService
        .createItem(formData)
        .then(() => {
          new Swal("", "Cadastro feito com sucesso", "success").then(
            window.location.reload()
          );
        })
        .catch((error) => new Swal("", error, "error"));
    }
  });

  return (
    <form className="personagem-form" onSubmit={formik.handleSubmit}>
      <div className="title">
        <h2>Item Create</h2>
      </div>

      <div className="fields">
        <div className="field-div">
          <label>Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="list">
        <div className="content-div">
          <div>
            <label>Power: </label>
            <input type="text" onChange={handleChangeName} />
            <button type="button" onClick={handleAddPower}>
              ADD
            </button>
          </div>
          <ul>
            {listPower.map((item) => {
              return (
                <li key={item.name}>
                  {item.name}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemovePower(item.name)}
                  >
                    REMOVE
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemCreateForm;
