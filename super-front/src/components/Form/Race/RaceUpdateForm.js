import { useState } from "react";
import { useFormik, Formik } from "formik";
import RaceService from "../../../services/RaceService";
import Swal from "sweetalert2";

const RaceUpdateForm = () => {
  const raceService = new RaceService();

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
      id: "",
      name: "",
      power: [],
    },

    onSubmit: (values) => {
      const race = {
        id: values.id,
        name: values.name,
        power: listPower,
      };

      raceService
        .updateRace(race)
        .then(() => {
          new Swal({
            title: "",
            text: "Update feito com sucesso",
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
        <form
          id="myForm"
          className="personagem-form"
          onSubmit={formik.handleSubmit}
        >
          <div className="title">
            <h2>Race Update</h2>
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
              <label>ID: </label>
              <input
                id="id"
                name="id"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id}
                placeholder="ID"
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
                    <li key={item.id}>
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

export default RaceUpdateForm;
