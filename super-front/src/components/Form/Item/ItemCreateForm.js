import { useState } from "react";
import { useFormik, Formik } from "formik";
import ItemService from "../../../services/ItemService";
import Swal from "sweetalert2";

const ItemCreateForm = () => {
  const itemService = new ItemService();

  const [listPower, setListPower] = useState([]);
  const [name, setName] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleAddPower() {
    const newList = listPower.concat({ name });
    setListPower(newList);
    document.getElementById("myForm").reset();
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
      power: [],
    },
    onSubmit: (values) => {
      const item = {
        name: values.name,
        power: listPower,
      };

      itemService
        .createItem(item)
        .then(() => {
          new Swal({
            title: "",
            text: "Registro feito com sucesso",
            icon: "success",
            buttons: ["NO", "YES"],
          }).then(function (isConfirm) {
            if (isConfirm) {
              window.location.reload();
            } else {
            }
          });
        })
        .catch((error) => new Swal("", error, "error"));
    },
  });

  return (
    <div>
      <Formik>
        <form id="myForm" className="item-form" onSubmit={formik.handleSubmit}>
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
      </Formik>
    </div>
  );
};

export default ItemCreateForm;
